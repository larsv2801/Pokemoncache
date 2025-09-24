self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('v2').then((cache) => {
      return cache.addAll([
        '/Pokemoncache/index.html',
        '/Pokemoncache/manifest.json',
        '/Pokemoncache/black.png',
        '/Pokemoncache/geel.png',
        '/Pokemoncache/satellite.png',
        '/Pokemoncache/standard.png',
        '/Pokemoncache/voyager.png',
        '/Pokemoncache/white.png'
      ]);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
