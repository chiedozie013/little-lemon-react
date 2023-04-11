import { Fragment } from "react";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import SignUp from "./SignUp";

export default function Register() {
  return (
    <Fragment>
      <Header />
      <SignUp />
      <Footer />
    </Fragment>
  );
}
