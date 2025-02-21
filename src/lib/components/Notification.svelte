<script lang="ts">
    import { Success, Warning, Failed, Cancel } from "$lib/scripts/logos";
    import { closeNotification } from "$lib/scripts/stores/functions";
    import { notificationState } from "$lib/scripts/stores/values";
    import { slide } from "svelte/transition";
    
    export let message: string = "Placeholder";
    export let type: string = "Placeholder text";

    const titleValues: Record<string, string> = {
        error: "Error",
        success: "Success",
        warning: "Warning",
    }
</script>

{#if $notificationState}
    <button 
        class={`fixed bottom-[20px] right-[20px] z-10 md:w-[95vw] md:right-1/2 md:translate-x-1/2 rounded-xl min-w-[300px] z-[2] transition hover:opacity-50`} 
        transition:slide
        on:click={() => closeNotification()}
    >
        <div class="flex items-center justify-between gap-4 p-6 bg-zinc-900 h-full rounded-xl">
            <div class="flex items-center justify-start gap-4 bg-zinc-900 h-full">
                <div class="flex items-center justify-center p-2 bg-[#303030] rounded-lg" >
                    {#if type === "warning"}
                        {@html Warning("#facc15", undefined)}
                        
                    {:else if type === "error"}
                        {@html Failed("#ef4444", undefined)}

                    {:else if type === "success"}
                        {@html Success("#4ade80", undefined)}
                    {/if}
                </div>

                <div class="flex flex-col items-start gap-[2px]">
                    <span class="font-semibold text-sm" >{titleValues[type]}</span>
                    <p class="text-xs text-left" >{message}</p>
                </div>
            </div>
            
            <button
                class="p-[6px] rounded-lg bg-[#303030] transition hover:opacity-50"
                on:click={() => closeNotification()}
            >
                {@html Cancel()}
            </button>
        </div>
    </button>

    <button 
        class="fixed w-screen h-screen"
        on:click={closeNotification} 
    />
{/if}
