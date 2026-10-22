self.addEventListener('install', (e) => {
  console.log('[Goordaz] Service Worker Instalado');
});

self.addEventListener('fetch', (e) => {
  // Por ahora solo deja pasar las peticiones de red normales
});
