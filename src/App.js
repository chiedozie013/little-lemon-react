import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
// import SmoothScroll from "./components/SmoothScroll";
import HomePage from "./components/home-page/HomePage";
import BookingPage from "./components/reservation-page/ReservationPage";
import Register from "./components/sign-up/Register";
import React from "react";

function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/Home-Page" element={<HomePage />} />
        <Route path="/Reservation-Page" element={<BookingPage />} />
        <Route path="/Sign-Up" element={<Register />} />
      </Routes>
    </Router>
  );
}
export default App;
