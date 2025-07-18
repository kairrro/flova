import { BetaTester, Og, Ceo, Premium } from "../badges";

export let description: string = "No description added yet";
export let siteURL: string = "";
export let SITE_NAME: string = "Flova";

export const badgeIcons: Record<string, string> = {
    "beta_tester": BetaTester(undefined, "16px"),
    "og": Og(undefined, "16px"),
    "ceo": Ceo(undefined, "16px"),
    "premium": Premium(undefined, "16px"),
}

export const sparkleTitles: Record<string, string> = {
    blue: "Blue Sparkle",
    black: "Black Sparkle",
    green: "Green Sparkle",
    red: "Red Sparkle",
    pink: "Pink Sparkle",
    white: "White Sparkle",
    yellow: "Yellow Sparkle",
}

export const sparkleColors: Record<string, string> = {
    "Blue Sparkle": "blue",
    "Black Sparkle": "black",
    "Green Sparkle": "green",
    "Red Sparkle": "red",
    "Pink Sparkle": "pink",
    "White Sparkle": "white",
    "Yellow Sparkle": "yellow",
}

export const backgroundFileTypes = [".webp", ".jpg", ".gif", ".png", ".mp4", ".mov"];
export const audioFileTypes = [".mp3", ".opus", ".aac", ".wav"];
export const avatarFileTypes = [".jpg", ".jpeg", ".webp", ".gif", ".png"];