import React from "react";
import { Routes, Route } from "react-router-dom";

import { Home } from "./pages";

import { Made } from "./components";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Made />
    </>
  );
}

export default App;
