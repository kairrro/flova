<script lang="ts">
    import { fade } from "svelte/transition";
    import { Clipboard } from "$lib/scripts/logos";

    export let message: string = "";
</script>

<div class="position">
    <div class="container" transition:fade={{ duration: 200 }}>
        {@html Clipboard(undefined, "24px")}
        <p>{message}</p>
    </div>
</div>

<style>
    p {
        font-size: 14px;
        white-space: nowrap;
    }
    
    .container {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 16px;
        padding: 18px 24px;
        white-space: nowrap;
        background: rgba(12, 12, 12, 0.6);
        border-radius: 12px;
        backdrop-filter: blur(27.5px);
    }

    .position {
        position: fixed;
        z-index: 120;
        bottom: 10px;
        left: 50%;
        transform: translateX(-50%);
    }
</style>