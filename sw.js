const CACHE_VERSION = 'norway-v1';
const STATIC_CACHE = `static-${CACHE_VERSION}`;
const IMAGE_CACHE = `images-${CACHE_VERSION}`;
const TEXT_CACHE = `texts-${CACHE_VERSION}`;

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(STATIC_CACHE).then((cache) =>
            cache.addAll([
                './',
                './index.html',
                './style.css',
                './script.min.js',
                './article-cache.js',
                './cta-analytics.js',
                './favicon.svg'
            ])
        )
    );
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((keys) =>
            Promise.all(
                keys
                    .filter((key) => ![STATIC_CACHE, IMAGE_CACHE, TEXT_CACHE].includes(key))
                    .map((key) => caches.delete(key))
            )
        )
    );
    self.clients.claim();
});

async function staleWhileRevalidate(request, cacheName) {
    const cache = await caches.open(cacheName);
    const cached = await cache.match(request);

    const networkPromise = fetch(request)
        .then((response) => {
            if (response && response.ok) {
                cache.put(request, response.clone());
            }
            return response;
        })
        .catch(() => null);

    return cached || networkPromise || Response.error();
}

async function cacheFirst(request, cacheName) {
    const cache = await caches.open(cacheName);
    const cached = await cache.match(request);
    if (cached) return cached;

    const response = await fetch(request);
    if (response && response.ok) {
        cache.put(request, response.clone());
    }
    return response;
}

self.addEventListener('fetch', (event) => {
    const request = event.request;
    if (request.method !== 'GET') return;

    const url = new URL(request.url);

    if (/\/assets\/tekst\/.*\.txt$/i.test(url.pathname)) {
        event.respondWith(staleWhileRevalidate(request, TEXT_CACHE));
        return;
    }

    if (request.destination === 'image') {
        event.respondWith(cacheFirst(request, IMAGE_CACHE));
        return;
    }

    if (request.destination === 'document' || request.destination === 'script' || request.destination === 'style') {
        event.respondWith(staleWhileRevalidate(request, STATIC_CACHE));
    }
});
