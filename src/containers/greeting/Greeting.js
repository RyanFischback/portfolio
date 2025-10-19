import React, {useContext} from "react";
import {Fade} from "react-reveal";
import emoji from "react-easy-emoji";
import "./Greeting.scss";
import landingPerson from "../../assets/lottie/landingPerson";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import {illustration, greeting} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

export default function Greeting() {
  const {isDark} = useContext(StyleContext);
  if (!greeting.displayGreeting) {
    return null;
  }
  return (
    <Fade bottom duration={1000} distance="40px">
      <div className="greet-main hero-section" id="greeting">
        <div className="hero-orbit" aria-hidden="true" />
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div className="hero-copy">
              <p className="hero-kicker">{emoji("🚀")}&nbsp;Featured Engineer</p>
              <h1
                className={isDark ? "dark-mode greeting-text" : "greeting-text"}
              >
                <span className="hero-highlight">{greeting.title}</span>
                <span className="wave-emoji">{emoji("👋")}</span>
              </h1>
              <p
                className={
                  isDark
                    ? "dark-mode greeting-text-p"
                    : "greeting-text-p subTitle"
                }
              >
                {greeting.subTitle}
              </p>
              <div className="hero-social">
                <SocialMedia />
              </div>
              <div className="button-greeting-div">
                <Button text="Contact me" href="#contact" />
                {greeting.resumeLink && (
                  <a
                    href="https://docs.google.com/document/d/1GXTi_5XO-QIUHuOUQIyBSOLa8HfsL6oJ9xW3P5ysDuI/export?format=pdf"
                    className="download-link-button"
                  >
                    <Button text="Download my resume" />
                  </a>
                )}
              </div>
            </div>
          </div>
          <div className="greeting-image-div">
            <div className="hero-visual">
              <div className="hero-gradient" aria-hidden="true" />
              {illustration.animated ? (
                <DisplayLottie animationData={landingPerson} />
              ) : (
                <img
                  alt="man sitting on table"
                  src={require("../../assets/images/manOnTable.svg")}
                ></img>
              )}
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
}
