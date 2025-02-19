<script lang="ts">
    export let display_name: string = "";
    export let username: string = "";
    export let pfp: string = "";
</script>

<a 
    href={`/${username}`} 
    class="flex items-center gap-4 rounded-lg p-2 px-4 bg-[#0f0f0f] min-w-[250px] transition hover:opacity-50"
>
    <img 
        src={pfp} 
        alt={username} 
        class="rounded-full w-20 h-20"
    />

    <div class="flex flex-col gap-2">
        <h2 class="font-medium text-xl" >{display_name}</h2>
        <p class="text-zinc-300 text-sm" >flova.xyz/{username}</p>
    </div>
</a>


<style>
    .container:hover {
        background: rgb(21, 21, 21);
    }

    img {
        -webkit-user-drag: none;
    }
</style>