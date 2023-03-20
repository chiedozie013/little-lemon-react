import logo from "./images/Logo.png";
import { Routes, Route, Link } from "react-router-dom";
function Nav() {
  return (
    <nav>
      <img src={logo} alt="" />
      <Link to="/" className="nav-item">
        Homepage
      </Link>
      <Link to="/about" className="nav-item">
        About
      </Link>
      <Link to="/about" className="nav-item">
        BookingPage
      </Link>
      <ul>
        <li>
          <a>Home</a>
        </li>
        <li>
          <a>About</a>
        </li>
        <li>
          <a>Menu</a>
        </li>
        <li>
          <a>Reservations</a>
        </li>
        <li>
          <a>Order Online</a>
        </li>
        <li>
          <a>Login</a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
