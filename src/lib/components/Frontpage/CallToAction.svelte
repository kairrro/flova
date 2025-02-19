<script>
    import Showcase from "./Showcase.svelte";
    import { goto } from "$app/navigation";
    
    let username = "";

    function routeToRegister(){
        if (username !== ""){
            goto(`/register?username=${username}`);
        }
    }
</script>

<section class="flex flex-col gap-10 w-full max-w-[1279px] mx-auto overflow-x-hidden px-4"> 
    <div class="flex flex-col items-center gap-2 text-center" >
        <h2 class="font-semibold text-3xl" >Lets get you started</h2>
        <p class="text-zinc-300 text-sm leading-[23px]" >Join today and effortlessly create your biolink page in just minutes.</p>
    </div>

    <div class="flex items-center justify-center md:flex-col md:gap-4">
        <div class="flex items-center h-full">
            <div 
                class="flex items-center justify-center bg-[#3c3c3c45] border border-[1px] border-[#2a2a2a] h-full px-4 text-sm py-2"
            >
                flova.xyz/
            </div>
            <input 
                type="text" 
                placeholder="username" 
                id="username" 
                bind:value={username}
                class="pl-4 text-sm outline-none bg-[#212121] h-full py-2"
            />
        </div>

        <button 
            on:click={routeToRegister} 
            class="display items-center justify-center border border-[1px] border-[#2a2a2a] h-full text-sm px-4 duration-300 transition hover:border-indigo-700 py-2" 
        >
            Claim Username
        </button>
    </div>

    <div class="flex items-center gap-2 w-[200%] overflow-x-hidden showcase">
        <Showcase 
            username = "kyro"
            display_name = "x"
            pfp = "https://i.pinimg.com/564x/16/e4/4d/16e44dfcaaf1922b3ca6d45a0142754f.jpg"
        />
        
        <Showcase 
            username = "hemi"
            display_name = "sosa"
            pfp = "https://files.catbox.moe/ern28m.gif"
        />

        <Showcase 
            username = "bands"
            display_name = "$"
            pfp = "https://i.pinimg.com/564x/d0/f1/aa/d0f1aa163670841ec41789e450299e11.jpg"
        />

        <Showcase 
            username = "hone"
            display_name = "*"
            pfp = "https://i.pinimg.com/564x/21/f8/7e/21f87e16101e92a1cc209af4754a9a9a.jpg"
        />
        
        <Showcase 
            username = "fon"
            display_name = "fon"
            pfp = "https://i.pinimg.com/564x/46/4a/93/464a93ad63b158b8eaa8d4c54484efc5.jpg"
        />
    
        <Showcase 
            username = "kyro"
            display_name = "x"
            pfp = "https://i.pinimg.com/564x/16/e4/4d/16e44dfcaaf1922b3ca6d45a0142754f.jpg"
        />

        <Showcase 
            username = "hemi"
            display_name = "sosa"
            pfp = "https://files.catbox.moe/ern28m.gif"
        />

        <Showcase 
            username = "bands"
            display_name = "$"
            pfp = "https://i.pinimg.com/564x/d0/f1/aa/d0f1aa163670841ec41789e450299e11.jpg"
        />

        <Showcase 
            username = "hone"
            display_name = "*"
            pfp = "https://i.pinimg.com/564x/21/f8/7e/21f87e16101e92a1cc209af4754a9a9a.jpg"
        />

        <Showcase 
            username = "fon"
            display_name = "fon"
            pfp = "https://i.pinimg.com/564x/46/4a/93/464a93ad63b158b8eaa8d4c54484efc5.jpg"
        />
    </div>
</section>

<style>
    .showcase {
        animation: 20s slide infinite linear;
    }
    

    @keyframes slide {
        from {
            transform: translateX(0);
        }

        to {
            transform: translateX(-50%);
        }
    }
</style>