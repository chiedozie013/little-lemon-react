import { Fragment } from "react";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import HeroSection from "./HeroSection";
import Specials from "./Specials";
import Testimonies from "./Testimonies";
import AboutUs from "./AboutUs";

export default function HomePage() {
  return (
    <Fragment>
      <Header />
      <HeroSection />
      <Specials />
      <Testimonies />
      <AboutUs />
      <Footer />
    </Fragment>
  );
}
