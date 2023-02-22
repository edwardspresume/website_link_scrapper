<!-- Results.svelte -->
<script>
    import Details from './Details.svelte';

    export let responseDataStore;
    $: responseData = $responseDataStore;
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

    <div class="mt-4">
        <Details title="Internal Links" urls={responseData.internalURLs} />
        <Details title="External Links" urls={responseData.externalURLs} />
    </div>
</div>
