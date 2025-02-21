<script lang="ts">
    import Question from "./Question.svelte";
    import { onMount } from "svelte";
    import { currentLink } from "$lib/scripts/stores/values";

    onMount(() => {
        currentLink.set("/faq");
    });
</script>

<section 
    class="flex flex-col gap-10 w-full max-w-[1000px] mx-auto px-8 h-screen mt-40 pb-10"
>
    <div class="flex flex-col gap-2" >
        <h1 class="text-3xl font-semibold">FAQ</h1>
        <p class={`text-zinc-300 text-sm`}>
            This is a section of frequently asked questions.
        </p>
    </div>

    <div class="flex flex-col gap-2" >
        <Question 
            question = "How do I enable discord presence?"
            answer = "To enable your discord presence, you must copy your discord ID into the dashboard and join our discord server for our bot to monitor your presence."
        />

        <!-- <Question 
            question = "Where can I get background, audio or avatar links I can use for my linktree?"
            answer = "Answer to Question 2"
        /> -->
    </div>
</section>