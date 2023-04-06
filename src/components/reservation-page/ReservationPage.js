import { Fragment } from "react";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import BookingReservation from "./BookingReservation";

export default function ReservationPage() {
  return (
    <Fragment>
      <Header />
      <BookingReservation />
      <Footer />
    </Fragment>
  );
}
