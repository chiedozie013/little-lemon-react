import header from "./images/firstPic.png";

function Header() {
  return (
    <header>
      <div className="header">
        <div className="header-sec">
          <h1>Little Lemon</h1>
          <h3 className="header-col">Chicago</h3>
          <p className="header-col">
            we are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
          <button className="header-button">Reserve a Table</button>
        </div>
      </div>
      <img className="header-photo" src={header} alt="desserts" />
    </header>
  );
}
export default Header;
