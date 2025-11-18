// sw.js  →  Service Worker PERFECTO para GitHub Pages
const CACHE_NAME = 'primos-pwa-v3';

const ARCHIVOS = [
  '/',                           
  '/primos-pwa/',                   
  '/primos-pwa/index.html',
  '/primos-pwa/home.html',
  '/primos-pwa/leccion.html',
  '/primos-pwa/preguntas.html',
  '/primos-pwa/manifest.json',
  '/primos-pwa/styles.css',
  '/primos-pwa/script.js',
  '/primos-pwa/data/leccion-primos.json',
  '/primos-pwa/assets/icon-192.png',
  '/primos-pwa/assets/icon-512.png',
  'https://fonts.googleapis.com/css2?family=Fredoka+One&family=Comic+Neue:wght@400;700&display=swap',
  'https://fonts.gstatic.com/s/fredokaone/v21/6dGKp5Nq0B3P5N9Qv93G8Yg.woff2',
  'https://fonts.gstatic.com/s/comicneue/v9/4UaErEJDsxBrkvl0aW9R7w.woff2'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(ARCHIVOS).then(() => self.skipWaiting());
    })
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cache => {
          if (cache !== CACHE_NAME) {
            return caches.delete(cache);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => {
      return response || fetch(e.request);
    }).catch(() => {
      if (e.request.destination === 'document') {
        return caches.match('/primos-pwa/home.html');
      }
    })
  );
});