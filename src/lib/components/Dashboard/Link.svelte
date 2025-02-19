<script lang="ts">
    import { addLinkState } from "$lib/scripts/stores/values";
    import { 
        Bitcoin, 
        Cashapp, 
        Chess, 
        Custom, 
        Discord, 
        Ethereum, 
        Facebook, 
        Github, 
        Instagram, 
        Kick, 
        Linkedin, 
        Litecoin, 
        Monero, 
        Paypal, 
        Pinterest, 
        Playstation, 
        Reddit,
        Roblox,
        Snapchat,
        Soundcloud,
        Spotify,
        Steam,
        Telegram,
        Threads,
        Tiktok,
        Tumblr,
        Twitch,
        Twitter,
        Valorant,
        Wattpad,
        Xbox,
        Youtube
    } from "$lib/scripts/socials";

    export let name: string = "";
    export let label: string = "";

    const addLinkSocialIcons: Record<string, string> = {
        Bitcoin: Bitcoin(undefined, '23px'),
        Cashapp: Cashapp(undefined, '23px'),
        Chess: Chess(undefined, '23px'),
        Custom: Custom(undefined, '23px'),
        Discord: Discord(undefined, '23px'),
        Ethereum: Ethereum(undefined, '23px'),
        Facebook: Facebook(undefined, '23px'),
        Github: Github(undefined, '23px'),
        Instagram: Instagram(undefined, '23px'),
        Kick: Kick(undefined, '23px'),
        Linkedin: Linkedin(undefined, '23px'),
        Litecoin: Litecoin(undefined, '23px'),
        Monero: Monero(),
        Paypal: Paypal(undefined, '23px'),
        Pinterest: Pinterest(undefined, '23px'),
        Playstation: Playstation(undefined, '23px'),
        Reddit: Reddit(undefined, '23px'),
        Roblox: Roblox(undefined, '23px'),
        Snapchat: Snapchat(undefined, '23px'),
        Soundcloud: Soundcloud(undefined, '23px'),
        Spotify: Spotify(undefined, '23px'),
        Steam: Steam(undefined, '23px'),
        Telegram: Telegram(undefined, '23px'),
        Threads: Threads(undefined, '23px'),
        Tiktok: Tiktok(undefined, '23px'),
        Tumblr: Tumblr(undefined, '23px'),
        Twitch: Twitch(undefined, '23px'),
        Twitter: Twitter(undefined, '23px'),
        Valorant: Valorant(undefined, '23px'),
        Wattpad: Wattpad(undefined, '23px'),
        Xbox: Xbox(undefined, '23px'),
        Youtube: Youtube(undefined, '23px'),
    }

    function openLinkPanel(){
        addLinkState.set({
            name: name,
            status: true,
            src: addLinkSocialIcons[name],
            label: label,
        });
    }

    const socials: Record<string, string> = {
        Bitcoin: Bitcoin(),
        Cashapp: Cashapp(),
        Chess: Chess(),
        Custom: Custom(),
        Discord: Discord(),
        Ethereum: Ethereum(),
        Facebook: Facebook(),
        Github: Github(),
        Instagram: Instagram(),
        Kick: Kick(),
        Linkedin: Linkedin(),
        Litecoin: Litecoin(),
        Monero: Monero(),
        Paypal: Paypal(),
        Pinterest: Pinterest(),
        Playstation: Playstation(),
        Reddit: Reddit(),
        Roblox: Roblox(),
        Snapchat: Snapchat(),
        Soundcloud: Soundcloud(),
        Spotify: Spotify(),
        Steam: Steam(),
        Telegram: Telegram(),
        Threads: Threads(),
        Tiktok: Tiktok(),
        Tumblr: Tumblr(),
        Twitch: Twitch(),
        Twitter: Twitter(),
        Valorant: Valorant(),
        Wattpad: Wattpad(),
        Xbox: Xbox(),
        Youtube: Youtube(),
    }

    function findSocialIcon() {
        for (const key in socials) {
            if (key === name) {
                return socials[key];
            }
        }

        return null; 
    }
</script>

<button on:click={() => openLinkPanel()}>
    <div class="flex items-center justify-between bg-[#111111] p-2 rounded-lg transition hover:scale-110 cursor-default"  >
        {@html findSocialIcon()}
    </div>
</button>