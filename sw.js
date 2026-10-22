
self.addEventListener('install', () => {
    console.log('[Goordaz] Service Worker instalado');
});

self.addEventListener('activate', (event) => {
    event.waitUntil(self.clients.claim());
});

// Estrategia de red para las peticiones GET.
// No almacena datos ni implementa modo sin conexión.
self.addEventListener('fetch', (event) => {
    if (event.request.method !== 'GET') return;

    event.respondWith(fetch(event.request));
});
