<script lang="ts">
    import { slide } from "svelte/transition";

    export let question: string = "";
    export let answer: string = "";

    let answerOpen: boolean = false;

    function toggleAnswer(){
        answerOpen = !answerOpen;
    }
</script>

<button class="border-t border-zinc-700 w-full py-4" on:click={() => toggleAnswer()}>
    <div class="flex flex-col gap-4 text-left text-sm" >
        <p>{question}</p>

        {#if answerOpen}
            <p class={`text-zinc-300 text-sm`} transition:slide >{answer}</p>
        {/if}
    </div>
</button>
