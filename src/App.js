import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
// import SmoothScroll from "./components/SmoothScroll";
import HomePage from "./components/home-page/HomePage";
import BookingPage from "./components/reservation-page/ReservationPage";

import React from "react";

function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/Home-Page" index element={<HomePage />} />
        <Route path="/Reservation-Page" element={<BookingPage />} />
      </Routes>
    </Router>
  );
}
export default App;
