import React, {useContext} from "react";
import {Fade} from "react-reveal";
import emoji from "react-easy-emoji";
import "./Greeting.scss";
import landingPerson from "../../assets/lottie/landingPerson";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import {illustration, greeting, skillsSection} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

export default function Greeting() {
  const {isDark} = useContext(StyleContext);
  if (!greeting.displayGreeting) {
    return null;
  }

  const heroHighlights = (skillsSection?.skills || []).slice(0, 3);

  return (
    <Fade bottom duration={1000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div className="hero-content">
              <span className="section-stage">Chapter 01 · Hero</span>
              <h1
                className={isDark ? "dark-mode greeting-text" : "greeting-text"}
              >
                {greeting.title} <span className="wave-emoji">{emoji("👋")}</span>
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
              <div className="hero-actions">
                <SocialMedia />
                <div className="button-greeting-div">
                  <Button text="Contact me" href="#contact" />
                  {greeting.resumeLink && (
                    <a
                      href={greeting.resumeLink}
                      className="download-link-button"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button text="Download my resume" />
                    </a>
                  )}
                </div>
              </div>
              {heroHighlights.length > 0 && (
                <div className="hero-highlight-grid">
                  {heroHighlights.map((item, index) => (
                    <div key={index} className="hero-highlight-card">
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
          <div className="greeting-image-div">
            <div className="hero-visual">
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
