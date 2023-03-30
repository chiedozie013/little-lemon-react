import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faOpencart } from "@fortawesome/free-brands-svg-icons";

import classes from "./Specials.module.css";

export default function SpecialCards({ image, title, price, description }) {
  return (
    <article>
      <div style={{ backgroundImage: `url(${image})` }}></div>
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
