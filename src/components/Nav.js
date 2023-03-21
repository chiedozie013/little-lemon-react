import logo from "./images/Logo.png";

function Nav() {
  return (
    <nav>
      <div>
        <img className="logo" src={logo} alt="Little Lemon Logo" />
      </div>
      <div>
        <ul className="nav-list">
          <li>
            <a href="./Home">Home</a>
          </li>
          <li>
            <a href="./About">About</a>
          </li>
          <li>
            <a href="./Menu">Menu</a>
          </li>
          <li>
            <a href="./Reservation">Reservations</a>
          </li>
          <li>
            <a href="./Order Online">Order Online</a>
          </li>
          <li>
            <a href="./Login">Login</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
