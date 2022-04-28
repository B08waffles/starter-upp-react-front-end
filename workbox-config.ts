// module.exports = {
//     "globDirectory": "dist/",
//     "globPatterns": [
//       "**/*.{html,css,js,webmanifest}"
//     ],
//     "swDest": "dist/service-worker.js",
//     "navigateFallback": "/index.html"
//   }

module.exports = {
  "globDirectory": "build/",
  "globPatterns": [
    "**/*.{png,ico,html,svg,webmanifest,js,css}"
  ],
  "swDest": "build\\service-worker.js",
  skipWaiting: true,
  clientsClaim: true
};