// import { Link } from "react-router-dom";

import SpecialCards from "./SpecialCards";
import Meal3 from "../../images/Lemon Dessert.png";
import Meal2 from "../../images/Bruchetta.png";
import Meal1 from "../../images/Greek Salad.png";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faOpencart } from "@fortawesome/free-brands-svg-icons";

import classes from "./Specials.module.css";

// a database fetched list of special dishes collected;

const specialsDishes = [
  {
    id: "d1",
    image: Meal1,
    title: "Greek Salad",
    price: 12.99,
    description:
      "The famous greek salad of crispy lettus, peppers, olives and our Chicago style feta cheese garnished with crunchy garlic and rosemary croutons.",
  },
  {
    id: "d2",
    image: Meal2,
    title: "Bruchetta",
    price: 5.89,
    description:
      "Our Bruchetta is made from grilled bread that has ben smeared with garlic and seasoned with salt and olive oil.",
  },
  {
    id: "d3",
    image: Meal3,
    title: "Lemon Dessert",
    price: 6.02,
    description:
      "This comes straight from grandma's recipe book. Every last ingredient has been sourced and is as authentic as can be imagined.",
  },
];

// function specialCards({ image, title, price, description }) {
//   return (
//     <article className={classes.card}>
//       <div
//         className={classes.cardImage}
//         style={{ backgroundImage: `url(${image})` }}
//       ></div>
//       <div className={classes.cardText}>
//         <div className={classes.cardTitle}>
//           <p>{title}</p>
//           <span>${price}</span>
//         </div>
//         <p className={classes.dishDescription}>{description}</p>
//         <div className={classes.order}>
//           <Link to="/">
//             Order a delivery{" "}
//             <span>
//               {" "}
//               <FontAwesomeIcon icon={faOpencart} style={{ color: "black" }} />
//             </span>
//           </Link>
//         </div>
//       </div>
//     </article>
//   );
// }
export default function Specials() {
  return (
    <section className={classes.specialsSection}>
      <div className={`fluidContainer ${classes.specialsContainer}`}>
        <div className={classes.specialsMain}>
          <h2 className="sectionTitle">This week specials!</h2>
          <button>Online Menu</button>
        </div>
        <div className={classes.specialsCatlog}>
          {specialsDishes.map((dish) => (
            <SpecialCards
              key={dish.id}
              image={dish.image}
              title={dish.title}
              price={dish.price}
              description={dish.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
