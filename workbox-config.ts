// module.exports = {
//     "globDirectory": "dist/",
//     "globPatterns": [
//       "**/*.{html,css,js,webmanifest}"
//     ],
//     "swDest": "dist/service-worker.js",
//     "navigateFallback": "/index.html"
//   }

module.exports = {
  "globDirectory": "dist/",
  "globPatterns": [
    "**/*.{html,png,ico,svg,webmanifest,js,css}"
  ],
  "swDest": "dist/service-worker.js",
  skipWaiting: true,
  clientsClaim: true,
  "navigateFallback": "/index.html"
};