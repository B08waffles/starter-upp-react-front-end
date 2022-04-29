const CACHE_NAME = 'network-app-cache';
const urlsToCache = [
  '/dist',
  '/',
  '*',

];
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        return cache.addAll(urlsToCache);
      }),
  );
});


self.addEventListener('fetch', (event) => {
  if (event.request && event.request.url && event.request.url.includes('chrome-extension')) {
    return;
  }
  event.respondWith(
    caches.open(CACHE_NAME).then(async (cache) => {
      const cachedResponse = await cache.match(event.request);
      if (cachedResponse) {
        return cachedResponse;
      }
      const networkResponse = await fetch(event.request);
      event.waitUntil(
        cache.put(event.request, networkResponse.clone()));
      return networkResponse;
    })
  );
});

self.addEventListener('fetch', (event) => {
  // Check if this is a request for an image
  if (event.request.destination === 'image') {
    event.respondWith(caches.open(CACHE_NAME).then(async (cache) => {
      // Go to the cache first
      const cachedResponse = await cache.match(event.request.url);
      // Return a cached response if we have one
      if (cachedResponse) {
        return cachedResponse;
      }
      const fetchedResponse = await fetch(event.request);
      // Add the network response to the cache for later visits
      cache.put(event.request, fetchedResponse.clone());
      return fetchedResponse;
    }));
  } else {
    return;
  }
});

self.addEventListener('fetch', (event) => {
  // Check if this is a request for an image
  if (event.request.destination === '.ico') {
    event.respondWith(caches.open(CACHE_NAME).then(async (cache) => {
      // Go to the cache first
      const cachedResponse = await cache.match(event.request.url);
      // Return a cached response if we have one
      if (cachedResponse) {
        return cachedResponse;
      }
      const fetchedResponse = await fetch(event.request);
      // Add the network response to the cache for later visits
      cache.put(event.request, fetchedResponse.clone());
      return fetchedResponse;
    }));
  } else {
    return;
  }
});

self.addEventListener('fetch', (event) => {
  // Check if this is a request for an image
  if (event.request.destination === '.png') {
    event.respondWith(caches.open(CACHE_NAME).then(async (cache) => {
      // Go to the cache first
      const cachedResponse = await cache.match(event.request.url);
      // Return a cached response if we have one
      if (cachedResponse) {
        return cachedResponse;
      }
      const fetchedResponse = await fetch(event.request);
      // Add the network response to the cache for later visits
      cache.put(event.request, fetchedResponse.clone());
      return fetchedResponse;
    }));
  } else {
    return;
  }
});

self.addEventListener('fetch', (event) => {
  // Check if this is a request for an image
  if (event.request.mode === 'navigate') {
    event.respondWith(caches.open(CACHE_NAME).then(async (cache) => {
      // Go to the cache first
      const cachedResponse = await cache.match(event.request.url);
      // Return a cached response if we have one
      if (cachedResponse) {
        return cachedResponse;
      }
      const fetchedResponse = await fetch(event.request);
      // Add the network response to the cache for later visits
      cache.put(event.request, fetchedResponse.clone());
      return fetchedResponse;
    }));
  } else {
    return;
  }
});

// self.addEventListener('fetch', (event) => {
//   // Check if this is a navigation request
//   if (event.request.mode === 'navigate') {
//     // Open the cache
//     event.respondWith(caches.open(CACHE_NAME).then(async (cache) => {
//       // Go to the network first
//       try {
//         const fetchedResponse = await fetch(event.request.url);
//         cache.put(event.request, fetchedResponse.clone());
//         return fetchedResponse;
//       } catch {
//         return await cache.match(event.request.url);
//       }
//     }));
//   } else {
//     return;
//   }
// });

// self.addEventListener('fetch', (event) => {
//   // Check if this is a navigation request
//   if (event.request.destination === 'image') {
//     // Open the cache
//     event.respondWith(caches.open(CACHE_NAME).then(async (cache) => {
//       // Go to the network first
//       try {
//         const fetchedResponse = await fetch(event.request.url);
//         cache.put(event.request, fetchedResponse.clone());
//         return fetchedResponse;
//       } catch {
//         return await cache.match(event.request.url);
//       }
//     }));
//   } else {
//     return;
//   }
// });


// importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.1.0/workbox-sw.js');
// workbox.precaching.precacheAndRoute([]);
// if (workbox) {
//   workbox.routing.registerRoute(
//     /\.(?:js|css|html|.png)$/,
//     workbox.strategies.staleWhileRevalidate({
//       cacheName: 'static-resources',
//     }),
//   );
// } else {
//   console.log(`☹️ Workbox didn't load`);
// }