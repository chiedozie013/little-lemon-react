import { Fragment } from "react";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import HeroSection from "./HeroSection";
import Specials from "./Specials";
import Testimonies from "./Testimonies";

export default function HomePage() {
  return (
    <Fragment>
      <Header />
      <HeroSection />
      <Specials />
      <Testimonies />
      <Footer />
    </Fragment>
  );
}
