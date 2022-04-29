// This is where the magic happens, let me explain
// So parcel generates its own service worker which is useless as we can't customise it
// therefore before we run `npm run build` we must make sure to comment out the line here
// "swSrc": "service-worker-src.js", as this conflicts with parcel's way of things, however,
// after that, we uncomment out that line and then run `npm run workbox2` which you can read more about
// in package.json under "Scripts", when we run that command we replace parcels silly service worker
// with our own one that we defined in src/service-worker-src.js

module.exports = {
  globDirectory: 'dist/',
  globPatterns: ['**/*.{html,css,js,webmanifest,png,ico,json}'],
  swSrc: 'service-worker-src.js',
  swDest: 'dist/service-worker.js',
};

// the old version is below, it didn't work out so well
// module.exports = {
//   "globDirectory": "dist/",
//   "globPatterns": [
//     "**/*.{html,png,ico,svg,webmanifest,js,css,json}"
//   ],
//   "swDest": "dist/service-worker.js",
//   "swSrc": "service-worker-src.js",
//   skipWaiting: false,
//   clientsClaim: true,
//   "navigateFallback": "/index.html"
// };
