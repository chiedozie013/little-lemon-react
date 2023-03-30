import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faOpencart } from "@fortawesome/free-brands-svg-icons";

import classes from "./SpecialCards.module.css";

export default function SpecialCards({ image, title, price, description }) {
  return (
    <article>
      <div className={classes.cardImageContainer}>
        <div
          className={classes.cardImage}
          style={{ backgroundImage: `url(${image})` }}
        ></div>
      </div>
      <div>
        <div>
          <h1>{title}</h1>
          <span>${price}</span>
        </div>
        <h1>{description}</h1>
        <div>
          <Link to="/">
            Order a delivery{" "}
            <span>
              {" "}
              <FontAwesomeIcon icon={faOpencart} style={{ color: "black" }} />
            </span>
          </Link>
        </div>
      </div>
    </article>
  );
}
