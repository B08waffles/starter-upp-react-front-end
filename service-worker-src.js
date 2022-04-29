if ('function' === typeof importScripts) {
    importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js');

    // Workbox loaded
    if (workbox) {
        if (self && self.location && self.location.hostname === 'localhost') {
            console.log('Localhost detected. Running Workbox in debug mode!');
            workbox.setConfig({ debug: true });
        }

workbox.precaching.precacheAndRoute(self.__WB_MANIFEST);
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

// 3. cache transactions (although this isn't setup to do so just yet)
workbox.routing.registerRoute(
  new RegExp('http://localhost:8000/transactions/'),
  workbox.strategies.staleWhileRevalidate({
    cacheName: 'My-awesome-cache-django-backend-users',
    cacheExpiration: {
      maxAgeSeconds: 60 * 30, //cache the content for 30mn
    },
  })
);
// 3. cache companys (although this isn't setup to do so just yet)
workbox.routing.registerRoute(
    new RegExp('http://localhost:8000/comapnys/'),
    workbox.strategies.staleWhileRevalidate({
      cacheName: 'My-awesome-cache-django-backend-users',
      cacheExpiration: {
        maxAgeSeconds: 60 * 30, //cache the content for 30mn
      },
    })
  );

// 3. cache users (although this isn't setup to do so just yet)
workbox.routing.registerRoute(
    new RegExp('http://localhost:8000/users/'),
    workbox.strategies.staleWhileRevalidate({
      cacheName: 'My-awesome-cache-django-backend-users',
      cacheExpiration: {
        maxAgeSeconds: 60 * 30, //cache the content for 30mn
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

// cache html (although this isn't realistic as this is a single page application)
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

workbox.precaching.precacheAndRoute([])}}
