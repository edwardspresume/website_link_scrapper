<script>
    export let label = '';
    export let handleClick = () => {};
</script>

<button
    class="w-full p-1 text-lg bg-black rounded-xl"
    on:click|preventDefault={handleClick}
>
    {label}
</button>
