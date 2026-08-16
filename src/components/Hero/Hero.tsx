import "./Hero.css";

import heroLarge from "../../assets/images/hero/hero-large.png";
import heroWide from "../../assets/images/hero/hero-wide.png";
import heroSmallLeft from "../../assets/images/hero/hero-small-left.png";
import heroSmallRight from "../../assets/images/hero/hero-small-right.png";

const heroItems = [
  {
    id: 1,
    image: heroLarge,
    className: "hero-card--large",
  },
  {
    id: 2,
    image: heroWide,
    className: "hero-card--wide",
  },
  {
    id: 3,
    image: heroSmallLeft,
    className: "hero-card--small-left",
  },
  {
    id: 4,
    image: heroSmallRight,
    className: "hero-card--small-right",
  },
];

function Hero() {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-grid">
          {heroItems.map((item) => (
            <article
              key={item.id}
              className={`hero-card ${item.className}`}
            >
              <img
                src={item.image}
                alt="Furniture collection"
                className="hero-card__image"
              />

              <div className="hero-card__content">
                <span>5 Items</span>
                <h2>FURNITURE</h2>
                <a href="#products">Read More</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;