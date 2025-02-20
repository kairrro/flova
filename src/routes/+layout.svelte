<script lang="ts">
    import "../app.css";
    import { fade } from "svelte/transition";

    let pageRendered: boolean = false;

    setTimeout(() => {
        pageRendered = true;
    }, 5);
</script>

{#if pageRendered}
    <div class="flex flex-col gap-20" >
        <main 
            class="flex flex-col gap-20"
            transition:fade
        >
            <slot />
        </main>
    </div>
{/if}