<script lang="ts">
    import { addLinkState, socials } from "$lib/scripts/stores/values";
    import { fade } from "svelte/transition";
    import { Cancel } from "$lib/scripts/logos";
    import { generateUUID } from "$lib/scripts/functions/misc";
    import { clipboardSocials } from "$lib/scripts/globals/biolink";
    import { toggleAddLinkPanel } from "$lib/scripts/stores/functions";
    
    let loading: boolean = false;

    export let name: string = "";
    export let src: string = "";
    export let base_url: string = "";

    let copy: boolean = false;

    let userInput: string = "";

    export async function createSocial(){
        try {
            loading = true;

            const response = await fetch(`/api/socials`, {
                method: 'POST',
                headers: {
                    'Content-Type' : 'application/json',
                },
                body: JSON.stringify($socials),
            })

            if (response.status === 200){
                console.log("Updated socials");
            }

            else if (response.status === 400){
                console.error("Failed to update socials")
            }

            else {
                console.error(await response.text())
            }
        }

        catch (error){
            console.error(error);
        }

        finally {
            loading = false;
        }
    }

    async function addLink(){
        if (userInput === ""){
            return;
        }

        let url: string;

        if (copy){
            url = userInput;
            
        } else {
            url = base_url + userInput;
        }

        const id = generateUUID();
        socials.update(oldSocials => [...oldSocials, { id, name, url }]);

        await createSocial();
        toggleAddLinkPanel(false);
    }

    $: copy = clipboardSocials.includes(name.toLowerCase());
</script>

{#if $addLinkState.status}
    <section 
        class="fixed flex flex-col gap-[6px] bg-[#0d0d0d] p-6 rounded-lg shadow-lg w-full max-w-md z-[22] md:w-[95vw]"
        style="top: 50%; left: 50%; transform: translate(-50%, -50%);"
        in:fade
    >
        <div class="flex items-center justify-between w-full">
            <div class="flex items-center gap-2">
                {@html src}
                <p>{name}</p>
            </div>

            <button 
                class="p-2 bg-[#212121] rounded-lg transition hover:opacity-50" 
                on:click={() => toggleAddLinkPanel(false)}
            >
                {@html Cancel()}
            </button>
        </div>

        <div class="flex flex-col gap-4">
            {#if copy}
                <label for="link"></label>                
                <input 
                    placeholder={base_url}
                    id="url"
                    bind:value={userInput}
                    class="bg-[#212121] text-sm outline-none rounded-lg p-2"
                    type="text"
                />
            {:else}
                <label for="link"></label>
                <div class="flex items-center h-10">
                    <p class="whitespace-nowrap flex items-center justify-center pl-2 text-sm bg-[#212121] h-10 rounded-l-lg rounded-r-none">{base_url}</p>
                    <input 
                        id="url"
                        bind:value={userInput}
                        class="bg-[#212121] text-sm outline-none rounded-l-none rounded-r-lg h-10 w-full"
                        type="text"
                    />
                </div>
            {/if}
        </div>

        <div class="add-social">
            <button 
                on:click={() => addLink()} 
                disabled={loading}
                class="flex items-center justify-center w-full py-2 rounded-lg text-sm bg-indigo-700 mt-4 transition hover:opacity-50"
            >
                {#if !loading}
                    Add
                {:else}
                    Adding...         
                {/if}
            </button>
        </div>
    </section>

    <button 
        class="fixed w-screen h-screen bg-black opacity-50 inset-0 z-[21]"
        on:click={() => toggleAddLinkPanel(false)}
    ></button>
{/if}