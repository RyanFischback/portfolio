import React, {useContext} from "react";
import "./WorkExperience.scss";
import ExperienceCard from "../../components/experienceCard/ExperienceCard";
import {workExperiences} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function WorkExperience() {
  const {isDark} = useContext(StyleContext);
  if (workExperiences.display) {
    return (
      <section id="experience">
        <Fade bottom duration={1000} distance="20px">
          <div className="main experience-section" id="workExperience">
            <div>
              <span className="section-tag">Chapter 03</span>
              <h1 className="experience-heading">Experiences</h1>
              <p className="experience-subtitle">
                A timeline of the missions I’ve led, shipped, and scaled.
              </p>
              <div className="experience-cards-div">
                {workExperiences.experience.map((card, i) => {
                  return (
                    <ExperienceCard
                      key={i}
                      index={i}
                      total={workExperiences.experience.length}
                      isDark={isDark}
                      cardInfo={{
                        company: card.company,
                        desc: card.desc,
                        date: card.date,
                        companylogo: card.companylogo,
                        role: card.role,
                        descBullets: card.descBullets
                      }}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </Fade>
      </section>
    );
  }
  return null;
}
