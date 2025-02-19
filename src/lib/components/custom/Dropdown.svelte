<script lang="ts">
    // import { Dropdown } from "$lib/scripts/logos";
    import { clickOutside } from "$lib/scripts/functions/misc";
    import type { Writable } from "svelte/store";
    import { slide } from "svelte/transition";
    import { writable } from "svelte/store";
    
    export let message: string = "";
    export let options: string[] = [];
    export let value: Writable<any> = writable('');
    export let onPick: (option: string) => void = () => {};
    export let equippedValue: string = "";

    let dropdownState: boolean = false;

    $: if (!options.includes($value)){
        value.set(options[0]);
    }

    function closeDropdown() {
        dropdownState = false;
    }

    function toggleDropdown() {
        dropdownState = !dropdownState;
    }

    function pickOption(option: string) {
        value.set(option);
        onPick(option);
        closeDropdown();
    }

    $: if (equippedValue){
        options[0] = equippedValue;
    }
</script>

<div 
    class={`relative w-full ${dropdownState ? "z-20" : ""}`}
    use:clickOutside
    on:outside={closeDropdown}
>
    <div class={`flex flex-col gap-2 w-full text-sm`}>
        <p class="text-sm font-medium">{message}</p>
        <button 
            class={`flex items-center gap-10 justify-between text-sm w-full px-4 py-[8px] rounded-lg bg-[#212121]`}
            on:click={toggleDropdown}
        >
            <p class="text-left">{$value}</p>
            <div class={`transition ${dropdownState ? "rotate-180" : ""}`}>
                <!-- {@html Dropdown("#f1f1f1", undefined)} -->
            </div>
        </button>
    </div>
    
    {#if dropdownState}
        <div 
            class={`max-h-[200px] overflow-y-scroll absolute flex flex-col gap-[3px] py-2 w-full mt-2 rounded-lg px-[4px] text-xs bg-[#212121]`}
            transition:slide
        >
            {#each options as option}
                <button 
                    class={`w-full py-2 text-left text-sm text-[#f1f1f1] px-2 rounded-lg transition hover:bg-[#474747]`} 
                    on:click={() => pickOption(option)} 
                >
                    {option}
                </button>
            {/each}
        </div> 
    {/if}
</div>
