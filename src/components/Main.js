import pic from "./images/firstPic.png";
import greek from "./images/Greek Salad.png";
function Main() {
  return (
    <main>
      <aside>
        <div>
          <h2>Little Lemon</h2>
          <h3>Chicago</h3>
          <p>
            We are family owned Mediterranean resturant, focused on traditional
            recipes served with a modern twist
          </p>
          <button>Reserve a Table</button>
        </div>
        <div>
          <img src={pic} alt="main dish pics" />
        </div>
      </aside>
      <article>
        <h1>This weeks specials!</h1>
        <button>Online Menu</button>
        <div>
          <img src={greek} alt="Greek Salad" />
        </div>
      </article>
    </main>
  );
}
export default Main;
