import { Fragment } from "react";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import HeroSection from "./HeroSection";
export default function HomePage() {
  return (
    <Fragment>
      <Header />
      <HeroSection />
      <Footer />
    </Fragment>
  );
}
