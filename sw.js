const CACHE = 'pwa-mates-v1';

const archivos = [
  '/',
  '/pwa-mates-primos/',
  '/pwa-mates-primos/index.html',
  '/pwa-mates-primos/home.html',
  '/pwa-mates-primos/leccion.html',
  '/pwa-mates-primos/preguntas.html',
  '/pwa-mates-primos/styles.css',
  '/pwa-mates-primos/script.js',
  '/pwa-mates-primos/manifest.json',
  '/pwa-mates-primos/data/leccion-primos.json',
  '/pwa-mates-primos/assets/icon-192.png',
  '/pwa-mates-primos/assets/icon-512.png'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(cache => cache.addAll(archivos))
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(resp => resp || fetch(e.request))
  );
});