<script lang="ts">
    import Sidebar from "$lib/components/Dashboard/Sidebar.svelte";
    import type { LayoutData } from "./$types";
    import { onMount } from "svelte";
    import { Hamburger } from "$lib/scripts/logos";
    import { 
        display_name, 
        profile_picture, 
        premium, 
        profile_opacity, 
        link, 
        user, 
        badges, 
        audio, 
        background, 
        description, 
        text_color, 
        email, 
        socials, 
        typewriter, 
        discord_id,
        badge_color,
        sparkle,
        icon_color,
        description_color,
        notificationMessage,
        notificationType,
    } from "$lib/scripts/stores/values";
    import { goto } from '$app/navigation';
    import { checkSession } from "$lib/scripts/supabase/client";
    import Premium from "$lib/components/Dashboard/Premium.svelte";
    import MobileSidebar from "$lib/components/Dashboard/MobileSidebar.svelte";
    import { toggleMobileSidebar } from "$lib/scripts/stores/functions";
    import AddLink from "$lib/components/Dashboard/AddLink.svelte";
    import { addLinkState } from "$lib/scripts/stores/values";
    import Notification from "$lib/components/Notification.svelte";
	
	export let data: LayoutData;

    if (data.username && data.email && data.badges){
        socials.set(data.socials);
        description.set(data.description);
        display_name.set(data.display_name);
        profile_picture.set(data.profile_picture || "");
        link.set(`hone.lol/${data.username}`);
        user.set(data.username);
        badges.set(data.badges);
        audio.set(data.audio);
        background.set(data.background);
        text_color.set(data.text_color);
        email.set(data.email);
        typewriter.set(data.typewriter);
        discord_id.set(data.discord_id);
        premium.set(data.premium);
        profile_opacity.set(data.profile_opacity);
        badge_color.set(data.badge_color);
        sparkle.set(data.sparkle);
        icon_color.set(data.icon_color);
        description_color.set(data.description_color)
    }   

    onMount(async () => {
        if (!$user){
            await checkSession();
            
            goto("/")
        }
    })
</script>

<div 
    class="fixed w-screen bg-[#0A0A0A] p-4 hidden md:flex mr-auto border border-b border-zinc-800 z-20" 
>
    <button
        on:click={() => toggleMobileSidebar(true)}
    >
        {@html Hamburger(undefined, "32px")}
    </button>
</div>

<div class="flex flex-col" >
    <Sidebar />
    <MobileSidebar />
    <div class="flex flex-col gap-10 pl-[300px] py-10 pr-4 w-full max-w-[1000px] md:p-4" >
        <div class="md:mt-20 pb-20" >
            <slot/>
        </div>
    </div>
</div>

<AddLink 
    name={$addLinkState.name}
    src={$addLinkState.src}
    base_url={$addLinkState.label}
/>
<Premium />
<Notification 
    message={$notificationMessage}
    type={$notificationType}
/>