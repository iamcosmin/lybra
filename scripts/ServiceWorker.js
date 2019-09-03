const PRECACHE = 'Lybra 1.1 release';
const RUNTIME = 'Runtime 1.1 release';
const PRECACHE_URLS = [
  '/index.html',
  '/stylesheets/basic.css',
  '/stylesheets/light.css',
  '/stylesheets/dark.css',
  '/stylesheets/fonts.css',
  '/fonts/Bold.ttf',
  '/fonts/BoldItalic.ttf',
  '/fonts/Italic.ttf',
  '/fonts/Medium.ttf',
  '/fonts/MediumItalic.ttf',
  '/fonts/Regular.ttf',
];
// The install handler takes care of precaching the resources we always need.
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(PRECACHE)
      .then(cache => cache.addAll(PRECACHE_URLS))
      .then(self.skipWaiting())
  );
});
// The activate handler takes care of cleaning up old caches.
self.addEventListener('activate', event => {
  const currentCaches = [PRECACHE, RUNTIME];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return cacheNames.filter(cacheName => !currentCaches.includes(cacheName));
    }).then(cachesToDelete => {
      return Promise.all(cachesToDelete.map(cacheToDelete => {
        return caches.delete(cacheToDelete);
      }));
    }).then(() => self.clients.claim())
  );
});
self.addEventListener('fetch', event => {
  if (event.request.url.startsWith(self.location.origin)) {
    event.respondWith(
      caches.match(event.request).then(cachedResponse => {
        if (cachedResponse) {
          return cachedResponse;
        }
        return caches.open(RUNTIME).then(cache => {
          return fetch(event.request).then(response => {
            return cache.put(event.request, response.clone()).then(() => {
              return response;
            });
          });
        });
      })
    );
  }
});
