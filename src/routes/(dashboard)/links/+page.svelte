<script>
    import Links from "$lib/components/Dashboard/Links.svelte";
    import AddLink from "$lib/components/Dashboard/AddLink.svelte";
    import AddedLinks from "$lib/components/Dashboard/AddedLinks.svelte";
    import { socials } from "$lib/scripts/stores/values";
    import { addLinkState } from "$lib/scripts/stores/values";
</script>

<section class="flex flex-col gap-10">
    <Links />

    {#if $addLinkState.status}
        <AddLink 
            name={$addLinkState.name}
            base_url={$addLinkState.label}
            src={$addLinkState.src}
        />
    {/if}

    <div class="flex flex-col gap-6" >
        <div class="flex flex-col gap-2" > 
            <h2 class="text-2xl font-semibold" >Your Socials</h2>
            <p class="text-zinc-300 text-sm" >
                Manage your social media links here.
            </p>
        </div>
        <div class="flex flex-col gap-2">
            {#if $socials.length !== 0}
                {#each $socials as { id, name, url }}
                    <AddedLinks 
                        name={name} 
                        link={url}
                        id={id}
                    />
                {/each}

                {:else}
                    <p class="text-zinc-300 text-sm">You have no socials added!</p>
            {/if}
        </div>
    </div>
</section>