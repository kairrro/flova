<!-- <script lang="ts">
    import { mediaButtonsDisabled } from "$lib/scripts/stores/values";

    export let name: string = "";
    export let avatarSizeLimit: number = 0;
</script>

<div class="flex flex-col gap-2" >
    <div class="flex items-center justify-between" >  
        <label for="avatar_url" class="text-sm" >{name}</label>
        <p class="text-xs text-zinc-300" >Max Size Limit: {avatarSizeLimit}MB</p>
    </div>

    {#if $profile_picture}
        <button 
            class="flex items-center justify-center gap-2 bg-[#303030] mr-auto px-6 w-full rounded-lg text-xs py-2 transition hover:opacity-50" 
            on:click={() => removeMedia("profile_picture")}
            disabled={$mediaButtonsDisabled}
        >
            {@html Trash()}
            <p>Remove Avatar</p>
        </button>
    {:else}
        <input 
            type="file" 
            id="avatar_url" 
            class="bg-[#212121] text-sm h-10 rounded-lg outline-none w-full cursor-pointer file:bg-[#333] file:border-none file:px-3 file:py-2 file:text-zinc-300 file:rounded-md file:cursor-pointer"
            on:change={(event) => handleFileChange(event, "profile_picture")}
            bind:value={$profile_picture}
        />
    {/if}
</div> -->