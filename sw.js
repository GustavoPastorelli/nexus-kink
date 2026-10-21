const CACHE_NAME = 'nexus-app-v2026-ota';

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(clients.claim());
});

self.addEventListener('fetch', (event) => {
  // Sempre busca a versão mais recente (OTA Live Update) com fallback offline
  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request))
  );
});
