<script lang="ts">
    import { page } from "$app/stores";
    import { enhance } from "$app/forms";
    import Notification from "$lib/components/Notification.svelte";
    import { Loading } from "$lib/scripts/logos";
    import { Turnstile } from "svelte-turnstile";
    import type { ActionData } from "./$types";
    import { onMount } from "svelte";
    import { checkSessionValidity } from "$lib/scripts/supabase/client";
    import { goto } from "$app/navigation";
    import { PUBLIC_TURNSTILE_SITEKEY } from "$env/static/public";
    import Input from "$lib/components/custom/Input.svelte";

    export let form: ActionData;

    let urlUsername = $page.url.searchParams.get("username");
    let username: string = urlUsername || '';

    let buttonDisabled: boolean = false;

    let notification = {
        state: false,
        message: "",
        type: ""
    };

    function signUp(input: any){
        buttonDisabled = true
	
	    return async ({ update }: { update: any }) => {
            buttonDisabled = false 
            await update()
	    }
	}

    function disableButton(){
        buttonDisabled = true;

        setTimeout(() => {
            buttonDisabled = false;
        }, 4000);
    }

    $: if (form && !form.status){
        notification.state = true;
        notification.message = form.message;
        notification.type = "failed";
    }

    $: if (notification.state) {
        setTimeout(() => {
            notification.state = false;
        }, 3000);
    }

    onMount(async () => {
        await checkSessionValidity() ? goto("/dashboard") : null;
    });
</script>

{#if notification.state}
    <Notification message={notification.message} type={notification.type} />
{/if}

<form method="POST" class="flex flex-col gap-8 justify-center items-start max-w-[500px] w-full mx-auto mt-32 px-4" use:enhance={signUp} >
    <div class="flex flex-col gap-2" >
        <h2 class="text-3xl font-semibold">Register</h2>
        <p class="text-zinc-300 text-sm">
            By registering, you have read and agreed to our <a href="/tos">Terms of Service</a>.
        </p>
    </div>

    <Input 
        name="Email"
        id="email"
        type="email"
    />

    <Input 
        name="Password"
        id="password"
        type="password"
    />

    <Input 
        name="Confirm Password"
        id="confirm_password"
        type="password"
    />

    <div class="flex flex-col gap-2 w-full">
        <label for="password" class="text-sm"  >Username</label>
        <div class="flex items-center gap-2 password">
            <div class="bg-[#0f0f0f] p-2 py-2 rounded-lg text-sm">
                flova.xyz/
            </div>

            <Input 
                name="username"
                id="username"
                type="text"
                bind:value={username}
                label={false}
            />
        </div>
    </div>

    <div class="turnstile">
        <Turnstile siteKey={PUBLIC_TURNSTILE_SITEKEY} theme="dark" />
    </div>

    <button 
        type="submit" 
        id="submit" 
        disabled={buttonDisabled}
        class="flex items-center justify-center bg-indigo-700 py-2 rounded-lg w-full text-sm transition hover:opacity-50"
    >
        {#if buttonDisabled}
            {@html Loading("#f1f1f1", "20px")}
        
        {:else}
            Create Account
        {/if}
    </button>

</form>