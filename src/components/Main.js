import greek from "./images/Greek Salad.png";
// import bruchetta from "./images/Bruchetta.png"
// import lemon from "./images/Lemon Dessert.png"

function Main() {
  return (
    <main>
      <div className="main-heading">
        <h1>This weeks specials!</h1>
        <button className="main-button">Online Menue</button>
      </div>
      <div>
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
      </div>
    </main>
  );
}
export default Main;
