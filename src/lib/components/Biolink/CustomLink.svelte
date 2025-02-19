<script lang="ts" >
    export let name: string = "";
    export let href: string = "";
</script>

<a
    {href}
    class="flex items-center justify-center gap-2 text-sm p-2 py-[16px] rounded-xl bg-black/50 w-full transition hover:opacity-70 mt-2"
    target="_blank"
>   
    <p>{name}</p>
</a>