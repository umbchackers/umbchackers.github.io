import React from "react";
import { Route, Routes } from "react-router-dom";

import { Home } from "./pages/Home.js";
import { Privacy } from "./pages/Privacy.js";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/privacy" element={<Privacy />} />
    </Routes>
  );
}

export default App;
