import { Handler, HandlerEvent } from '@netlify/functions';

import { singlePageCrawl } from '../../src/util';

const handler: Handler = async (event: HandlerEvent) => {
    const { url }: { url: string } = JSON.parse(event.body);

    const urlData = await singlePageCrawl(url);

    return {
        statusCode: 200,
        body: JSON.stringify(urlData),
    };
};

export { handler };
