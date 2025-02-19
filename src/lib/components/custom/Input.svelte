<script lang="ts">
    export let name: string = "";
    export let id: string = ""; 
    export let value: any = "";
    export let textarea: boolean = false;
    export let type: string = "text";
    export let placeholder: string = "";
    export let disabled: boolean = false;
    export let label: boolean = true;
    export let extraClass: string = "";

    export let maxTextLength: number = 400;
    $: currentTextLength = (value ?? '').length;
    $: exceedsMaxLength = currentTextLength > maxTextLength;

    function numbersOnly(event: Event) {
        const input = event.target as HTMLInputElement;
        const filteredInput = input.value.replace(/[^0-9]/g, '');
        input.value = filteredInput;
        value = filteredInput;      
    }
</script>

<div class="flex flex-col gap-2 w-full">
    {#if label}
        <label for={id} class="text-sm text-zinc-300">{name}</label>
    {/if}

    {#if id === 'email'}
        <input 
            type="email" 
            id={id} 
            placeholder={placeholder} 
            class="bg-[#212121] text-sm pl-2 h-10 rounded-lg outline-none w-full {extraClass}"
            bind:value={value} 
            maxlength={maxTextLength}
            disabled={disabled}
        />

    {:else if type === 'password'}
        <input 
            type="password" 
            id={id} 
            placeholder={placeholder} 
            class="bg-[#212121] text-sm pl-2 h-10 rounded-lg outline-none w-full {extraClass}"
            bind:value={value} 
            maxlength={maxTextLength}
            disabled={disabled}
        />

    {:else if type === 'tel'}
        <input 
            type="tel" 
            id={id} 
            placeholder={placeholder} 
            class="bg-[#212121] text-sm pl-2 h-10 rounded-lg outline-none w-full {extraClass}"
            bind:value={value} 
            maxlength={maxTextLength}
            disabled={disabled}
        />

    {:else if type === 'number'}
        <input 
            type="text" 
            id={id} 
            placeholder={placeholder} 
            class="bg-[#212121] text-sm pl-2 h-10 rounded-lg outline-none w-full {extraClass}"
            bind:value={value} 
            maxlength={maxTextLength}
            on:input={numbersOnly}
            disabled={disabled}
        />

    {:else if textarea}
        <textarea 
            id={id} 
            class="bg-[#212121] text-sm h-14 resize-none rounded-lg outline-none w-full p-2 {extraClass}"
            bind:value={value} 
            maxlength={maxTextLength}
        />
        <div class="{exceedsMaxLength ? 'text-red-400' : 'text-zinc-300 text-sm'}">
            {currentTextLength} / {maxTextLength}
        </div>

    {:else}
        <input 
            type="text" 
            placeholder={placeholder} 
            id={id} 
            class="bg-[#212121] text-sm h-10 rounded-lg outline-none w-full pl-2 {extraClass}"
            bind:value={value} 
            maxlength={maxTextLength}
            disabled={disabled}
        />
    {/if}
</div>
