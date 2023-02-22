<script>
    export let title;
    export let urls;
</script>

<details class="mb-2">
    <summary>{title}</summary>

    <ul class="mt-2">
        {#each urls as url}
            <li>{url}</li>
        {/each}
    </ul>
</details>
