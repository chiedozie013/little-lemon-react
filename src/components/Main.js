import greek from "./images/Greek Salad.png";
import bruchetta from "./images/Bruchetta.png";
// import lemon from "./images/Lemon Dessert.png";

function Main() {
  return (
    <main>
      <div className="main-heading">
        <h1>This weeks specials!</h1>
        <button className="main-button">Online Menue</button>
      </div>
      <div className="menu-main">
        <div className="menu">
          <img src={greek} alt="Greek Salad" />
          <h5>
            Greek Salad <span>$12.99</span>
          </h5>
          <p>
            The famous grook salad of crispy lettuse, pappers, olives and our
            Chicago style feta cheese garnished with crunchy garlic and rosemary
            croutons.
          </p>
          <a href="Order">Order a delivery</a>
        </div>
        <div className="menu">
          <img src={bruchetta} alt="Bruchetta" />
          <h5>
            Bruchetta <span>$5.89</span>
          </h5>
          <p>
            Our Bruchetta is made from grilled bread that has been smeared with
            garlic and seasoned with salt and olive oil.
          </p>
          <a href="Order">Order a delivery</a>
        </div>
        <div className="menu">
          <img src={greek} alt="Greek Salad" />
          <h5>
            Lemon Dessert <span>$5.00</span>
          </h5>
          <p>
            This comes straight from grandma's recipe book, every last
            indredient has been courced and is as authentic as can be imagined.
          </p>
          <a href="Order">Order a delivery</a>
        </div>
      </div>
    </main>
  );
}
export default Main;
