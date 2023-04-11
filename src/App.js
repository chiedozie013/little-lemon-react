import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
// import SmoothScroll from "./components/SmoothScroll";
import HomePage from "./components/home-page/HomePage";
import BookingPage from "./components/reservation-page/ReservationPage";
import SignUpPage from "./components/sign-up/SignUp";
import React from "react";

function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/Home-Page" element={<HomePage />} />
        <Route path="/Reservation-Page" element={<BookingPage />} />
        <Route path="/Sign-Up" element={<SignUpPage />} />
      </Routes>
    </Router>
    // </SmoothScroll>
  );
}
export default App;
