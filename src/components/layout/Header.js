import { Link } from "react-router-dom";
import { useState } from "react";
import Logo from "../../images/Logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import classes from "./Header.module.css";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prevValue) => !prevValue);
  };

  return (
    <header className={classes.header}>
      <div className={`fluidContainer ${classes.headerContainer}`}>
        <div className={classes.logo}>
          <img src={Logo} alt="Logo" />
        </div>
        <div>
          <nav
            className={`${classes.mainNavigation} ${
              isOpen ? classes.mainNavigationOpen : " "
            }`}
          >
            {!isOpen && (
              <menu>
                <li onClick={toggleMenu}>
                  <Link to="/">Home</Link>
                </li>
                <li onClick={toggleMenu}>
                  <Link to="/">About</Link>
                </li>
                <li onClick={toggleMenu}>
                  <Link to="/">Menu</Link>
                </li>
                <li onClick={toggleMenu}>
                  <Link to="/">Reservations</Link>
                </li>
                <li onClick={toggleMenu}>
                  <Link to="/">Order Online</Link>
                </li>
                <li onClick={toggleMenu}>
                  <Link to="/">Login</Link>
                </li>
              </menu>
            )}
          </nav>

          <button className={classes.toggleButton} onClick={toggleMenu}>
            <FontAwesomeIcon icon={faBars} />
          </button>
        </div>
      </div>
    </header>
  );
}
