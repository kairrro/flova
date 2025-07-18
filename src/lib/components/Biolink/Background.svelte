<script lang="ts">
    export let src: string | null = "";
    export let paused: boolean = true;
    export let isAudio: boolean;
    export let isVideo: boolean;
</script>

{#if isVideo}
    <video class="background" loop preload="auto" bind:paused={paused} bind:muted={isAudio}>
        <source {src} type="video/mp4">
        <track kind="captions">
    </video>
{:else}
    <div class="background" style="background-image: url('{src}')"></div>
{/if}

<style>
    .background {
        position: fixed;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        object-fit: cover;
        z-index: 0;
    }

    .background::before {
        position: absolute;
        width: 100vw;
        height: 100vh;
        content: "";
        background: rgba(0, 0, 0, 0.5);
    }
</style>