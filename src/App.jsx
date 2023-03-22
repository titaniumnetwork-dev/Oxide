import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Index";
import Setup from "./pages/Setup";
import Services from "./pages/Services";
import Socials from "./pages/Socials";
import Panel from "./pages/Panel";

function App() {
  return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/setup" element={<Setup />} />
      <Route path="/services" element={<Services />} />
      <Route path="/socials" element={<Socials />} />
      <Route path="/panel" element={<Panel />} />
    </Routes>
  </BrowserRouter>
  )
}

export default App;