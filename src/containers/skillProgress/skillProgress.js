import React from "react";
import "./Progress.scss";
import {illustration, techStack} from "../../portfolio";
import {Fade} from "react-reveal";
import Build from "../../assets/lottie/build";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";

export default function StackProgress() {
  if (techStack.viewSkillBars) {
    return (
      <Fade bottom duration={1000} distance="20px">
        <div className="skills-container">
          <div className="skills-bar">
            <span className="section-stage">Chapter 05 · Skills</span>
            <h1 className="section-heading">Proficiency</h1>
            {techStack.experience.map((exp, i) => {
              const progressStyle = {
                width: exp.progressPercentage
              };
              return (
                <div key={i} className="skill">
                  <div className="skill-header">
                    <p className="skill-title">{exp.Stack}</p>
                    <span className="skill-value">{exp.progressPercentage}</span>
                  </div>
                  <div className="meter">
                    <span style={progressStyle}></span>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="skills-image">
            <div className="skills-progress-visual">
              {illustration.animated ? (
                <DisplayLottie animationData={Build} />
              ) : (
                <img
                  alt="Skills"
                  src={require("../../assets/images/skill.svg")}
                />
              )}
            </div>
          </div>
        </div>
      </Fade>
    );
  }
  return null;
}
