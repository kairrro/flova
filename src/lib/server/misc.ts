import { supabase } from "./auth";

export function extractTokenFromCookies(cookies: string | null): string | undefined {
    if (!cookies) return;

    const cookieArray = cookies.split(";");

    for (let i = 0; i < cookieArray.length; i++) {
        const cookiePart = cookieArray[i].trim();
        if (cookiePart.indexOf("sb-access-token=") === 0) {
            return cookiePart.substring("sb-access-token=".length);
        }
    }

    return;
}

async function checkURL(url: string, file_type: string, size_limit: number): Promise<ResponseMessage>{
    try {
        if (url === "") {
            return {
                status : true,
            }
        }

        let sizeLimitError = "An unknown error occurred";
        
        const response = await fetch(url, {
            method: 'HEAD',
        });

        if (!response.ok){
            return {
                message: `HTTP error while fetching URL [${response.status}] `,
                status : false,
            }
        }

        const type = response.headers.get('Content-Type');
        const contentLengthHeader = response.headers.get('Content-Length');

        if (!type){
            return {
                message : "Could not fetch data from URL",
                status : false,
            }

        } else if (!type.startsWith(file_type)){
            return {
                message : "This is an invalid URL",
                status : false,
            }

        } else if (!contentLengthHeader){
            return {
                message : "Could not fetch data from URL",
                status : false,
            }
        }

        const contentLength = parseInt(contentLengthHeader, 10);

        if (contentLength > size_limit * 1024 * 1024) {
            if (file_type === "image/"){
                sizeLimitError = "Your avatar size exceeds the allowed limit";

            } else if (file_type === "image/" || file_type === "video/"){
                sizeLimitError = "Your background size exceeds the allowed limit";

            } else if (file_type === "audio/"){
                sizeLimitError = "Your background size exceeds the allowed limit";
            }

            return {
                message: sizeLimitError,
                status: false,
            };
        }

        return {
            status: true,
        };

    } catch (error){
        console.error(error);

        if ((file_type === "image/" || file_type === "video/") && size_limit === 20){
            return {
                message: "Your background URL is invalid",
                status: false,
            };

        } else if (file_type === "image/" && size_limit === 6){
            return {
                message: "Your avatar URL is invalid",
                status: false,
            }

        } else {
            return {
                message: String(error),
                status: false,
            }
        }
    }
}

interface ResponseMessage{
    message?: string;
    status: boolean;
}

export async function checkAvatar(premium: boolean, url: string): Promise<ResponseMessage> {
    if (url === null || url === ""){
        return {
            status: true,
        }
    } 
    
    if (premium){
        return await checkURL(url, "image/", 20);

    } else {
        return await checkURL(url, "image/", 6);
    }
}

export async function checkBackgroundImage(premium: boolean, url: string): Promise<ResponseMessage> {
    if (premium){
        return await checkURL(url, "image/", 50);

    } else {
        return await checkURL(url, "image/", 20)
    }
}

export async function checkVideo(premium: boolean, url: string): Promise<ResponseMessage> {
    if (!premium){
        return {
            message : "You need premium to use a background video.",
            status : false,
        }
    }

    if (url === null || url === ""){
        return {
            status: true,
        }

    } else {
        return await checkURL(url, "video/", 50)
    }
}

export async function checkAudio(premium: boolean, url: string): Promise<ResponseMessage> {
    if (premium){
        return await checkURL(url, "audio/", 30);

    } else {
        return await checkURL(url, "audio/", 15);
    }
}

interface TokenValidateResponse {
    'error-codes': string[];
    success: boolean;
    action: string;
    cdata: string;
}

export async function validateToken(token: string, secret: string) {
    const response = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify',{
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify({
            response: token,
            secret: secret,
        }),
    });

    const data: TokenValidateResponse = await response.json();

    return {
        success: data.success,
        error: data['error-codes']?.length ? data['error-codes'][0] : null,
    };
}

export async function checkUsernameChange(uuid: string, username: string): Promise<ResponseMessage>{
    const currentTime = new Date().toISOString();

    const { data, error } = await supabase
        .from("Users")
        .select("last_username_change, username")
        .eq("uuid", uuid)

    if (!error && data.length > 0){
        if (username === data[0].username){
            return {
                message: "No change made to username",
                status: true,
            }

        } else {
            const usernameCooldown: number = 30 * 24 * 60 * 60 * 1000;
            const lastUsernameChange = new Date(data[0].last_username_change).getTime();
            const timeDifference = new Date(currentTime).getTime() - lastUsernameChange;

            if (timeDifference >= 30 * 24 * 60 * 60 * 1000) {
                const { error } = await supabase
                    .from("Users")
                    .update({ last_username_change: new Date().toISOString() })
                    .eq("uuid", uuid);

                if (!error){
                    return { 
                        message: "Username changed successfully",
                        status: true,
                    };

                } else {
                    return { 
                        message: "An error occurred",
                        status: false,
                    };
                }

            } else {
                const remainingDays = Math.ceil((usernameCooldown - timeDifference) / (24 * 60 * 60 * 1000));

                return {
                    message: `You must wait ${remainingDays} days to change your username`,
                    status: false
                };
            }
        }

    } else {
        return {
            message: "An error occurred",
            status: false
        }
    } 
}

export async function messageDiscordWebhook(webhook: string, message: string){
    try {
        const payload = {
            content: "<@311222826755555329>\n" + "```" + message + "```",
        }
    
        const response = await fetch(webhook, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        });

        if (response.ok){
            console.log("Webhook sent to discord webhook");

        } else {
            console.error("Error while sending message to discord webhook");
        }

    } catch (error){
        console.error(error);
    }
}