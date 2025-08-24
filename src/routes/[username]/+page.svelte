<script lang="ts">
    import Profile from "$lib/components/Biolink/Profile.svelte";
    import UserNotExist from "$lib/components/Biolink/UserNotExist.svelte";
  import { description_color } from "$lib/scripts/stores/values";
    import type { PageData } from './$types';
	
	export let data: PageData;
</script>

{#if data.username}
    <Profile
        username={data.username}
        profile_opacity={data.profile_opacity}
        uid={data.id}
        display_name={data.display_name}
        pfp={data.profile_picture}
        background={data.background}
        status={data.description}
        socials={data.socials}
        badges={data.badges}
        typewriter={data.typewriter}
        text_color={data.text_color}
        audio={data.audio}
        icon_color={data.icon_color}
        badge_color={data.badge_color}
        sparkle={data.sparkle}
        view_count={data.view_count}
        description_color={data.description_color}
        discord_username={data.discord_username}
        discord_pfp={data.discord_avatar}
        discord_custom_status={data.discord_custom_status}
        discord_icon={data.discord_status_icon}
        discord_status={data.discord_status}
        song={data.song}
        artist={data.artist}
    />
{:else}
    <UserNotExist />
{/if}