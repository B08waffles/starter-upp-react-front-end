module.exports = {
    "globDirectory": "dist/",
    "globPatterns": [
      "**/*.{html,css,js,webmanifest,png,ico,json}"
    ],
    "swSrc": "service-worker-src.js",
    "swDest": "dist/service-worker.js",
    //"navigateFallback": "/index.html"
  }

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


