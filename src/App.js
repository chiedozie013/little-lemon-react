import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/home-page/HomePage";
import ReservationPage from "./components/reservation-page/ReservationPage";
import React from "react";

function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/Reservation-Page" element={<ReservationPage />} />
      </Routes>
    </Router>
  );
}
export default App;
