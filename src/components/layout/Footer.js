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
        <div>
          <h5>CONTACTt</h5>
          <menu>
            <li>
              <p>No 35 Jamaica steet, New York, USA</p>
            </li>
            <li>
              <p>Give us a call</p>
              <a>tel: 123-456-7890</a>
            </li>
            <li>
              <p>Write us a mail</p>
              <a href="malito:info@little-lemon.com"></a>
            </li>
            <div>
              <h5>SOCIAL MEDIA</h5>
            </div>
          </menu>
        </div>
        <Link className={classes.footer}>Home</Link>;
      </div>
    </footer>
  );
}
