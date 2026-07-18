(function () {
    const STORAGE_KEY = 'norwayExplorerCtaClicks';
    const MAX_EVENTS = 200;

    function hidePageLoader() {
        const loader = document.getElementById('page-loader');
        if (!loader) return;
        loader.classList.add('is-hidden');
        document.body.classList.remove('is-loading');
        setTimeout(() => {
            if (loader && loader.parentNode) {
                loader.parentNode.removeChild(loader);
            }
        }, 420);
    }

    function setupPageLoader() {
        window.addEventListener('load', hidePageLoader, { once: true });
        setTimeout(hidePageLoader, 2200);
    }

    function appendEvent(payload) {
        try {
            const existingRaw = localStorage.getItem(STORAGE_KEY);
            const events = existingRaw ? JSON.parse(existingRaw) : [];
            if (!Array.isArray(events)) return;
            events.push(payload);
            while (events.length > MAX_EVENTS) events.shift();
            localStorage.setItem(STORAGE_KEY, JSON.stringify(events));
        } catch (_error) {
            // Ignore storage issues.
        }
    }

    function currentLang() {
        try {
            return localStorage.getItem('norwayExplorerLang') === 'en' ? 'en' : 'bg';
        } catch (_error) {
            return 'bg';
        }
    }

    function setupCtaAnalytics() {
        const prefetched = new Set();

        function prefetchHref(href) {
            if (!href || prefetched.has(href)) return;
            prefetched.add(href);
            const link = document.createElement('link');
            link.rel = 'prefetch';
            link.href = href;
            link.as = 'document';
            document.head.appendChild(link);
        }

        document.querySelectorAll('.cta-link').forEach((link) => {
            link.addEventListener('mouseenter', () => prefetchHref(link.href), { passive: true });
            link.addEventListener('focus', () => prefetchHref(link.href), { passive: true });
            link.addEventListener('click', () => {
                appendEvent({
                    id: link.id || 'unknown-cta',
                    href: link.href || '',
                    lang: currentLang(),
                    ts: Date.now()
                });
            }, { passive: true });
        });
    }

    function registerServiceWorker() {
        if (!('serviceWorker' in navigator)) return;
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('./sw.js').catch(() => {
                // Silently ignore service worker registration failures.
            });
        });
    }

    document.addEventListener('DOMContentLoaded', () => {
        setupPageLoader();
        setupCtaAnalytics();
        registerServiceWorker();
    });
})();
