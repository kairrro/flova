<script lang="ts">
    import { Loading } from "$lib/scripts/logos";

    export let text: string = "";
    export let href = "";
    export let func: any = null;
    export let disabled: boolean = false;
    export let hoverColor: string = "bg-[#AE5118]";
    export let textColor: string = "text-white";
</script>

{#if href}
    <a 
        href={href} 
        class={`flex items-center justify-center ${textColor} py-2 w-full rounded-lg ${disabled ? "" : {hoverColor}} transition text-sm`} 
        on:click={() => func()}  
    >
        {#if disabled}
            {@html Loading()}

        {:else}
            {text}
        {/if} 
    </a>
{:else}
    <button 
        disabled={disabled} 
        class={`flex items-center justify-center ${textColor} py-2 px-10 w-full rounded-lg ${disabled ? "" : {hoverColor}} transition text-sm`} 
        on:click={() => func()} 
    >
        {text}
    </button>
{/if}

<style>
    button:disabled {
        opacity: 0.5;
    }
</style>