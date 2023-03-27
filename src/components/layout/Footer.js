import { Link } from "react-router-dom";
import footerLogo from "../../images/logo-vertical-white.png";
import classes from "./Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

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
              <p>tel: 123-456-7890</p>
            </li>
            <li>
              <p>Write us a mail</p>
              <a href="malito:info@little-lemon.com"></a>
            </li>
          </menu>
        </div>
        <div>
          <h5>SOCIAL MEDIA</h5>
          <menu>
            <li>
              <a href="www.facebookcom">
                <FontAwesomeIcon
                  icon={faFacebook}
                  size="2x"
                  style={{ color: "#fff" }}
                />
              </a>
            </li>
            <li>
              <a href="www.twitter.com">
                <FontAwesomeIcon
                  icon={faTwitter}
                  size="2x"
                  style={{ color: "#fff" }}
                />
              </a>
            </li>
            <li>
              <a href="www.instagram.com">
                <FontAwesomeIcon
                  icon={faInstagram}
                  size="2x"
                  style={{ color: "#fff" }}
                />
              </a>
            </li>
          </menu>
        </div>
      </div>
    </footer>
  );
}
