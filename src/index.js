import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./index.css";
import App from "./App";
import Docs from "./components/docs/Docs";
import Setup from "./components/docs/Setup";
import Services from "./components/docs/Services"
import Configuration from "./components/docs/Configuration"

const root = ReactDOM.createRoot(document.getElementById("content"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/documentation" element={<Docs />} />
      <Route path="/setup" element={<Setup />} />
      <Route path="/services" element={<Services />} />
      <Route path="/configuration" element={<Configuration />} />
    </Routes>
  </BrowserRouter>
);
