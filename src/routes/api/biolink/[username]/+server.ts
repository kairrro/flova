import type { RequestHandler } from "@sveltejs/kit";
import { fetchBiolink } from "$lib/server/user";

export const GET: RequestHandler = async ({ params }) => {
    try {
        const userParam = params?.username;

        if (userParam === undefined) {
            throw new Error("Username parameter is missing.");
        }

        const userInfo = await fetchBiolink(userParam);

        if (!userInfo){
            return new Response( "User not found", {
                status: 404,
                headers: {
                    'Content-Type' : 'application/json',
                }
            })
        }

        const payload = {
            id:  userInfo.id,
            username: userInfo.username,
            display_name: userInfo.display_name,
            description: userInfo.description,
            socials: userInfo.socials,
            badges:  userInfo.badges,
            profile_picture: userInfo.profile_picture,
            background: userInfo.background,
            audio: userInfo.audio,
            typewriter: userInfo.typewriter,
            text_color: userInfo.text_color,
            discord_id: userInfo.discord_id,
            profile_opacity: userInfo.profile_opacity,
            badge_color: userInfo.badge_color,
            sparkle: userInfo.sparkle,
            icon_color: userInfo.icon_color,
            view_count: userInfo.view_count,
            description_color: userInfo.description_color,
        }
    
        return new Response(JSON.stringify( payload ));

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
