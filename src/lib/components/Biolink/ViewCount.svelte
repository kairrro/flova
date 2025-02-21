<script lang="ts">
    import { View } from "$lib/scripts/logos";
    import { fade } from "svelte/transition";

    export let view_count: string = "";
    export let text_color: string = "";

    let hovered: boolean = false;

    function toggleHover(){
        hovered = !hovered
    }

    console.log(text_color)
</script>

<div 
    class="relative flex items-center justify-center gap-[6px] ml-auto" 
    role="note" 
    id="container"
    on:focus={toggleHover} 
    on:mouseover={() => hovered = true} 
    on:mouseleave={() => hovered = false}
>
    {#if hovered}
        <div class="absolute whitespace-nowrap bottom-[25px] text-[11px] p-[6px] bg-[#00000080] rounded-lg" transition:fade={{ delay: 100, duration: 200 }}>
            View Count
        </div>
    {/if}
    <div>
        {@html View(text_color, undefined)}
    </div>
    <p 
        class="font-semibold"
        style="color: {text_color}" 
    >
        {view_count}
    </p>
</div>

<style>
    #container {
        -webkit-user-drag: none;
        user-select: none;
    }
</style>