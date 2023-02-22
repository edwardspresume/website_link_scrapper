<!-- Results.svelte -->
<script>
    import { onDestroy, onMount } from 'svelte';
    import { get } from 'svelte/store';

    export let responseDataStore;
    let responseData;

    const unsubscribe = responseDataStore.subscribe((data) => {
        responseData = data;
    });

    onMount(() => {
        responseData = get(responseDataStore);
    });

    onDestroy(() => {
        unsubscribe();
    });
</script>

<div id="results" class="p-2 mt-10 bg-white rounded-xl text-slate-900">
    <header>
        <p>Total Links: {responseData.totalURLsCount}</p>
        <p>
            Total internal links: {responseData.internalURLsCount} / {responseData.internalURLsPercentage}
            %
        </p>
        <p>
            Total external links: {responseData.externalURLsCount} / {responseData.externalURLsPercentage}
            %
        </p>
    </header>

    <div class="mt-4 overflow-y-auto max-h-72">
        <details class="mb-2">
            <summary>Internal Links</summary>
            <ul class="mt-2">
                {#each responseData.internalURLs as url}
                    <li>{url}</li>
                {/each}
            </ul>
        </details>

        <details>
            <summary>External Links</summary>
            <ul class="mt-2">
                {#each responseData.externalURLs as url}
                    <li>{url}</li>
                {/each}
            </ul>
        </details>
    </div>
</div>
