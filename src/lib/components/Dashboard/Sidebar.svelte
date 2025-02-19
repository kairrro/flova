<script lang="ts">
    import { profile_picture, display_name, user, badges, currentSidebar } from "$lib/scripts/stores/values";
    import { BetaTester, Ceo, Og, Premium } from "$lib/scripts/badges";
    import { Account, Dashboard, Donate, Links, External } from "$lib/scripts/logos";
    import { togglePremiumUI } from "$lib/scripts/stores/functions";
    import { currentLink } from "$lib/scripts/stores/values";

    const badgeIcons: Record<string, string> = {
        "beta_tester": BetaTester(undefined, "16px"),
        "og": Og(undefined, "16px"),
        "ceo": Ceo(undefined, "16px"),
        "premium": Premium(undefined, "16px"),
    }

    function toLink(){
        
    }
</script>   

<nav class="fixed top-0 flex flex-col gap-20 h-full p-4 justify-between bg-[#0e0e0e] w-full max-w-[270px] md:hidden z-[20]">
    <div class="flex flex-col gap-20">
        <div>
            <div class="flex items-center gap-4">
                <img
                    src={$profile_picture === null || $profile_picture === "" ? "/assets/default.jpg" : $profile_picture} 
                    alt="pfp" 
                    class="w-[90px] h-[90px] rounded-full object-cover"
                />

                <div class="flex flex-col gap-2">
                    <h2 class="text-[20px] font-semibold min-h-[20px] truncate max-w-[80px]" >{$display_name}</h2>
                    <a href={`/${$user}`} class="text-sm text-zinc-300 transition hover:text-indigo-700 truncate max-w-[140px]" >
                        flova.xyz/{$user}
                    </a>
                    {#if $badges.length > 0}
                        <div class="flex items-center gap-2 p-2 bg-[#040404C2] mr-auto rounded-xl">
                            {#each $badges as badge}
                                {@html badgeIcons[badge]}
                            {/each}
                        </div>
                    {/if}
                </div>
            </div>
    
            <div class="line-break"></div>
        
            <div class="flex flex-col gap-2 font-medium" >
                <a 
                    href="/dashboard" 
                    class="flex items-center gap-2 text-sm py-[12px] px-4 rounded-lg transition hover:bg-[#212121]" 
                    style={`${$currentLink === "/dashboard" ? "background: rgb(31, 31, 31);" : ""}`} 
                >
                    {@html Dashboard()}
                    <li>Dashboard</li>
                </a>
        
                <a 
                    href="/links" 
                    class="flex items-center gap-2 text-sm py-[12px] px-4 rounded-lg transition hover:bg-[#212121]" 
                    style={`${$currentLink === "/links" ? "background: rgb(31, 31, 31);" : ""}`}
                >
                    {@html Links()}
                    <li>Links</li>
                </a>
    
                <a 
                    href="/account" 
                    class="flex items-center gap-2 text-sm py-[12px] px-4 rounded-lg transition hover:bg-[#212121]" 
                    style={`${$currentLink === "/account" ? "background: rgb(31, 31, 31);" : ""}`} 
                    >
                    {@html Account()}
                    <li>Account</li>
                </a>

                <a 
                    href="/donate" 
                    class="flex items-center gap-2 text-sm py-[12px] px-4 rounded-lg transition hover:bg-[#212121]" 
                    style={`${$currentLink === "/donate" ? "background: rgb(31, 31, 31);" : ""}`} 
                >
                    {@html Donate(undefined, "24px")}
                    <li id="donate">Donate</li>
                </a>

                <button 
                    class="flex items-center gap-2 text-sm py-[12px] px-4 rounded-lg transition text-indigo-400 hover:bg-[#212121]" 
                    style={`${$currentLink === "premium" ? "background: rgb(31, 31, 31);" : ""}`} 
                    on:click={() => togglePremiumUI(true)}
                >
                    {@html Premium(undefined, "24px")}
                    <li id="premium">Premium</li>
                </button>
            </div>
        </div>
    </div>

    <a class="flex items-center justify-center gap-2 bg-indigo-700 p-2 rounded-lg text-xs transition hover:opacity-50" href="/{$user}">
        {@html External()}
        <p>Visit your profile</p>
    </a>
</nav>

<style>
    ol, li {
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