<script lang="ts">
    import { Hamburger, Cancel } from "$lib/scripts/logos";
    import { signedIn } from "$lib/scripts/stores/values";
    import FrontpageSidebar from "./FrontpageSidebar.svelte";
    import { frontpageSidebarState } from "$lib/scripts/stores/values";

    function toggleDropdown(){
        frontpageSidebarState.set(!$frontpageSidebarState);
    }
</script>

<header class="fixed w-screen bg-[#0A0A0A] top-0 right-0 left-0 border-b-[1px] border-zinc-800 flex items-center justify-between box-sizing w-full text-sm z-20 px-10 py-[12px] z-30 md:px-4 ">
    <div class="flex items-center justify-between max-w-[1279px] w-full mx-auto" >
        <a href="/" class="transition hover:scale-110">
            <img src="/hone.png" alt="logo" width="40px" height="40px" class="rounded-lg" />
        </a>
    
        <div class="flex items-center gap-12 md:hidden">
            <a href="/" class="hover:underline underline-offset-4 transition">Home</a>
            <a href="/faq" class="hover:underline underline-offset-4 transition">FAQ</a>

            {#if $signedIn}
                <a href="/dashboard" class="hover:underline underline-offset-4 transition">Dashboard</a>
            {:else}
                <a href="/login" class="hover:underline underline-offset-4 transition">Login</a>
                <a href="/register" class="hover:underline underline-offset-4 transition">Register</a>
            {/if}
        </div>
    
        <button class="hidden md:flex p-2" on:click={() => toggleDropdown()} >
            {@html Hamburger()}
        </button>  
    </div>
</header>

{#if $frontpageSidebarState}
    <FrontpageSidebar
        signedIn={$signedIn}
    />
{/if}