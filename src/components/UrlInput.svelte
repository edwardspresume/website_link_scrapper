<script>
    export let url = '';

    // Define the valid URL pattern
    const validUrlPattern =
        /^(?:https?:\/\/)?(?:[\w-]+\.)+[\w-]+(?:\/[\w-]*)*$/;

    // Define the protocol pattern
    const protocolPattern = /^https?:\/\/(www\.)?/;

    function validateUrl(event) {
        // Get the input element and its value
        const input = event.target;
        const inputValue = input.value.trim().toLowerCase();

        // Validate the input value
        if (inputValue === '') {
            input.setCustomValidity('Please enter a URL');
            input.reportValidity();
            input.invalid = true;
            return;
        }
        if (!validUrlPattern.test(inputValue)) {
            input.setCustomValidity('Please enter a valid URL');
            input.reportValidity();
            input.invalid = true;
            return;
        }

        input.setCustomValidity('');
        input.invalid = false;

        // Add the protocol to the URL if it's missing
        const hasProtocol = protocolPattern.test(inputValue);
        url = hasProtocol ? inputValue : `https://${inputValue}`;
    }
</script>

<input
    id="urlInput"
    type="search"
    placeholder="Enter the url for the page you want to search"
    class="w-full p-2 pl-3 bg-black shadow placeholder:text-slate-400 rounded-xl"
    bind:value={url}
    on:blur={validateUrl}
/>
