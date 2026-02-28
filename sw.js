// sw.js
// This minimal service worker is required by Android/Chrome to trigger the Install Prompt.

self.addEventListener('install', (e) => {
    self.skipWaiting();
});

self.addEventListener('activate', (e) => {
    return self.clients.claim();
});

// The fetch handler is mandatory for the PWA install criteria
self.addEventListener('fetch', (e) => {
    // We are not caching anything offline yet, just passing requests through
    e.respondWith(fetch(e.request).catch(() => new Response("Network error.")));
});
