import { Link } from "react-router-dom";
import footerLogo from "../../images/logo-vertical-white.png";
import classes from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={classes.footer}>
      <div className={`fluidContainer ${classes.footerContainer}`}>
        <div className={classes.footerLogo}>
          <img src={footerLogo} alt="Footer-Logo" />
        </div>
        <Link className={classes.footer}>Home</Link>;
      </div>
    </footer>
  );
}
