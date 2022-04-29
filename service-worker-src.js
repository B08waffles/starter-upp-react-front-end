importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js');
// import {registerRoute} from 'workbox-routing';
// import {CacheFirst} from 'workbox-strategies';
// import {CacheableResponsePlugin} from 'workbox-cacheable-response';

// registerRoute(
//   ({url}) =>
//     url.origin === 'http://localhost:8000/' &&
//     url.pathname.startsWith('/users/'),
//   new CacheFirst({
//     cacheName: 'users-cache',
//     plugins: [
//       new CacheableResponsePlugin({
//         statuses: [0, 200],
//       }),
//     ],
//   })
// );

self.__WB_MANIFEST;
workbox.skipWaiting();
workbox.clientsClaim();

// cache name
workbox.core.setCacheNameDetails({
  prefix: 'My-awesome-cache',
  precache: 'precache',
  runtime: 'runtime',
});

// runtime cache
// 1. stylesheet
workbox.routing.registerRoute(
  new RegExp('.css$'),
  workbox.strategies.cacheFirst({
    cacheName: 'My-awesome-cache-Stylesheets',
    plugins: [
      new workbox.expiration.Plugin({
        maxAgeSeconds: 60 * 60 * 24 * 7, // cache for one week
        maxEntries: 20, // only cache 20 request
        purgeOnQuotaError: true,
      }),
    ],
  })
);
// 2. images
workbox.routing.registerRoute(
  new RegExp('.(png|svg|jpg|jpeg)$'),
  workbox.strategies.cacheFirst({
    cacheName: 'My-awesome-cache-Images',
    plugins: [
      new workbox.expiration.Plugin({
        maxAgeSeconds: 60 * 60 * 24 * 7,
        maxEntries: 50,
        purgeOnQuotaError: true,
      }),
    ],
  })
);

// 3. cache news articles result
workbox.routing.registerRoute(
  new RegExp('http://localhost:8000/transactions/'),
  workbox.strategies.staleWhileRevalidate({
    cacheName: 'My-awesome-cache-django-backend',
    cacheExpiration: {
      maxAgeSeconds: 60 * 30, //cache the news content for 30mn
    },
  })
);
//cache js
workbox.routing.registerRoute(
  new RegExp('.js$'),
  workbox.strategies.cacheFirst({
    cacheName: 'My-awesome-cache-JS',
    plugins: [
      new workbox.expiration.Plugin({
        maxAgeSeconds: 60 * 60 * 24 * 7, // cache for one week
        maxEntries: 20, // only cache 20 request
        purgeOnQuotaError: true,
      }),
    ],
  })
);

function matchFunction({url}) {
  const pages = [
    '/',
    '/alltransactions',
    '/allusers',
    '/allcompanies',
    '/addcompany',
    '/login',
    '/register',
    '/signup',
    '/addtransaction',
    '/settings',
    '/http://localhost:3000',
    'http://localhost:3000/'
  ];
  return pages.includes(url.pathname);
}

workbox.routing.registerRoute(
  matchFunction,
  new workbox.strategies.CacheFirst({
    cacheName: 'html-cache',
  })
);

workbox.precaching.precacheAndRoute([]);
