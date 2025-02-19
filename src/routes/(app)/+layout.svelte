<script lang="ts">
    import Footer from "$lib/components/Footer.svelte";
    import Header from "$lib/components/Header.svelte";
  import { signedIn } from "$lib/scripts/stores/values";
    import "../../app.css";
    import type { PageData } from './$types';
	
	export let data: PageData;

    if (data.status){
        signedIn.set(true);
    }
</script>

<Header />
<slot />
<Footer />