import {version, manifest} from '@parcel/service-worker';
// import * as manifest from "../src/manifest.webmanifest"
async function install() {
  const cache = await caches.open(version);
  await cache.addAll(manifest);
}
addEventListener('install', e => e.waitUntil(install()));

async function activate() {
  const keys = await caches.keys();
  await Promise.all(
    keys.map(key => key !== version && caches.delete(key))
  );
}
addEventListener('activate', e => e.waitUntil(activate()));

// const deleteCache = async key => {
//   await caches.delete(key)
// }

// const deleteOldCaches = async () => {
//    const cacheKeepList = [];
//    const keyList = await caches.keys()
//    const cachesToDelete = keyList.filter(key => !cacheKeepList.includes(key))
//    await Promise.all(cachesToDelete.map(deleteCache));
// }

// self.addEventListener('activate', (event) => {
//   event.waitUntil(deleteOldCaches());
// });


// const addResourcesToCache = async (resources) => {
//   const cache = await caches.open(version);
//   await cache.addAll(resources);
// };

const putInCache = async (request, response) => {
  const cache = await caches.open(version);
  await cache.put(request, response);
};

const cacheFirst = async ({ request, preloadResponsePromise, fallbackUrl }) => {
  // First try to get the resource from the cache
  const responseFromCache = await caches.match(request);
  if (responseFromCache) {
    return responseFromCache;
  }

  // Next try to use (and cache) the preloaded response, if it's there
  const preloadResponse = await preloadResponsePromise;
  if (preloadResponse) {
    console.info('using preload response', preloadResponse);
    putInCache(request, preloadResponse.clone());
    return preloadResponse;
  }

  // Next try to get the resource from the network
  try {
    const responseFromNetwork = await fetch(request);
    // response may be used only once
    // we need to save clone to put one copy in cache
    // and serve second one
    putInCache(request, responseFromNetwork.clone());
    return responseFromNetwork;
  } catch (error) {
    const fallbackResponse = await caches.match(fallbackUrl);
    if (fallbackResponse) {
      return fallbackResponse;
    }
    // when even the fallback response is not available,
    // there is nothing we can do, but we must always
    // return a Response object
    return new Response('Network error happened', {
      status: 408,
      headers: { 'Content-Type': 'text/plain' },
    });
  }
};

// Enable navigation preload
const enableNavigationPreload = async () => {
  if (self.registration.navigationPreload) {
    // Enable navigation preloads!
    await self.registration.navigationPreload.enable();
  }
};

self.addEventListener('activate', (event) => {
  event.waitUntil(enableNavigationPreload());
});


self.addEventListener('fetch', (event) => {
  event.respondWith(
    cacheFirst({
      request: event.request,
      preloadResponsePromise: event.preloadResponse,
      fallbackUrl: '/',
    })
  );
});

// const CACHE_NAME = 'network-app-cache';
// const urlsToCache = ['/dist', '/', '*'];
// self.addEventListener('install', (event) => {
//   event.waitUntil(
//     caches.open(CACHE_NAME).then((cache) => {
//       return cache.addAll(urlsToCache);
//     })
//   );
// });

// self.addEventListener('fetch', (event) => {
//   if (event.request && event.request.url && event.request.url.includes('chrome-extension')) {
//     return;
//   }
//   event.respondWith(
//     caches.open(CACHE_NAME).then(async (cache) => {
//       const cachedResponse = await cache.match(event.request);
//       if (cachedResponse) {
//         return cachedResponse;
//       }
//       const networkResponse = await fetch(event.request);
//       event.waitUntil(cache.put(event.request, networkResponse.clone()));
//       return networkResponse;
//     })
//   );
// });

// self.addEventListener('fetch', (event) => {
//   // Check if this is a request for an image
//   if (event.request.destination === 'image') {
//     event.respondWith(
//       caches.open(CACHE_NAME).then(async (cache) => {
//         // Go to the cache first
//         const cachedResponse = await cache.match(event.request.url);
//         // Return a cached response if we have one
//         if (cachedResponse) {
//           return cachedResponse;
//         }
//         const fetchedResponse = await fetch(event.request);
//         // Add the network response to the cache for later visits
//         cache.put(event.request, fetchedResponse.clone());
//         return fetchedResponse;
//       })
//     );
//   } else {
//     return;
//   }
// });

// self.addEventListener('fetch', (event) => {
//   // Check if this is a request for an image
//   if (event.request.destination === '.ico') {
//     event.respondWith(
//       caches.open(CACHE_NAME).then(async (cache) => {
//         // Go to the cache first
//         const cachedResponse = await cache.match(event.request.url);
//         // Return a cached response if we have one
//         if (cachedResponse) {
//           return cachedResponse;
//         }
//         const fetchedResponse = await fetch(event.request);
//         // Add the network response to the cache for later visits
//         cache.put(event.request, fetchedResponse.clone());
//         return fetchedResponse;
//       })
//     );
//   } else {
//     return;
//   }
// });

// self.addEventListener('fetch', (event) => {
//   // Check if this is a request for an image
//   if (event.request.destination === '.png') {
//     event.respondWith(
//       caches.open(CACHE_NAME).then(async (cache) => {
//         // Go to the cache first
//         const cachedResponse = await cache.match(event.request.url);
//         // Return a cached response if we have one
//         if (cachedResponse) {
//           return cachedResponse;
//         }
//         const fetchedResponse = await fetch(event.request);
//         // Add the network response to the cache for later visits
//         cache.put(event.request, fetchedResponse.clone());
//         return fetchedResponse;
//       })
//     );
//   } else {
//     return;
//   }
// });

// self.addEventListener('fetch', (event) => {
//   // Check if this is a request for an image
//   if (event.request.mode === 'navigate') {
//     event.respondWith(
//       caches.open(CACHE_NAME).then(async (cache) => {
//         // Go to the cache first
//         const cachedResponse = await cache.match(event.request.url);
//         // Return a cached response if we have one
//         if (cachedResponse) {
//           return cachedResponse;
//         }
//         const fetchedResponse = await fetch(event.request);
//         // Add the network response to the cache for later visits
//         cache.put(event.request, fetchedResponse.clone());
//         return fetchedResponse;
//       })
//     );
//   } else {
//     return;
//   }
// });

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
