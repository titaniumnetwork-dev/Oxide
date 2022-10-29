import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./index.css";
import App from "./App";
import Docs from "./components/Docs";

const root = ReactDOM.createRoot(document.getElementById("content"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/documentation" element={<Docs />} />
    </Routes>
  </BrowserRouter>
);
