import React, {useContext} from "react";
import "./Skills.scss";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import {illustration, skillsSection} from "../../portfolio";
import {Fade} from "react-reveal";
import codingPerson from "../../assets/lottie/codingPerson";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import StyleContext from "../../contexts/StyleContext";

export default function Skills() {
  const {isDark} = useContext(StyleContext);
  if (!skillsSection.display) {
    return null;
  }
  return (
    <div className={isDark ? "dark-mode main skills-section" : "main skills-section"} id="skills">
      <div className="skills-main-div">
        <Fade left duration={1000}>
          <div className="skills-image-div">
            <div className="skills-visual" aria-hidden="true" />
            {illustration.animated ? (
              <DisplayLottie animationData={codingPerson} />
            ) : (
              <img
                alt="Man Working"
                src={require("../../assets/images/developerActivity.svg")}
              ></img>
            )}
          </div>
        </Fade>
        <Fade right duration={1000}>
          <div className="skills-text-div">
            <h1
              className={isDark ? "dark-mode skills-heading" : "skills-heading"}
            >
              {skillsSection.title}{" "}
            </h1>
            <p
              className={
                isDark
                  ? "dark-mode subTitle skills-text-subtitle"
                  : "subTitle skills-text-subtitle"
              }
            >
              {skillsSection.subTitle}
            </p>
            <div className="skills-chip-grid">
              <SoftwareSkill />
            </div>
            <div className="skills-story">
              {skillsSection.skills.map((skills, i) => {
                return (
                  <div
                    key={i}
                    className={
                      isDark
                        ? "skills-story-item dark-mode"
                        : "skills-story-item"
                    }
                  >
                    <span className="skills-story-index">{String(i + 1).padStart(2, "0")}</span>
                    <p className="skills-text">{skills}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
}
