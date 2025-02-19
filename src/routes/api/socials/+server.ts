import type { RequestHandler } from "@sveltejs/kit";
import { extractTokenFromCookies  } from "$lib/server/misc";
import { verifyToken } from "$lib/server/auth";
import { updateSocials } from "$lib/server/user";

export const POST: RequestHandler = async ({ request }) => {
    try {
        const data = await request.json();
        
        let uuid;
        let box: { [key: string]: string } = {};

        const cookies = request.headers.get("Cookie");
        const token = extractTokenFromCookies(cookies);
        const tokenVerification = JSON.parse(JSON.stringify(await verifyToken(token || "")));

        if (tokenVerification.status){
            uuid = tokenVerification.message.id;

            if (Array.isArray(data) && data.length > 0) {
                data.forEach(object => {
                    const name = object["name"];
                    const url = object["url"];
    
                    if (name && url) {
                        box[name] = url;
                    }
                });
            }

            const socialData = await updateSocials(uuid, box);

            if (socialData.status === "success"){
                return new Response(JSON.stringify({"message" : "Successfully updated socials"}), {
                    status: 200,
                });
            }

            else {
                return new Response(JSON.stringify({"message" : "Failed to update socials"}), {
                    status: 400,
                });
            }
        }

        else {
            return new Response(JSON.stringify({"error" : "Token not found"}), {
                status: 400,
            })
        }

    } catch (error) {
        console.error(`Error: ${error}`);

        return new Response("Internal Server Error", {
            status: 500,
            headers: {
                "Content-Type": "application/json"
            }
        });
    }
};