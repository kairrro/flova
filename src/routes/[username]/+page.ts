import type { PageLoad } from './$types';
import type { Biolink } from '$lib/scripts/types/misc';

function handleError(data: Biolink, message: string): Biolink{
    return {
        id: data.id,
        username: data.username,
        display_name: data.display_name,
        description: data.description,
        socials: data.socials,
        badges: data.badges,
        profile_picture: data.profile_picture,
        background: data.background,
        audio: data.audio,
        typewriter: data.typewriter,
        text_color: data.text_color,
        profile_opacity: data.profile_opacity,
        badge_color: data.badge_color,
        sparkle: data.sparkle,
        icon_color: data.icon_color,
        view_count: data.view_count,
        description_color: data.description_color,
        discord_avatar: "/assets/discord_default.jpg",
        discord_custom_status: message,
        discord_status: "invisible",
        discord_status_icon: null,
        discord_username: "Error",
        song: null,
        artist: null,
    }
}

export const load: PageLoad = async ({ params, fetch }): Promise<Biolink> => {
    const response = await fetch(`/api/biolink/${params.username}`);
    const data = await response.json();

    let artist = null;
    let song = null;

    if (data.discord_id){
        return {
            id: data.id,
            username: data.username,
            display_name: data.display_name,
            description: data.description,
            socials: data.socials,
            badges: data.badges,
            profile_picture: data.profile_picture,
            background: data.background,
            audio: data.audio,
            typewriter: data.typewriter,
            text_color: data.text_color,
            profile_opacity: data.profile_opacity,
            badge_color: data.badge_color,
            sparkle: data.sparkle,
            icon_color: data.icon_color,
            view_count: data.view_count,
            description_color: data.description_color,
            discord_avatar: null,
            discord_custom_status: null,
            discord_status: null,
            discord_status_icon: null,
            discord_username: null,
            song: song,
            artist: artist,
        }

    } else {
        return {
            id: data.id,
            username: data.username,
            display_name: data.display_name,
            description: data.description,
            socials: data.socials,
            badges: data.badges,
            profile_picture: data.profile_picture,
            background: data.background,
            audio: data.audio,
            typewriter: data.typewriter,
            text_color: data.text_color,
            profile_opacity: data.profile_opacity,
            badge_color: data.badge_color,
            sparkle: data.sparkle,
            icon_color: data.icon_color,
            view_count: data.view_count,
            description_color: data.description_color,
            discord_avatar: null,
            discord_custom_status: null,
            discord_status: null,
            discord_status_icon: null,
            discord_username: null,
            song: song,
            artist: artist,
        }
    }
};