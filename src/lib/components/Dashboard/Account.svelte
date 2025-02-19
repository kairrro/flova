<script lang="ts">
    import { email } from "$lib/scripts/stores/values";
    import { signOutLocally } from "$lib/scripts/supabase/client";
    import Input from "../custom/Input.svelte";
    import { currentLink } from "$lib/scripts/stores/values";
    import { onMount } from "svelte";

    onMount(() => {
        currentLink.set("/account");
    })
</script>

<section class="flex flex-col gap-4" >
    <div class="flex flex-col gap-2">
        <h2 class="text-2xl font-semibold" >Manage Account</h2>
        <p class="text-zinc-300 text-sm" >You can manage your account details here.</p>
    </div>
    
    <div class="flex flex-col gap-10 mt-4">
        <Input 
            name="Email"
            id="email"
            type="email"
            bind:value={$email}
        />

        <!-- <div>
            <a href="/change-password" id="reset-password">Change your password</a>
        </div> -->
    </div>

    <button 
            on:click={() => signOutLocally()}
            class="mr-auto p-2 rounded-lg px-10 bg-red-600 text-sm transition hover:opacity-50"
    >
        Logout
    </button>
</section>