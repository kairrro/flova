import { 
    Bitcoin, Cashapp, Chess, Custom, Discord, Ethereum, Facebook, Github, Instagram, 
    Kick, Linkedin, Litecoin, Monero, Paypal, Pinterest, Playstation, Reddit,
    Roblox, Snapchat, Soundcloud, Spotify, Steam, Telegram, Threads, Tiktok,
    Tumblr, Twitch, Twitter, Valorant, Wattpad, Xbox, Youtube
} from "$lib/scripts/socials";

export const clipboardSocials: string[] = [
    "roblox", "xbox", "bitcoin", "cashapp", "snapchat", "discord", "ethereum", "playstation", "valorant", "monero", "litecoin", 
]

export const addLinkSocialIcons: Record<string, string> = {
    bitcoin: Bitcoin(undefined, '23px'),
    cashapp: Cashapp(undefined, '23px'),
    chess: Chess(undefined, '23px'),
    custom: Custom(undefined, '23px'),
    discord: Discord(undefined, '23px'),
    ethereum: Ethereum(undefined, '23px'),
    facebook: Facebook(undefined, '23px'),
    github: Github(undefined, '23px'),
    instagram: Instagram(undefined, '23px'),
    kick: Kick(undefined, '23px'),
    linkedin: Linkedin(undefined, '23px'),
    litecoin: Litecoin(undefined, '23px'),
    monero: Monero(undefined, undefined, '23px'),
    paypal: Paypal(undefined, '23px'),
    pinterest: Pinterest(undefined, '23px'),
    playstation: Playstation(undefined, '23px'),
    reddit: Reddit(undefined, '23px'),
    roblox: Roblox(undefined, '23px'),
    snapchat: Snapchat(undefined, '23px'),
    soundcloud: Soundcloud(undefined, '23px'),
    spotify: Spotify(undefined, '23px'),
    steam: Steam(undefined, '23px'),
    telegram: Telegram(undefined, '23px'),
    threads: Threads(undefined, '23px'),
    tiktok: Tiktok(undefined, '23px'),
    tumblr: Tumblr(undefined, '23px'),
    twitch: Twitch(undefined, '23px'),
    twitter: Twitter(undefined, '23px'),
    valorant: Valorant(undefined, '23px'),
    wattpad: Wattpad(undefined, '23px'),
    xbox: Xbox(undefined, '23px'),
    youtube: Youtube(undefined, '23px'),
}

export const clipSocials: Record<string, string> = {
    cashapp: "Cashapp tag copied",
    roblox: "Roblox username copied",
    xbox: "Xbox gamertag copied",
    bitcoin: "Bitcoin address copied",
    snapchat: "Snapchat username copied",
    discord: "Discord server copied",
    ethereum: "Ethereum address copied",
    playstation: "PSN ID copied",
    valorant: "Valorant username copied",
    monero: "Monero address copied",
    litecoin: "Litecoin address copied"
}

export const sparkles: Record<string, string> = {
    black: "/assets/sparkles/black_sparkle.gif",
    blue: "/assets/sparkles/blue_sparkle.gif",
    green: "/assets/sparkles/green_sparkle.gif",
    pink: "/assets/sparkles/pink_sparkle.gif",
    red: "/assets/sparkles/red_sparkle.gif",
    white: "/assets/sparkles/white_sparkle.gif",
    yellow: "/assets/sparkles/yellow_sparkle.gif",
}

export const badgeTitles: Record<string, string> = {
    "beta_tester" : "Beta Tester",
    "premium" : "Premium",
    "og" : "OG",
    "ceo" : "CEO",
    "day_one": "Day One",
}
