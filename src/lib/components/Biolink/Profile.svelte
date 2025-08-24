<script lang="ts">
    import Typewriter from "svelte-typewriter";
    import DiscordPresence from "./DiscordPresence.svelte";
    import Clipboard from "./Clipboard.svelte";
    import Background from "./Background.svelte";
    import { fade } from "svelte/transition";
    import { clipboardSocials } from "$lib/scripts/globals/biolink";
    import ViewCount from "./ViewCount.svelte";
    import { onMount } from "svelte";
    import { hasVideoExtension } from "$lib/scripts/functions/misc";
    import { 
        Bitcoin, Cashapp, Chess, Custom, Discord, Ethereum, Facebook, Github, Instagram, Kick, Linkedin,
        Litecoin, Monero, Paypal, Pinterest, Playstation, Reddit, Roblox, Snapchat, Soundcloud, Spotify,
        Steam, Telegram, Threads, Tiktok, Tumblr, Twitch, Twitter, Valorant, Wattpad, Xbox, Youtube
    } from "$lib/scripts/socials";
    import { BetaTester, Ceo, DayOne, Og, Premium } from "$lib/scripts/badges";
    import { clipSocials, sparkles, badgeTitles } from "$lib/scripts/globals/biolink";
    import CustomLink from "./CustomLink.svelte";
    import type { CustomResponse } from "$lib/scripts/types/misc";

    export let profile_opacity: string = "";
    export let uid: string = "";
    export let display_name = "";
    export let text_color: string = "";
    export let pfp: string | null = "";
    export let status: string | null = "";
    export let background: string | null = "";
    export let audio: string | null = "";
    export let socials: Record<string, string> | null = {};
    export let badges: string[] | null = [];
    export let typewriter: boolean;
    export let badge_color: string = "";
    export let sparkle: string | null = "";
    export let icon_color: string = "";
    export let username: string = "";
    export let view_count: string = "";
    export let description_color: string = "";
    export let artist: string | null = "";
    export let song: string | null = "";

    export let discord_username: string | null = "";
    export let discord_pfp: string | null = "";
    export let discord_status: string | null = "";
    export let discord_custom_status: string | null = "";
    export let discord_icon: string | null = "";

    export let bannerImage: string = "";
    
    // States
    let isOpen = false;
    let clipboardState: string | null = null;
    let paused = true;
    let isAudio = audio != null && audio !== "";
    let isVideo = false;
    let uidOpen = false;
    let hoveredBadge: string | null = null;

    if (background){
        isVideo = hasVideoExtension(background);
    }
 
    if (!isAudio && !isVideo) {
        isOpen = true;
    }

    function openPage() {
        isOpen = true;
        paused = false;
        const profileElement = document.getElementById('profile');

        if (profileElement){
            profileElement.classList.add('drop-down');
        }
    }

    function toggleUID(){
        uidOpen = !uidOpen;
    }

    function badgeHover(badge_name: string | null){
        hoveredBadge = badge_name
    }

    function copyToClipboard(type: string, text: string){
        navigator.clipboard.writeText(text);
        clipboardState = type.toLowerCase();

        setTimeout(() => {
            clipboardState = null;
        }, 3000)
    }

    const badgeIcons: Record<string, string> = {
        beta_tester: BetaTester(badge_color, "19px"),
        day_one: DayOne(badge_color, "19px"),
        ceo: Ceo(badge_color, "19px"),
        og: Og(badge_color, "19px"),
        premium: Premium(badge_color, "19px"),
    }

    const socialIcons: Record<string, string> = {
        bitcoin: Bitcoin(icon_color, "31px"),
        cashapp: Cashapp(icon_color, "31px"),
        chess: Chess(icon_color, "31px"),
        custom: Custom(icon_color, "31px"),
        discord: Discord(icon_color, "31px"),
        ethereum: Ethereum(icon_color, "31px"),
        facebook: Facebook(icon_color, "31px"),
        github: Github(icon_color, "31px"),
        instagram: Instagram(icon_color, "31px"),
        kick: Kick(icon_color, "31px"),
        linkedin: Linkedin(icon_color, "31px"),
        litecoin: Litecoin(icon_color, '31px'),
        monero: Monero(icon_color, icon_color, "31px"),
        paypal: Paypal(icon_color, "31px"),
        playstation: Playstation(icon_color, "31px"),
        pinterest: Pinterest(icon_color, "31px"),
        reddit: Reddit(icon_color, "31px"),
        roblox: Roblox(icon_color, "31px"),
        snapchat: Snapchat(icon_color, "31px"),
        soundcloud: Soundcloud(icon_color, "31px"),
        spotify: Spotify(icon_color, "31px"),
        steam: Steam(icon_color, "31px"),
        telegram: Telegram(icon_color, "31px"),
        threads: Threads(icon_color, "31px"),
        tiktok: Tiktok(icon_color, "31px"),
        tumblr: Tumblr(icon_color, "31px"),
        twitch: Twitch(icon_color, "31px"),
        twitter: Twitter(icon_color, "31px"),
        valorant: Valorant(icon_color, "31px"),
        wattpad: Wattpad(icon_color, "31px"),
        xbox: Xbox(icon_color, "31px"),
        youtube: Youtube(icon_color, "31px"),
    }

    let sparkleOption: string;

    if (sparkle){
        sparkleOption = `background-image: url(${sparkles[sparkle]});`;
    }

    onMount(async () => {
        try {
            const response = await fetch(`api/view/${username}`, {
                method: 'POST',
            });

            const data: CustomResponse = await response.json();

            if (data.success){
                view_count += 1;
            }

        } catch (error){
            console.error(error);
        }
    });

    // Custom banner for me
    if (username === "kyro"){
        bannerImage = "https://i.pinimg.com/736x/b0/e1/7a/b0e17abb57d7e4394f9a2f87046abbec.jpg";
    }
