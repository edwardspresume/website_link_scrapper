<script>
    export let title;
    export let urls;
</script>

<details class="mb-4">
    <summary>{title}</summary>

    <ul class="mt-2">
        {#each urls as url}
            <li class="mt-2 odd:bg-gray-200 p-1">{url}</li>
        {/each}
    </ul>
</details>
