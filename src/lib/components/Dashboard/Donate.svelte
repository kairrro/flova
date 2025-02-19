<script lang="ts">
    import { Mastercard } from "$lib/scripts/logos";
    import { Bitcoin, Cashapp } from "$lib/scripts/socials";
    import Input from "../custom/Input.svelte";
    import { currentLink } from "$lib/scripts/stores/values";
    import { onMount } from "svelte";

    currentLink.set("/donate");

    let btcState: boolean = false;
    let cashappState: boolean = false;

    function copyToClipboard(type: string, text: string) {
        navigator.clipboard.writeText(text).then(
            function () {
                switch (type) {
                    case "btc":
                        btcState = true;
                        setTimeout(() => {
                            btcState = false;
                        }, 2000);
                        break;

                    case "cashapp":
                        cashappState = true;
                        setTimeout(() => {
                            cashappState = false;
                        }, 2000);
                        break;
                }
            },
            function (err) {
                console.error("Unable to copy to clipboard", err);
            }
        );
    }

    onMount(() => {
        currentLink.set("/donate");
    })
</script>

<div class="flex flex-col gap-6">
    <div class="flex flex-col gap-2">
        <h2 class="text-2xl font-semibold" >Donate</h2>
        <p class="text-sm text-zinc-300 leading-[23px]">    
            Contribute to the project's development! As a solo-developer, your donations are highly valued and help to support the project!
        </p>
    </div>

    <div class="flex flex-col gap-2" >    
        <div class="flex items-center gap-2 mt-4">
            <div class="flex-container crypto-icon">
                {@html Cashapp()}   
            </div>
    
            <Input 
                name="cashapp"
                id="cashapp"
                type="text"
                value={"$kairrro"}
                label={false}
                disabled={true}
            />
    
            <button 
                class="flex items-center justify-center text-sm px-8 py-2 bg-white rounded-lg text-black transition hover:opacity-50" 
                disabled={btcState} 
                on:click={() => copyToClipboard("cashapp", "$kairrro")}
            >
                { cashappState ? "Copied" : "Copy" }
            </button>
        </div>

        <div class="flex items-center gap-2 mt-4">
            <div class="flex-container crypto-icon">
                {@html Mastercard()}   
            </div>
    
            <Input 
                name="card"
                id="card"
                type="text"
                value={"https://buy.stripe.com/4gwbLR1F72zebZK28j"}
                label={false}
                disabled={true}
            />
    
            <a 
                class="flex items-center justify-center text-sm px-8 py-2 bg-white rounded-lg text-black transition hover:opacity-50" 
                href="https://buy.stripe.com/bIY17dbfH8XCgg0eV7"
                target="_blank"
            >
                Donate
            </a>
        </div>

        <div class="flex items-center gap-2 mt-4">
            <div class="flex-container crypto-icon">
                {@html Bitcoin()}   
            </div>
    
            <Input 
                name="bitcoin"
                id="bitcoin"
                type="text"
                value={"bc1qqaqe6lrl9qfyp9sz2qhm5yw2upjh7da9srltgp"}
                label={false}
                disabled={true}
            />
    
            <button 
                class="flex items-center justify-center text-sm px-8 py-2 bg-white rounded-lg text-black transition hover:opacity-50" 
                disabled={btcState} 
                on:click={() => copyToClipboard("btc", "bc1qqaqe6lrl9qfyp9sz2qhm5yw2upjh7da9srltgp")}
            >
                { btcState ? "Copied" : "Copy" }
            </button>
        </div>
    </div>
</div>