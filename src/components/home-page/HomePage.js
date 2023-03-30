import { Fragment } from "react";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import HeroSection from "./HeroSection";
import Specials from "./Specials";

export default function HomePage() {
  return (
    <Fragment>
      <Header />
      <HeroSection />
      <Specials />
      <Footer />
    </Fragment>
  );
}
