import type { Action } from "svelte/action";

export type Attributes = {
    'on:outside'?: (event: CustomEvent) => void
}

export interface Socials {
    id: string;
    name: string;
    url: string;
}
  
export type clickOutsideAction = Action<HTMLElement, any, Attributes>;

export interface CustomResponse {
    success: boolean;
    message?: any;
    error?: string;
}

export type NotificationTypes = "success" | "error" | "warning";

export interface SidebarProps {
    display_name: string;
    username: string;
    profile_picture: string;
}

export type NullableString = string | null;

export interface AddLink {
    name: string;
    status: boolean;
    src: string;
    label: string;
}

export interface Biolink {
    id: string,
    username: string,
    display_name: string,
    description: string | null,
    socials: Record<string, string> | null,
    badges: string[] | null,
    profile_picture: string | null,
    background: string | null,
    audio: string | null,
    typewriter: boolean,
    text_color: string,
    description_color: string,
    discord_avatar: string | null,
    discord_custom_status: string | null,
    discord_status: string | null,
    discord_status_icon: string | null,
    discord_username: string | null,
    profile_opacity: string,
    badge_color: string,
    sparkle: string | null,
    icon_color: string,
    view_count: string,
    artist: string | null,
    song: string | null,
}

export interface AccountInfo {
    uuid: string,
    username: string,
    display_name: string,
    avatar_url: string | null,
    music: string | null,
    background: string | null,
    description: string | null,
    text_color: string,
    discord_id: string,
    typewriter: boolean,
    profile_opacity: string,
    badge_color: string,
    sparkle: string | null,
    icon_color: string,
    view_count: string,
}

export interface Social {
    type: string;
    value: string;
}

export interface UserData {
    uuid: string;
    id: number;
    background: string | null;
    username: string;
    email: string;
    display_name: string | null;
    description: string | null;
    socials: Social[] | null;
    badges: string[] | null;
    profile_picture: string | null;
    premium: boolean;
    typewriter: boolean;
    text_color: string;
    audio: string | null;
    token: string;
    discord_id: string;
    profile_opacity: string;
    badge_color: string;
    sparkle: string | null;
    icon_color: string;
    description_color: string;
}

export type MediaType = "background" | "profile_picture" | "audio";