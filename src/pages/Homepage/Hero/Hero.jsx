import Button from "../../../components/Button/Button";

import images from "../../../assets/images";

import "./Hero.styles.css";

const Hero = () => {
  const { heroVector, heroFirst, heroSecond, heroThird } = images;

  return (
    <section className="home fc">
      <div className="hero__texts">
        <h2>A diet plan made with care only for you</h2>
        <p style={{ color: "#DEEDFF" }}>
          We always want to stay fit and healthy and we should be as it is a key
          part in solving the puzzle of living a happy life. Taking an adequate
          diet can be consider a major factor for achieving this.
        </p>
        <div className="fc hero__buttons">
          <Button text="Get Started" link="/recommend" />
          <Button
            link={"/requests"}
            text="View Requests"
            style={{
              backgroundColor: "transparent",
              border: "1px solid #BCDCFF",
              color: "var(--secondary-bg-color)",
            }}
          />
        </div>
      </div>
      <div className="home__hero-imgs fc">
        <img src={heroVector} alt="" />
        <img src={heroFirst} alt="" />
        <img src={heroSecond} alt="" />
        <img src={heroThird} alt="" />
      </div>
    </section>
  );
};

export default Hero;
