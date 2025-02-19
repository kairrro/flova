<script lang="ts">
    import DiscordPresence from "../Biolink/DiscordPresence.svelte";
    import Music from "./Music.svelte";
    import { Premium } from "$lib/scripts/badges";
    import { View } from "$lib/scripts/logos";
    import { Custom, Instagram, Roblox, Soundcloud, Spotify, Twitter } from "$lib/scripts/socials";
    export let name: string = "";
    export let title: string = "";
    export let description: string = "";
</script>

<div class="flex flex-col gap-10 bg-[#0f0f0f] rounded-xl p-4">
    {#if name === "Discord"}
        <div class="discord">
            <DiscordPresence
                discord_username = "kyro"
                discord_pfp = "https://i.pinimg.com/564x/01/66/35/0166351e9b2cb2cc7ac628cbb403827a.jpg"
                discord_status = "online"
                discord_icon = {null}
                discord_custom_status = "Your status here!"
            />
        </div>
    {:else if name === "Socials"}
        <div class="flex flex-wrap items-center gap-4 p-4 px-4 mr-auto rounded-xl bg-[#070707]" >
            {@html Twitter()}
            {@html Instagram()}
            {@html Custom()}
            {@html Spotify()}
            {@html Roblox()}
            {@html Soundcloud()}
        </div>
      
    {:else if name === "Music"}
        <Music />
        
    {:else if name === "Premium"}
        {@html Premium(undefined, "68px")}

    {:else if name === "Customization"}
        <div class="flex flex-col gap-8 items-start p-4 rounded-lg bg-[#03030382]">
            <div class="flex items-center gap-2">
                <div class="flex items-end bg-[#7358F9] p-[4px] pl-6 rounded-full">
                    <div class="bg-white rounded-full h-[20px] w-[20px]"></div>
                </div>
                <p class="text-xs text-zinc-300" >Enable Typewriter</p>
            </div>

            <div class="flex flex-col gap-2 w-full">
                <p class="text-xs" >Background URL</p>
                <div class="flex items-center text-xs  p-2 py-[12px] bg-[#212121] max-w-[200px] w-full rounded-lg h-[12px]" >https://...</div>
            </div>
        </div>

    {:else if name === "view_count"}
        <div class="flex items-center gap-2 px-4 bg-[#03030382] p-2 rounded-lg mr-auto">
            {@html View(undefined, "32px")}
            <p class="text-sm" >1,293</p>
        </div>
    {/if}

    <div class="flex flex-col gap-2">
        <h2 class="text-xl font-medium" >{title}</h2>
        <p class="text-zinc-300 text-sm leading-[25px]" >{description}</p>
    </div>
</div>