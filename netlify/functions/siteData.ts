import { Handler, HandlerEvent } from '@netlify/functions';

import { singlePageCrawl } from '../../src/util';

const handler: Handler = async (event: HandlerEvent) => {
    let url = JSON.parse(event.body).url;

    // Define the protocol pattern
    const protocolPattern = /^https?:\/\/(www\.)?/;

    // Add the protocol to the URL if it's missing
    const hasProtocol = protocolPattern.test(url);
    url = hasProtocol ? url : `https://${url}`;

    const urlData = await singlePageCrawl(url);

    return {
        statusCode: 200,
        body: JSON.stringify(urlData),
    };
};

export { handler };
