// Minimal Service Worker - pass-through
self.addEventListener('install', (event) => {
  self.skipWaiting();
});
self.addEventListener('activate', (event) => {
  event.waitUntil(clients.claim());
});
self.addEventListener('fetch', (event) => {
  // Default: network first
  event.respondWith(fetch(event.request).catch(() => caches.match(event.request)));
});
