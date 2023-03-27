import { Link } from "react-router-dom";
import Logo from "../../images/Logo.png";
import classes from "./Header.module.css";

function Header() {
  return (
    <header className={classes.header}>
      <div className={`fluidContainer ${classes.headerContainer}`}>
        <div className={classes.logo}>
          <img src={Logo} alt="Logo" />
        </div>
        <nav className={classes.mainNavigation}>
          <menu>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/">About</Link>
            </li>
            <li>
              <Link to="/">Menu</Link>
            </li>
            <li>
              <Link to="/">Reservations</Link>
            </li>
            <li>
              <Link to="/">Order Online</Link>
            </li>
            <li>
              <Link to="/">Login</Link>
            </li>
          </menu>
        </nav>
      </div>
    </header>
  );
}
export default Header;
