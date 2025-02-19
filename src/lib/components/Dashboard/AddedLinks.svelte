<script lang="ts">
    import { addedLinkTrashDisabled, socials } from "$lib/scripts/stores/values";
    import Notification from "../Notification.svelte";
    import type { CustomResponse, Socials } from "$lib/scripts/types/misc";
    import { addLinkSocialIcons } from "$lib/scripts/globals/biolink";
    import { Trash } from "$lib/scripts/logos";

    export let id: string = "";
    export let name = "";
    export let link = "";
    
    let removedNotif = false;

    export async function createSocial(): Promise<CustomResponse>{
        try {
            const response = await fetch(`/api/socials`, {
                method: 'POST',
                headers: {
                    'Content-Type' : 'application/json',
                },
                body: JSON.stringify($socials),
            })

            if (response.status === 200){
                console.log("Updated socials");

                return {
                    success: true,
                    message: "Updated socials",
                }
            }

            else if (response.status === 400){
                return {
                    success: false,
                    message: "Failed to update socials",
                }
            }

            else {
                return {
                    success: false,
                    message: await response.json(),
                }
            }
        }

        catch (error){
            return {
                success: false,
                message: error,
            }
        }
    }
    
    async function removeLink(){
        try {
            socials.update((existingSocials: Socials[]) => existingSocials.filter((social: Socials) => social.id !== id));

            addedLinkTrashDisabled.set(true);
            await createSocial();
            setTimeout(() => {
                addedLinkTrashDisabled.set(false)
            }, 3000);
        }

        catch (error){
            console.error(error);
        }

        finally {
            removedNotif = true;
                
            setTimeout(() => {
                removedNotif = false;
            }, 3000);
        }
    }
</script>

{#if removedNotif}
    <Notification message="Social removed successfully!" type="success" />
{/if}

<div class="flex flex-col gap-4 bg-[#111111] p-2 w-full max-w-[700px] rounded-lg">
    <div class="flex items-center justify-between">
        <div class="flex items-center gap-2 text-[12px]">
            {@html addLinkSocialIcons[name.toLowerCase()]}
            <p>{name}</p>
        </div>

        <button 
            class="flex items-center justify-center p-[6px] transition bg-zinc-800 rounded-lg transition {addedLinkTrashDisabled ? "" : "hover:opacity-50"}"
            on:click={() => removeLink()}
            disabled={$addedLinkTrashDisabled}
        >
            {@html Trash(undefined, "18px")}
        </button>
    </div>

    <div class="flex items-center">
        <p
            class="bg-[#212121] border-none text-xs w-full p-2 rounded-lg"
        >
            {link}
        </p>
    </div>
</div>