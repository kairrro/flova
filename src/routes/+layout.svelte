<script lang="ts">
    import "../app.css";
    import Header from "$lib/components/Header.svelte";
    import Footer from "$lib/components/Footer.svelte";
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