import React from "react";
import Header from "./components/Header.js";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Nav from "./components/Nav";

import "./App.css";

function App() {
  return (
    <>
      <Nav />
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default App;
