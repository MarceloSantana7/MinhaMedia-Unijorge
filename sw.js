var CACHE_NAME = 'static-v9';

self.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      return cache.addAll([
        '/',
        './index.html',
        './assets/css/style.css',
        './assets/css/bootstrap.min.css',
        './assets/js/script.js',
        './assets/js/storage.js',
        './assets/js/jquery-3.3.1.slim.min.js',
        './assets/js/bootstrap.min.js',
        './assets/js/popper.min.js',
        './assets/img/logosite.png',
        './assets/favicon.ico'
      ]);
    })
  )
});

self.addEventListener('activate', function activator(event) {
  event.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(keys
        .filter(function (key) {
          return key.indexOf(CACHE_NAME) !== 0;
        })
        .map(function (key) {
          return caches.delete(key);
        })
      );
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request).then(function (cachedResponse) {
      return cachedResponse || fetch(event.request);
    })
  );
});