import { v4 as uuidv4 } from 'uuid';
import { URL } from 'url';

export function parseHtml(htmlString) {
    const urlRegex = /https?:\/\/\S+/g;
    const hrefs = htmlString.match(urlRegex);

    if (!hrefs) return {};

    const parsedUrls = hrefs.map((href) => {
        const parsedUrl = new URL(href);
        return {
            url: href,
            path: parsedUrl.pathname,
            query: parsedUrl.searchParams.toString(),
            fragments: parsedUrl.hash,
        };
    });

    return parsedUrls;
}

export function generateUniqueString(length = 30) {
    return Array.from({ length }, () => Math.random(36).toString(36)).join('');
}

export function isNotBlank(value) {
    return value !== null && value !== undefined && value !== '';
}

const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

export function validateUuid(uuidString) {
    return uuidRegex.test(uuidString);
}

export function slugifyText(text) {
    return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, '');
}