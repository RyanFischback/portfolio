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
        <div className="skills-container proficiency-section">
          <div className="skills-bar">
            <h1 className="skills-heading">Proficiency</h1>
            <p className="skills-progress-subtitle">
              A quick snapshot of where I devote most of my craft.
            </p>
            {techStack.experience.map((exp, i) => {
              const progressStyle = {
                width: exp.progressPercentage
              };
              return (
                <div key={i} className="skill">
                  <div className="skill-label">
                    <span className="skill-name">{exp.Stack}</span>
                    <span className="skill-value">{exp.progressPercentage}</span>
                  </div>
                  <div className="meter">
                    <span style={progressStyle}>
                      <span className="meter-glow" />
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="skills-image">
            <div className="progress-visual" aria-hidden="true" />
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
      </Fade>
    );
  }
  return null;
}
