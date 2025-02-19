<script>
    import { page } from "$app/stores";

    const { username } = $page.params;
</script>

<div class="container">
    <p>The username '{username}' has not been claimed yet.</p>
    <a href={`/register?username=${username}`}>
        Claim here
    </a>
</div>

<style>
    .container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100vh;
        gap: 28px;
    }

    .container p {
        font-size: 18px;
    }

    .container a {
        border: 1px solid #1f1f1f;
        border-radius: 8px;
        padding: 12px 24px;
        transition: border 0.2s ease-in-out;
    }

    .container a:hover {
        border: 1px solid var(--accent);
    }
</style>