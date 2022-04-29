import React from "react";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom";

// This is the correct way to render one's react app when using
// react and react-dom v17 with react-router and react-router-dom v6

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