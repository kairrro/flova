import type { RequestEvent } from "@sveltejs/kit";
import { verifyToken } from "$lib/scripts/supabase/client";
import { generateUUID } from "$lib/scripts/functions/misc";
import type { Social, UserData } from "$lib/scripts/types/misc";

export const load = async (page: RequestEvent) => {
    const token = page.cookies.get("sb-access-token");
    let socials;

    if (token){
        const tokenInfo = await verifyToken(token);

        if ('error' in tokenInfo) {
            console.error("Error verifying token:", tokenInfo.error);
        } 
        
        else {
            const username = tokenInfo.user_metadata?.username;

            const response = await page.fetch(`/api/account/${username}`, {
                method: "GET",
                headers: {
                    'Content-Type' : 'application/json',
                },
            });

            if (!response.ok) {
                throw new Error(`Failed to fetch data: ${response.statusText}`);
            }

            const data: UserData = await response.json();

            if (data.socials){
                socials = Object.entries(data.socials).map(([name, url], index) => {
                    const urlString = String(url);
                    return { id: generateUUID(), name, url: urlString };
                });
            }

            return {
                uuid: data.uuid,
                id: data.id,
                background: data.background ?? "",
                username: data.username,
                email: data.email,
                display_name: data.display_name ?? data.username,
                description: data.description ?? "",
                socials: socials ?? [],
                badges: data.badges ?? [],
                profile_picture: data.profile_picture,
                premium: data.premium,
                typewriter: data.typewriter,
                text_color: data.text_color,
                audio: data.audio ?? "",
                token: token,
                discord_id: data.discord_id,
                profile_opacity: data.profile_opacity,
                badge_color: data.badge_color,
                sparkle: data.sparkle,
                icon_color: data.icon_color,
                description_color: data.description_color,
            };
        }
    }

    else {
        error: "Token not found";
    }
};
