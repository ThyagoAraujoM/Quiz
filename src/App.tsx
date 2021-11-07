import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/Home";

function App() {
  return (
    <Routes>
      <Route path='/'>
        <Home />
      </Route>
    </Routes>
  );
}

export default App;
