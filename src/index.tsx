import React from "react";
import App from "./App";
//import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom";

// import '../random/registerServiceWorker';

// console.log(`[APP] running in ${process.env.NODE_ENV} mode.`)
// if (process.env.NODE_ENV === 'production') {
//   if ('serviceWorker' in navigator) {
//     window.addEventListener('load', () => {
//       navigator.serviceWorker.register(new URL(`../public/service-worker.js`, import.meta.url))
//       .then(registration => {
//         console.log('[SW] service Worker is registered', registration.scope)
//       })
//       .catch(err => {
//         console.error('[SW] service Worker registration failed:', err)
//       })
//     })
//   }
// }

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<App />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
