<script lang="ts">
    import { goto } from "$app/navigation";
    import { supabase } from "$lib/scripts/supabase/client";
    import { onMount } from "svelte";
    import { checkSessionValidity } from "$lib/scripts/supabase/client";
    import { isValidEmail, isValidPassword, notify, setCookie } from "$lib/scripts/functions/misc";
    import Input from "../custom/Input.svelte";
    import { currentLink, notificationState } from "$lib/scripts/stores/values";

    let email: string;
    let password: string;
    let buttonDisabled: boolean = false;


    export async function signInWithPassword(email: string, password: string){
        try {
            if (!email || !password){
                return;
            }

            let access_token = "";
            
            buttonDisabled = true;
            const { data, error } = await supabase.auth.signInWithPassword({
                email: email,
                password: password,
            });

            if (!error && data.session){
                access_token = data.session.access_token;
                setCookie(access_token);
                goto("/dashboard");

            } else {
                buttonDisabled = false;

                notify(error?.message ?? "An unknown error occurred");

            } 

        } finally {
            setTimeout(() => {
                notificationState.set(false);
            }, 3000)
        }
    }

    onMount(async () => {
        await checkSessionValidity() ? goto("/dashboard") : null;

        currentLink.set("/login");
    });

    $: buttonDisabled = !isValidEmail(email) || !isValidPassword(password);
</script>

<form class="flex flex-col gap-6 justify-center items-start max-w-[500px] w-full mx-auto h-screen px-4">
    <div class="flex flex-col gap-2" > 
        <h2 class="text-3xl font-semibold" >Login</h2>
        <p class="text-zinc-300 text-sm" >Sign into your account</p>
    </div>

    <Input 
        name="Email"
        id="email"
        type="email"
        bind:value={email}
    />

    <Input 
        name="Password"
        id="password"
        type="password"
        bind:value={password}
    />

    <!-- <div id="reset-password">
        <a href="/reset-password" >Forgot your password? Click here</a>
    </div> -->

    <button 
        on:click={ () => signInWithPassword(email, password)} 
        disabled={buttonDisabled} 
        class="bg-indigo-700 w-full text-sm py-2 rounded-lg transition {buttonDisabled ? "" : "hover:opacity-50"}" 
    >
        Login
    </button>
</form>

<style>
    button:disabled {
        opacity: 0.5;
    }
</style>