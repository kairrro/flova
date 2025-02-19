import { writable } from "svelte/store";
import type { NotificationTypes } from "../types/misc";
import type { Writable } from "svelte/store";
import { browser } from '$app/environment';
import type { Socials, SidebarProps, NullableString, AddLink } from "../types/misc";

export const notificationState = writable<boolean>(false);
export const notificationMessage = writable<string>("");
export const notificationType = writable<NotificationTypes>("error");

export const localAuth = browser ? window.localStorage.getItem('sb-nfeoimbkskulevvxpwxi-auth-token') ?? "" : "";

export const addLinkState = writable<AddLink>({
    name: '',
    status: false,
    src: '',
    label: '',
});

export const sidebarProps: Writable<SidebarProps> = writable({
    display_name: "",
    username: "",
    profile_picture: "",
});

// States
export const mediaButtonsDisabled = writable<boolean>(false);
export const premiumState = writable<boolean>(false);
export const mobileSidebarOpen = writable<boolean>(false);
export const addLinkOpen = writable<boolean>(false);
export const addedLinkTrashDisabled = writable<boolean>(false);
export const signedIn = writable<boolean>(false);

export const uuid = writable("");
export const user = writable("");
export const display_name = writable("");
export const link = writable("");
export const profile_picture = writable("");
export const email = writable("");
export const description = writable("");
export const background = writable("");
export const audio = writable("");
export const badges = writable<string[]>([]);
export const text_color = writable("");
export const typewriter = writable(false);
export const socials = writable<Socials[]>([]);
export const discord_id = writable("");
export const premium = writable(false);
export const profile_opacity = writable("");
export const badge_color = writable("");
export const sparkle: Writable<NullableString> = writable(null);
export const icon_color = writable("");
export const greeting = writable("");
export const currentSidebar = writable("");
export const description_color = writable("");
export const currentLink = writable("");