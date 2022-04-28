if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register(new URL(`service-worker.js`, import.meta.url));
  }