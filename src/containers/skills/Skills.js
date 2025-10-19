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

  const stageClass = isDark ? "dark-mode" : "";

  return (
    <div className={`main stage about-section ${stageClass}`} id="skills">
      <div className="skills-main-div">
        <Fade left duration={1000}>
          <div className="skills-image-div">
            <div className="skills-visual">
              {illustration.animated ? (
                <DisplayLottie animationData={codingPerson} />
              ) : (
                <img
                  alt="Man Working"
                  src={require("../../assets/images/developerActivity.svg")}
                ></img>
              )}
            </div>
          </div>
        </Fade>
        <Fade right duration={1000}>
          <div className="skills-text-div">
            <span className="section-stage">Chapter 02 · About</span>
            <h1 className="section-heading skills-heading">{skillsSection.title}</h1>
            <p className="subTitle skills-text-subtitle">{skillsSection.subTitle}</p>
            <SoftwareSkill />
            <div className="skills-text-grid">
              {skillsSection.skills.map((skill, index) => (
                <div key={index} className="skills-point">
                  <span className="skills-point-index">0{index + 1}</span>
                  <p className="skills-text">{skill}</p>
                </div>
              ))}
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
}
