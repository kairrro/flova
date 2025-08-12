<script lang="ts">
    export let src: string | null = "";
    export let paused: boolean = true;
    export let isAudio: boolean;
    export let isVideo: boolean;
</script>

{#if isVideo}
    <video class="relative background" loop preload="auto" bind:paused={paused} bind:muted={isAudio}>
        <source {src} type="video/mp4">
        <track kind="captions">
    </video>
{:else}
    <div class="background" style="background-image: url('{src}')"></div>
{/if}

<style>
    .background {
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        width: 100vw;
        height: 110vh;
        max-height: 900px;
        object-fit: cover;
        z-index: 0;
    }
</style>