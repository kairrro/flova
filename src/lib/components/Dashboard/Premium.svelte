<script>
    import { Premium } from "$lib/scripts/badges";
    import { Cancel, Tick } from "$lib/scripts/logos";
    import { togglePremiumUI } from "$lib/scripts/stores/functions";
    import { premiumState } from "$lib/scripts/stores/values";
    import { fade } from "svelte/transition";
    import Typewriter from "svelte-typewriter";
    import { currentLink } from "$lib/scripts/stores/values";

    currentLink.set("/premium");
</script>

{#if $premiumState}
    <section 
        class="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[21] bg-zinc-900 max-w-[400px] w-full px-4 rounded-lg py-4 w-[95vw]"
        in:fade
    >
        <div class="flex flex-col gap-4">
            <div class="flex items-center justify-between gap-2 w-full" >
                <div class="flex items-center gap-2" > 
                    {@html Premium()}
                    <h1 class="text-2xl font-semibold">Premium</h1>
                </div>
                <button 
                    class="p-[6px] rounded-lg transition hover:bg-zinc-700" 
                    on:click={() => togglePremiumUI(false)}
                >
                    {@html Cancel()}
                </button>
            </div>
            <p class="text-xs text-zinc-300 leading-[22px]">
                Our premium service is the perfect plan for you to add more features and customization to your biolink.
            </p>
        </div>

        <div class="flex flex-col gap-2 text-xs text-zinc-300 mt-4 bg-[#0f0f0f] p-2 rounded-lg" >
            <div class="flex items-center gap-2" >
                {@html Tick()}
                <p>Video Background</p>
            </div>
            <div class="flex items-center gap-2" >
                {@html Tick()}
                <p>Custom Username Color</p>
            </div>
            <div class="flex items-center gap-2" >
                {@html Tick()}
                <p>Exclusive Discord Role</p>
            </div>
            <div class="flex items-center gap-2" >
                {@html Tick()}
                <p>Premium Badge</p>
            </div>

            <div class="flex items-center gap-2" >
                {@html Tick()}
                <p>Increased Upload Limit</p>
            </div>
            <div class="flex items-center gap-2" >
                {@html Tick()}
                <Typewriter mode="loop" wordInterval={3000} interval={60} unwriteInterval={60}>
                    <p>Typewriter Effect</p>
                </Typewriter>
            </div>
        </div>

        <div class="flex items-center gap-[6px] pt-6" >
            <span class="text-3xl font-semibold" >$4.99</span>
            <p class="text-zinc-300 text-[10px]" >/ USD Lifetime</p>
        </div>

        <a
            href="https://buy.stripe.com/4gwbLR1F72zebZK28j"
            target="_blank"
            class="flex items-center justify-center bg-indigo-700 w-full py-2 rounded-lg text-xs mt-6 transition hover:opacity-50"
        >
            Purchase Premium
        </a>
    </section>

    <button
        class="fixed w-screen h-screen bg-black opacity-50 z-[20]" 
        on:click={() => togglePremiumUI(false)}
    ></button>
{/if}