import { Fragment, useEffect } from "react";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import SmoothScroll from "../SmoothScroll";
import ToTopButton from "../../ui/ToTopButton";
import Alert from "../../ui/Alert";

export default function MenuPage() {
  useEffect(() => {
    document.title = "Menu Page | Little Lemon";
  }, []);
  return (
    <SmoothScroll>
      <Fragment>
        <Header />
        <Footer />
        <ToTopButton />
        <Alert />
      </Fragment>
    </SmoothScroll>
  );
}
