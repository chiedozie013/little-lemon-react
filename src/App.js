import { BrowserRouter as Router } from "react-router-dom";
// import { Routes, Route } from "react-router-dom";
import HomePage from "./components/home-page/HomePage";
import React from "react";

function App() {
  return (
    <Router>
      <HomePage />
    </Router>
  );
}
export default App;
