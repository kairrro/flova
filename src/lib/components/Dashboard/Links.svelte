<script>
    import Link from "./Link.svelte";
    import { currentLink } from "$lib/scripts/stores/values";
    import { onMount } from "svelte";

    onMount(() => {
        currentLink.set("/links");
    })
</script>

<section>
    <div class="flex flex-col gap-2">
        <h2 class="text-2xl font-semibold" >Link your social media profiles</h2>
        <p class="text-zinc-300 text-sm" >Pick socials to add to your profile.</p>
    </div>

    <div class="flex flex-wrap gap-2 mt-6">
        <Link name="Roblox" label="Roblox username" />
        <Link name="Xbox"  label="Xbox gamertag" />
        <Link name="Youtube"  label="https://youtube.com/@" />
        <Link name="Bitcoin" label="Bitcoin address" />
        <Link name="Twitter"  label="https://x.com/" />
        <Link name="Instagram" label="https://instagram.com/" />
        <Link name="Reddit"  label="https://www.reddit.com/user/" />
        <Link name="Cashapp" label="Cashapp tag" />
        <Link name="Snapchat" label="Snapchat username" />
        <Link name="Custom" label="https://" />
        <Link name="Twitch" label="https://twitch.tv/" />
        <Link name="Paypal" label="https://paypal.me/" />
        <Link name="Github" label="https://github.com/" />
        <Link name="Spotify" label="https://open.spotify.com/user/" />
        <Link name="Soundcloud" label="https://soundcloud.com/" />
        <Link name="Pinterest" label="https://pinterest.com/" />
        <Link name="Steam" label="https://steamcommunity.com/id/" />
        <Link name="Discord" label="Discord server"/>
        <Link name="Telegram" label="https://t.me/"/>
        <Link name="Tiktok" label="https://tiktok.com/@"/>
        <Link name="Facebook" label="https://www.facebook.com/" />
        <Link name="Linkedin"  label="https://www.linkedin.com/in/" />
        <Link name="Threads" label="https://threads.net/@" />
        <Link name="Tumblr" label="https://www.tumblr.com/" />
        <Link name="Kick" label="https://kick.com/"/>
        <Link name="Monero" label="Monero address"/>
        <Link name="Ethereum" label="Ethereum address" />
        <Link name="Chess" label="https://www.chess.com/member/"/>
        <Link name="Playstation" label="PSN ID"/>
        <Link name="Wattpad" label="https://www.wattpad.com/user/" />
        <Link name="Valorant" label="Valorant username" />
        <Link name="Litecoin" label="Litecoin address" />
    </div>
</section>
