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
            name={id}
            type="email" 
            id={id} 
            placeholder={placeholder} 
            class="bg-[#212121] text-sm pl-2 h-10 rounded-lg outline-none w-full {extraClass}"
            bind:value={value} 
            maxlength={maxTextLength}
            disabled={disabled}
        />

    {:else if type === 'color'}
        <div class="flex items-center gap-2">
            <div class="relative w-10 h-10">
                <input 
                    type="color" 
                    id={id}
                    class="absolute inset-0 w-full h-full opacity-0 cursor-pointer" 
                    bind:value={value}
                    disabled={disabled}
                />
                <div 
                    class="absolute inset-0 w-[24px] h-[24px] rounded-full pointer-events-none inset-0 m-auto" 
                    style="background-color: {value};"
                ></div>
            </div>

            <input 
                type="text"
                id={id}
                class="bg-[#212121] text-sm pl-2 h-10 rounded-lg outline-none w-full {extraClass}"
                bind:value={value}
                disabled={disabled}
            />
        </div>

    {:else if type === 'password'}
        <input 
            name={id}
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
            name={id}
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
            name={id}
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
            name={id}
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
