<script lang="ts">
    import { Cancel } from "$lib/scripts/logos";
    import { toggleMobileSidebar } from "$lib/scripts/stores/functions";
    import { slide } from "svelte/transition";
    import { currentLink } from "$lib/scripts/stores/values";
    import { frontpageSidebarState } from "$lib/scripts/stores/values";
    
    export let signedIn: boolean = false;
</script>   


<nav 
    class="hidden md:flex fixed top-0 flex flex-col gap-20 h-full p-4 justify-between bg-[#0e0e0e] w-full max-w-[270px] z-[40]"
    transition:slide={{ axis: "x" }}
    style="min-width: 270px;"
>
    <div class="flex flex-col gap-20">
        <div>
            <div class="flex items-center justify-between gap-2" >
                <img 
                    src="./favicon.png"
                    alt="favicon"
                    class="w-10 h-10"
                />
                <button 
                    class="p-2 rounded-lg bg-[#212121] ml-auto transition hover:opacity-50" 
                    on:click={() => frontpageSidebarState.set(false)}
                >
                    {@html Cancel()}
                </button>
            </div>

            <div class="line-break"></div>
        
            <div class="flex flex-col gap-2" >
                <a 
                    href="/" 
                    class="flex items-center gap-2 text-sm py-[12px] px-4 rounded-lg transition hover:bg-[#212121]" 
                    style={`${$currentLink === "/" ? "background: rgb(31, 31, 31);" : ""}`} 
                    on:click={() => frontpageSidebarState.set(false)}
                >

                    <li>Home</li>
                </a>
        
                <a 
                    href="/faq" 
                    class="flex items-center gap-2 text-sm py-[12px] px-4 rounded-lg transition hover:bg-[#212121]" 
                    style={`${$currentLink === "/faq" ? "background: rgb(31, 31, 31);" : ""}`}
                    on:click={() => frontpageSidebarState.set(false)}
                >
                    <li>FAQ</li>
                </a>
    
                {#if signedIn}
                    <a 
                        href="/dashboard" 
                        class="flex items-center gap-2 text-sm py-[12px] px-4 rounded-lg transition hover:bg-[#212121]" 
                        style={`${$currentLink === "/dashboard" ? "background: rgb(31, 31, 31);" : ""}`} 
                        on:click={() => frontpageSidebarState.set(false)}
                        >
                        <li>Dashboard</li>
                    </a>

                {:else}
                    <a 
                        href="/login" 
                        class="flex items-center gap-2 text-sm py-[12px] px-4 rounded-lg transition hover:bg-[#212121]" 
                        style={`${$currentLink === "/login" ? "background: rgb(31, 31, 31);" : ""}`} 
                        on:click={() => toggleMobileSidebar(false)}
                        >
                        <li>Login</li>
                    </a>

                    <a 
                        href="/register" 
                        class="flex items-center gap-2 text-sm py-[12px] px-4 rounded-lg transition hover:bg-[#212121]" 
                        style={`${$currentLink === "/register" ? "background: rgb(31, 31, 31);" : ""}`} 
                        on:click={() => toggleMobileSidebar(false)}
                        >
                        <li>Register</li>
                    </a>
                {/if}
            </div>
        </div>
    </div>
</nav>

<button 
    class="hidden md:flex fixed w-screen h-screen bg-black opacity-50 z-[20]" 
    on:click={() => frontpageSidebarState.set(false)}
></button>

<style>
    li {
        list-style: none;
    }

    img {
        -webkit-user-drag: none;
    }

    .line-break {
        background: #373737;
        height: 1px;
        margin: 20px 0;
        width: 100%;
    }
</style>