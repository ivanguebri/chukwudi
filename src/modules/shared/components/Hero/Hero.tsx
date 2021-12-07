import "./Hero.css";

import heroImage from "../../../../assets/images/hero-image.png";
import heroEmoji from "../../../../assets/images/hero-emoji.png";
import RigthArrow from "../RightArrow";

const Hero = () => (
  <section className="hero-section">
    <div className="hero-image-container">
      <img src={heroImage} alt="A person seated" />
    </div>
    <div className="hero-content">
      <span className="hero-content-text-big">
        $0 delivery for 30 days! <img src={heroEmoji} alt="Party emoji" />
      </span>
      <span className="hero-content-text-small">
        $0 delivery fee for orders over $10 for 30 days
      </span>
    </div>
    <div className="hero-prompt">
      <a className="hero-prompt-link" href="#">
        Learn more <RigthArrow className="hero-prompt-arrow" fill="#f96932" />
      </a>
    </div>
  </section>
);

export default Hero;
