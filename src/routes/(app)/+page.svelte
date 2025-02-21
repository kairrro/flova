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
    profile_opacity={"20"}
    uid={"1"}
    display_name={"kyro"}
    pfp={"https://i.pinimg.com/originals/aa/00/a4/aa00a4b92909ba3629eb0ac1c08b00f0.gif"}
    background={"https://cdn.flova.xyz/6e3d8a57-7aaa-4dd9-ad82-4a4391ba0f7a.jpg"}
    status={"This is my linktree!"}
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