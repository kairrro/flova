<script lang="ts">
    import CallToAction from "$lib/components/Frontpage/CallToAction.svelte";
    import Features from "$lib/components/Frontpage/Features.svelte";
    import { SITE_NAME } from "$lib/scripts/globals/misc";
    import { description } from "$lib/scripts/globals/misc";
    import FrontpageShowcase from "$lib/components/Biolink/FrontpageShowcase.svelte";
    import { onMount } from "svelte";
    import { currentLink, signedIn } from "$lib/scripts/stores/values";
    import type { PageData } from "./$types";
    import { goto } from "$app/navigation";
    import { checkSession } from "$lib/scripts/supabase/client";

    export let data: PageData;

    signedIn.set(data.status);

    function hasAccessTokenInUrl() {
        const hashParams = new URLSearchParams(window.location.hash.slice(1));
        return hashParams.has('access_token');
    }

    onMount(async () => {
        if (hasAccessTokenInUrl()){
            setTimeout(() => {
                goto("/dashboard")
            }, 2000)
        };

        await checkSession();
    });

    onMount(() => {
        currentLink.set("/");
    })
</script>

<svelte:head>
    <title>{SITE_NAME}</title>
    <meta property="og:title" content={SITE_NAME}>
    <meta property="og:description" content={description}>
    <meta property="og:type" content="website">
    <meta property="og:image" content="./favicon.png">
    <meta name="description" content={description}>
</svelte:head>

<FrontpageShowcase
    username={"kyro"}
    profile_opacity={"40"}
    uid={"1"}
    display_name={"kyro"}
    pfp={"https://i.pinimg.com/736x/5b/9a/17/5b9a17a61f790c02623318c371d2217b.jpg"}
    background={"https://i.pinimg.com/736x/e6/d5/25/e6d52538e5f18fbcc02b578cee6df4b9.jpg"}
    
    socials={{
        "Cashapp": "$kairrro",
        "Custom": "https://honewebservices.com",
        "Github": "https://github.com/kairrro",
        "Instagram": "https://instagram.com/damnkyro_",
        "PayPal": "https://paypal.me/honeservices",
    }}
    badges={['ceo', 'og', 'beta_tester', 'premium']}
    typewriter={true}
    text_color={"#7358f9"}
    icon_color={"#7358f9"}
    badge_color={"#7358f9"}
    sparkle={"yellow"}
    view_count={"300"}
    description_color={"#f1f1f1"}
    status={"Sample Flova Page"}
/>

<!-- discord_username={data.discord_username}
discord_pfp={data.discord_avatar}
discord_custom_status={data.discord_custom_status}
discord_icon={data.discord_status_icon}
discord_status={data.discord_status}
song={data.song}
artist={data.artist} -->
<Features />
<CallToAction />