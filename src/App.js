import { BrowserRouter as Router } from "react-router-dom";
// import { Routes, Route } from "react-router-dom";
import React from "react";

import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <Router>
      <Header />
      <Footer />
    </Router>
  );
}
export default App;
