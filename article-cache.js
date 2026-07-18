(function () {
    const CACHE_PREFIX = 'norwayArticleCache:';
    const CACHE_TTL_MS = 24 * 60 * 60 * 1000;
    const originalFetch = window.fetch.bind(window);

    function isArticleTextRequest(input) {
        const value = typeof input === 'string' ? input : (input && input.url) || '';
        return /assets\/tekst\/.*\.txt(\?|$)/i.test(value);
    }

    function getCacheKey(url) {
        return CACHE_PREFIX + url;
    }

    function readCache(url) {
        try {
            const raw = localStorage.getItem(getCacheKey(url));
            if (!raw) return null;
            const parsed = JSON.parse(raw);
            if (!parsed || typeof parsed.text !== 'string' || typeof parsed.ts !== 'number') return null;
            if (Date.now() - parsed.ts > CACHE_TTL_MS) return null;
            return parsed.text;
        } catch (_error) {
            return null;
        }
    }

    function writeCache(url, text) {
        try {
            localStorage.setItem(getCacheKey(url), JSON.stringify({ text: text, ts: Date.now() }));
        } catch (_error) {
            // Ignore storage quota and private mode issues.
        }
    }

    function textResponse(text) {
        return new Response(text, {
            status: 200,
            headers: { 'Content-Type': 'text/plain; charset=utf-8' }
        });
    }

    window.fetch = async function patchedFetch(input, init) {
        const url = typeof input === 'string' ? input : (input && input.url) || '';

        if (!isArticleTextRequest(input) || (init && init.method && String(init.method).toUpperCase() !== 'GET')) {
            return originalFetch(input, init);
        }

        const cachedText = readCache(url);
        if (cachedText !== null) {
            originalFetch(input, init)
                .then((response) => (response.ok ? response.text() : null))
                .then((text) => {
                    if (typeof text === 'string') writeCache(url, text);
                })
                .catch(() => {
                    // Ignore background refresh failures.
                });
            return textResponse(cachedText);
        }

        const response = await originalFetch(input, init);
        if (response.ok) {
            try {
                const clone = response.clone();
                const text = await clone.text();
                writeCache(url, text);
            } catch (_error) {
                // Ignore clone/text parsing failures.
            }
        }
        return response;
    };
})();
