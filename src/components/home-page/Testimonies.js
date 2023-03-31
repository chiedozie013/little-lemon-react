import User1 from "../../images/user1.jpg";
import User2 from "../../images/user2.jpg";
import User3 from "../../images/user3.jpg";
import User4 from "../../images/user4.jpeg";

import classes from "./Testimonies.module.css";
import TestimonyCard from "./TestimonyCard";

// a database fetched list of special dishes collected;

const testimonial = [
  {
    id: "t1",
    image: User1,
    name: "Mark J.",
    stars: 5,
    Review: "I enjoy relaxing at the restaurant with the amazing Lemon Dessert",
  },
  {
    id: "t2",
    image: User2,
    name: "Julian G",
    stars: 4,
    Review:
      "The restaurant has become a second home to me anytime i am in Chicago",
  },
  {
    id: "t3",
    image: User3,
    name: "Fidelia O",
    stars: 5,
    Review: "Your meals always have i and my kids coming everytime..",
  },
  {
    id: "t4",
    image: User4,
    name: "Chukwuemeka U",
    stars: 3.5,
    Review:
      "I love the greek salad and pizza. And you render an excellent service",
  },
];

export default function Testimonies() {
  return (
    <section className={classes.testimoniesSection}>
      <div classNam={`fluidContainer ${classes.testimoniesContainer}`}>
        <h2 className={classes.title}>
          Reviwes from our highly esteemed customers
        </h2>
        <div className={classes.testimonyCard}>
          {testimonial.map((item) => (
            <TestimonyCard
              key={item.id}
              image={item.image}
              name={item.name}
              stars={item.stars}
              review={item.review}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
