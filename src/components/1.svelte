<!-- results.svelte -->
<script>
    export let urlData;

    console.log('urlData', urlData);
    const getInternalLinks = () => urlData.internalURLs.map((url) => ({ url }));
    const getExternalLinks = () => urlData.externalURLs.map((url) => ({ url }));

    const getTotalLinks = () => ({
        label: 'Total Links:',
        value: urlData.totalURLsCount,
    });

    const getInternalLinksCount = () => ({
        label: 'Total internal links:',
        value: `${urlData.internalURLsCount} / ${urlData.internalURLsPercentage}%`,
    });

    const getExternalLinksCount = () => ({
        label: 'Total external links:',
        value: `${urlData.externalURLsCount} / ${urlData.externalURLsPercentage}%`,
    });
</script>

<div id="results" class="p-2 mt-10 bg-white rounded-xl text-slate-900">
    {#if urlData}
        <header>
            <p>{getTotalLinks().label} {getTotalLinks().value}</p>
            <p>
                {getInternalLinksCount().label}
                {getInternalLinksCount().value}
            </p>
            <p>
                {getExternalLinksCount().label}
                {getExternalLinksCount().value}
            </p>
        </header>

        <div class="mt-4 overflow-y-auto max-h-72">
            <details class="mb-2">
                <summary>Internal Links</summary>
                <ul class="mt-2">
                    {#each getInternalLinks() as { url }}
                        <li>{url}</li>
                    {/each}
                </ul>
            </details>

            <details>
                <summary>External Links</summary>
                <ul class="mt-2">
                    {#each getExternalLinks() as { url }}
                        <li>{url}</li>
                    {/each}
                </ul>
            </details>
        </div>
    {:else}
        <p>No results yet</p>
    {/if}
</div>
