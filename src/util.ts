import { load } from 'cheerio';
import fetch from 'node-fetch';
export function getURLsFromHtml(htmlBody: string, baseURL: string) {
    const pageURLs: string[] = [];

    const $ = load(htmlBody);

    const links = $('a');

    for (const link of links) {
        const href: string = link.attribs.href;
        const name: string = link.childNodes[0].data;

        if (href && href.startsWith('/')) {
            try {
                const url = new URL(href, baseURL).href;
                pageURLs.push(url);
            } catch (error) {
                console.log(`Invalid relative URL: ${href} for ${name}`);
            }
        } else {
            try {
                const url = new URL(href).href;

                if (!url.includes('javascript:void(0)')) {
                    pageURLs.push(url);
                }
            } catch (error) {
                console.log(`Invalid relative URL: ${href} for ${name}`);
            }
        }
    }

    return pageURLs;
}

export async function singlePageCrawl(pageURL: string) {
    const response = await fetch(pageURL);
    const contentType = response.headers.get('content-type');

    if (!response.ok) {
        console.log(
            `HTTP error! status: ${response.status} ${response.statusText} for ${pageURL}`
        );

        return;
    }

    if (!contentType.includes('text/html')) {
        console.log(`Not HTML! content-type: ${contentType} for ${pageURL}`);

        return;
    }

    const htmlBody = await response.text();
    const urls = getURLsFromHtml(htmlBody, pageURL);

    const pageURLHost = new URL(pageURL).host;
    const internalURLs: string[] = [];
    const externalURLs: string[] = [];

    urls.forEach((url) => {
        const urlHost = new URL(url).host;

        if (urlHost === pageURLHost) {
            internalURLs.push(url);
        } else {
            externalURLs.push(url);
        }
    });

    const internalURLsCount = internalURLs.length;
    const externalURLsCount = externalURLs.length;
    const totalURLsCount = internalURLsCount + externalURLsCount;
    const internalURLsPercentage = Math.round(
        (internalURLsCount / totalURLsCount) * 100
    );
    const externalURLsPercentage = Math.round(
        (externalURLsCount / totalURLsCount) * 100
    );

    const crawlInfo = {
        totalURLsCount,
        internalURLsCount,
        externalURLsCount,
        internalURLsPercentage,
        externalURLsPercentage,
        internalURLs,
        externalURLs,
    };

    return crawlInfo;
}

export function normalizeURL(url) {
    // Get the hostname and pathname from the url.
    const { hostname, pathname } = new URL(url);

    // Combine the host and the path.
    const hostPath = `${hostname}${pathname}`;

    // Remove any trailing slashes.
    return hostPath.replace(/\/+$/, '');
}
