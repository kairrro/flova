<script>
    import "../../app.css";
    import Footer from "$lib/components/Footer.svelte";
    import Header from "$lib/components/Header.svelte";
    import Notification from "$lib/components/Notification.svelte";
    import { notificationMessage, notificationType } from "$lib/scripts/stores/values";
</script>

<Header />
<slot />

<Notification 
    message={$notificationMessage}
    type={$notificationType}
/>