<!-- App.svelte -->
<script>
    import { writable } from 'svelte/store';
    import Button from './Button.svelte';
    import Loading from './Loading.svelte';
    import Results from './Results.svelte';
    import UrlInput from './UrlInput.svelte';

    const responseDataStore = writable(null);
    const loadingStore = writable(false);
    let url = '';

    async function fetchData() {
        loadingStore.set(true);

        const response = await fetch('/.netlify/functions/siteData', {
            method: 'POST',
            body: JSON.stringify({ url }),
        });

        const urlData = await response.json();

        responseDataStore.set(urlData);
        loadingStore.set(false);
    }

    function clearSearch() {
        url = '';
        responseDataStore.set(null);
    }
</script>

<UrlInput bind:url />

<div class="flex mt-6 gap-x-8">
    <Button label="Search" handleClick={fetchData} />
    <Button label="Clear Search" handleClick={clearSearch} />
</div>

{#if $loadingStore}
    <Loading />
{:else if $responseDataStore}
    <Results {responseDataStore} />
{/if}
