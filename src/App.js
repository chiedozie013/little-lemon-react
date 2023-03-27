import { BrowserRouter as Router } from "react-router-dom";
import { Link } from "react-router-dom";
import React from "react";

function App() {
  return (
    <Router basement="/my-app">
      <div>
        <h1> i am</h1>
        <nav>
          <Link to="/path/to/destination">Click me!</Link>
        </nav>
      </div>
    </Router>
  );
}
export default App;