</script>

<svelte:head>
    <title>@{display_name}</title>
    <meta property="og:title" content={`${display_name} (@${username})`}>
    <meta property="og:description" content={status}>
    <meta property="og:image" content={pfp}>
</svelte:head>

{#if Number(profile_opacity) === 0}
    <div class="fixed w-screen h-screen z-[2]"></div>
{/if}

{#if !isOpen && (isAudio || isVideo)}
    <button 
        class="fixed text-[16px] w-screen h-screen cursor-default z-[25] font-semibold click-to-open bg-[#00000080]"
        on:click={openPage} 
    >
        Click anywhere
    </button>
{/if}

<Background
    src = {background}
    paused = {paused}
    isAudio = {isAudio}
    isVideo = {isVideo}
/>

{#if isOpen}
    <audio loop autoplay>
        <source src={audio} type="audio/mpeg">
    </audio>
{/if}

{#if clipboardState}
    <Clipboard message={clipSocials[clipboardState]}/>
{/if}

<div class="flex flex-col justify-center items-center h-[95vh] w-full px-2 z-[3]" id="profile">
    <div class="flex flex-col items-center justify-center drop-down w-full mx-auto">
        {#if isOpen && bannerImage}
            <div class="relative w-full max-w-[600px] drop-down max-h-[125px]">
                <img 
                    src={bannerImage} 
                    alt="banner" 
                    class="z-[2] h-full w-full rounded-t-2xl object-cover"
                />
                <img 
                    src={pfp === null || pfp === "" ? "/assets/default.jpg" : pfp} 
                    alt="pfp" 
                    class="absolute left-1/2 transform -translate-x-1/2 bottom-[-60px] w-[120px] h-[120px] object-cover rounded-full z-[10]"
                />
            </div>
        {/if}
        
        <div class="flex flex-col justify-center items-center gap-[16px] py-[14px] px-[12px] drop-down w-full max-w-[600px] {bannerImage ? "pt-[70px]" : ""}"
            class:rounded-b-2xl={bannerImage}
            class:rounded-2xl={!bannerImage}
            style={`display: ${isOpen ? "flex" : "none"}; 
                    background: rgba(17, 17, 17, ${Number(profile_opacity) / 100}); 
                    ${profile_opacity !== "0" ? "backdrop-filter: blur(32px);" : ""}`}
            >

            {#if !bannerImage}
                <img 
                    src={pfp === null || pfp === "" ? "/assets/default.jpg" : pfp} 
                    alt="pfp" 
                    class="w-[120px] h-[120px] object-cover rounded-full z-[5]"
                    class:mt-[30px]={bannerImage}
                />
            {/if}

            <div class="flex flex-col items-center">
                {#if uidOpen}
                    <div 
                        class="flex items-center px-2 py-[2px] bg-[#030303ba] absolute uid rounded-lg text-xs top-[65px] z-3" 
                        transition:fade={{ delay: 100, duration: 200 }}
                    >
                        UID {uid}
                    </div>
                {/if}
                <div class="flex" style="{sparkleOption}">
                    <h2 
                        style="color: {text_color}; text-shadow: 0 0 16.5px {text_color};" 
                        on:focus={toggleUID} 
                        on:mouseover={toggleUID} 
                        on:mouseleave={toggleUID} 
                        class="text-xl font-medium px-2"
                    >
                        {display_name}
                    </h2>
                </div>
            </div>

            {#if badges && Object.keys(badges).length > 0}
                <div class="flex items-center bg-black/70 rounded-[20px] py-1.5 px-5 gap-2.5">
                    {#each badges as badge}
                        <div class="relative flex items-center">
                            {#if hoveredBadge === badge}
                                <div 
                                    class="absolute bottom-7 left-1/2 transform -translate-x-1/2 bg-black/73 rounded-md text-xs px-2 py-1 whitespace-nowrap" 
                                    transition:fade={{ delay: 100,  duration: 200 }}
                                >
                                    {badgeTitles[badge]}
                                </div>
                            {/if}
                            <div 
                                class="relative flex items-center justify-center" 
                                style="filter: drop-shadow(0 0 12px {badge_color}80);" 
                                role="presentation" 
                                on:mouseover={() => badgeHover(badge)} 
                                on:focus={() => badgeHover(badge)} 
                                on:mouseleave={() => badgeHover(null)}
                            >
                                {@html badgeIcons[badge.toLowerCase()]}
                            </div>
                        </div>
                    {/each}
                </div>
            {/if}

            {#if status !== "" && status !== null}
                <div 
                    class="flex items-center justify-center w-[95%] text-center text-[14px] h-4 break-words py-4 leading-[25px]"
                    style="color: {description_color};"
                    id="status"
                >
                    {#if typewriter}
                        <Typewriter mode="loop" wordInterval={5000} interval={60} unwriteInterval={60}>
                            <p>{status}</p>
                        </Typewriter>
                    {:else}
                        <p 
                            class="text-center"
                        >
                            {status}
                        </p>
                    {/if}
                </div>
            {/if}

            <div class="flex flex-wrap items-center justify-center gap-[14px] mt-4 w-[90%] max-w-[750px]">
                {#if socials}
                    {#each Object.entries(socials) as [socialName, socialLink] (socialName)}
                        {#if !clipboardSocials.includes(socialName.toLowerCase())}
                            <a 
                                href={socialLink} 
                                target="_blank"
                                class="flex items-center justify-center"
                            >
                                <div class="flex items-center justify-center transition hover:scale-110" style="filter: drop-shadow(0 0 8px {icon_color}99);">
                                    {@html socialIcons[socialName.toLowerCase()]}
                                </div>
                            </a>
                        {:else}
                            <button 
                                on:click={() => copyToClipboard(socialName, socialLink)}
                                class="flex items-center justify-center"
                            >
                                <div class="flex items-center justify-center transition hover:scale-110" style="filter: drop-shadow(0 0 8px {icon_color}80);">
                                    {@html socialIcons[socialName.toLowerCase()]}
                                </div>
                            </button>
                        {/if}
                    {/each}
                {/if}
            </div>
        
            <!-- <DiscordPresence
                discord_username="kyro" 
                discord_pfp="https://cdn.flova.xyz/cat.jpg" 
                discord_status="online" 
                discord_custom_status="Discord status placeholder" 
                discord_icon="" 
                artist="Placeholder Artist" 
                song="Placeholder Song" 
            /> -->

            {#if username === "kyro"}
                <CustomLink 
                    name="create your own linktree"
                    text_color={text_color}
                    href="/"
                />
            {/if}

            <ViewCount 
                view_count={view_count}
                text_color={text_color}
            />
        </div>
    </div>
</div>

<style>
    a {
        cursor: default;
    }

    img, #status, .icon, h2, p {
        -webkit-user-drag: none;
        user-select: none;
    }

    button {
        cursor: default;
        outline: none;
    }

    #status {
        word-break: break-word; 
    }

    .click-to-open {
        backdrop-filter: blur(6px);
    }

    .icon {
        transition: all 0.2s ease-in-out;
    }

    @keyframes drop-down {
        from {
            transform: translateY(100px);
            opacity: 0;
        }

        to {
            transform: translateY(0);
            opacity: 1;
        }
    }

    .drop-down {
        animation: drop-down 500ms;
    }
</style>