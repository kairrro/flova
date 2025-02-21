import { createClient } from "@supabase/supabase-js";
import { SUPABASE_URL, SUPABASE_KEY } from "./auth";
import type { CustomResponse, MediaType } from "$lib/scripts/types/misc";
import { messageDiscordWebhook } from "./misc";
import { DISCORD_WEBHOOK } from "$env/static/private";

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

export async function viewTable(table_name: string){
    const { data, error } = await supabase
        .from(table_name)
        .select("*")

    if (data){
        return data;
    }
}

export async function updateSocials(
    uuid: string,
    socials: Object,
){
    const { error } = await supabase
        .from("Users")
        .update({socials : socials})
        .eq("uuid", uuid)

    if (!error){
        return {
            message: "Socials updated successfully!",
            status: "success",
        }
    }

    else {
        return {
            message: error.message,
            status: "failed",
        }
    }
}

export async function updateAccountData(
    uuid: string, 
    username: string, 
    display_name: string, 
    avatar_url: string | null, 
    audio: string | null, 
    background: string | null, 
    description: string | null, 
    text_color: string,
    typewriter: boolean,
    discordID: number | null,
    profile_opacity: string,
    badge_color: string,
    sparkle: string | null,
    icon_color: string,
    description_color: string,
){
    const { error } = await supabase
        .from("Users")
        .update({
            username: username,
            display_name: display_name,
            profile_picture: avatar_url,
            audio: audio,
            background: background,
            description: description,
            text_color: text_color,
            typewriter: typewriter,
            discord_id: discordID,
            profile_opacity: profile_opacity,
            badge_color: badge_color,
            sparkle: sparkle,
            icon_color: icon_color,
            description_color: description_color,
        })
        .eq("uuid", uuid)

    if (!error){
        return {
            message: "Account data updated successfully",
            status: "success",
        };
    }

    else if (error.message === `duplicate key value violates unique constraint "Users_username_key"`){
        return {
            message: "Username already taken",
            status: "failed",
        };
    }

    else {
        console.error(error);
        return {
            message: error.message,
            status: "failed",
        }
    }
}

export async function fetchBiolink(username: string){
    const { data, error } = await supabase
        .from("Users")
        .select("*")
        .eq("username", username)

    if (!error && data.length > 0){
        return data[0];
    }

    else {
        return { "error" : error?.message};
    }
}

export async function fetchUser(uuid: string){
    const { data, error } = await supabase
        .from("Users")
        .select("*")
        .eq("uuid", uuid)

    if (!error && data.length > 0){
        return data[0];
    }

    else {
        return { "error" : error?.message};
    }
}


export async function getPremium(username: string){
    const { data, error } = await supabase
        .from("Users")
        .select('premium')
        .eq('username', username)
      
    if (data && data.length > 0){
        return {
            value : data[0].premium,
            status: true,
        }
    }

    else {
        return {
            value: null,
            status: false,
        }
    }
}

export async function checkViewStatus(username: string){
    const currentTime = new Date().toISOString();

    const { data, error } = await supabase
        .from("Users")
        .select("view_count, last_viewed, last_ip_viewed")
        .eq("username", username)

        if (data && !error) {
            const lastViewedTime = new Date(data[0].last_viewed).getTime();

            const timeDifference = new Date(currentTime).getTime() - lastViewedTime;
    
            if (timeDifference > 3 * 60 * 1000){
                return {
                    last_ip_viewed: data[0].last_ip_viewed,
                    view_count: data[0].view_count,
                    last_viewed: data[0].last_viewed,
                    status: true,
                }

            } else {
                return {
                    status: false,
                }
            }
            
        } else {
            return {
                message: error.message,
                status: false,
            };
        }
}

export async function addView(username: string, ip: string) {
    const ipSubnet = ip.split('.').slice(0, 3).join('.');
    const viewCheck = await checkViewStatus(username);
    const currentTime = Math.floor(Date.now() / 1000);

    if (viewCheck.status && 
        (!String(viewCheck.last_ip_viewed).startsWith(ipSubnet) && currentTime - viewCheck.last_viewed >= 300 
         && ip !== "::1") ) {
        
        const { data, error } = await supabase
            .from("Users")
            .update({ 
                view_count: viewCheck.view_count + 1, 
                last_viewed: currentTime,
                last_ip_viewed: ipSubnet 
            })
            .eq("username", username);

        if (!error) {
            await messageDiscordWebhook(DISCORD_WEBHOOK, `Someone viewed /${username}\n\nIP Address: ${ip}`, false);

            return {
                status: true,
            };
        } else {
            return {
                message: error.message,
                status: false,
            };
        }
    } else {
        return {
            status: false,
        };
    }
}




export async function updateMedia(
    uuid: string,
    url: string,
    type: MediaType
): Promise<CustomResponse>{
    const { error } = await supabase
        .from("Users")
        .update({ [type]: url })
        .eq("uuid", uuid)

    if (!error){
        return {
            message: `${type} updated successfully!`,
            success: true,
        }

    } else {
        return {
            message: error.message,
            success: false,
        }
    }
}

export async function removeMedia(
    uuid: string,
    type: MediaType
): Promise<CustomResponse> {
    const { error } = await supabase
        .from("Users")
        .update({ [type]: null })
        .eq("uuid", uuid);

    console.log(type);

    return error
        ? { message: error.message, success: false }
        : { message: `${type} removed successfully.`, success: true };
}
