<script lang="ts">
    export let discord_username: string | null = "";
    export let discord_pfp: string | null = "";
    export let discord_status: string | null = "";
    export let discord_custom_status: string | null = "";
    export let discord_icon: string | null = "";

    export let artist: string | null = "";
    export let song: string | null = "";
</script>

<div class="flex items-center gap-20 p-4 rounded-2xl bg-black/50 max-w-2xl">
    <div class="flex items-center gap-4">   
        <img src={discord_pfp} alt="discord-pfp" class="h-[70px] rounded-full object-cover"/>
   
        <div class="flex items-center justify-between w-full">  
            <div class="flex flex-col gap-2">
                <p class="text-lg font-semibold">{discord_username}</p>
                <div class="flex flex-col gap-[4px]">
                    {#if artist && song}
                        <p class="text-xs text-gray-300">
                            Listening to <span class="text-white">{song}</span>
                        </p>
                        <p class="text-xs text-gray-300">
                            by <span class="text-white">{artist}</span>
                        </p>
                    {:else}
                        <p class="text-xs text-gray-300">{discord_custom_status}</p>
                    {/if}
                </div>
            </div>
        </div>
    </div>

    {#if discord_icon}
        <div class="hidden md:flex items-center">
            <img src={discord_icon} alt="status-icon" class="w-[70px] h-[70px] rounded-lg object-cover"/>
        </div>
    {/if}
</div>
