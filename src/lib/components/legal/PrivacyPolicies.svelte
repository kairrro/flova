<script lang="ts">
    import { fade } from "svelte/transition";
    import Rule from "./Rule.svelte";

    let typeOfDataCollected = [
        `
            While using Our Service, We may ask You to provide Us with certain personally identifiable information that can be used to contact or identify You. 
            Personally identifiable information may include, but is not limited to: Email Address, Full Name, Phone Number, Usage Data.
        `,
    ];

    let usageData = [
        `
            Usage Data is collected automatically when using the Service.
        `,
        `
            Usage Data may include information such as Your Device's Internet Protocol address (e.g. IP address), browser type, browser version, the pages 
            of our Service that You visit, the time and date of Your visit, the time spent on those pages, unique device identifiers and other diagnostic data.
        `,
        `
            When You access the Service by or through a mobile device, We may collect certain information automatically, including, but not limited to, 
            the type of mobile device You use, Your mobile device unique ID, the IP address of Your mobile device, Your mobile operating system, the type of 
            mobile Internet browser You use, unique device identifiers and other diagnostic data.
        `,
        `
            We may also collect information that Your browser sends whenever You visit our Service or when You access the Service by or through a mobile device.
        `
    ];

    let pageRendered = false;

    setTimeout(() => {
        pageRendered = true;
    }, 5)
</script>

<svelte:head>
    <title>Privacy Policy</title>
</svelte:head>

{#if pageRendered}
    <section class="flex flex-col gap-10 mx-auto max-w-[1279px] px-10 mt-40" transition:fade >
        <div class="flex flex-col gap-2">
            <h1 class="font-semibold text-3xl">Privacy Policy</h1>
            <p class="text-zinc-300 leading-loose text-sm " >
                This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells 
                You about Your privacy rights and how the law protects You.
            </p>
        </div>

        <div class="flex flex-col gap-16" >
            <Rule
                title = "Types of Data Collected"
                rules = {typeOfDataCollected}
            />

            <Rule
                title = "Usage Data"
                rules = {usageData}
            />
        </div>
    </section>
{/if}