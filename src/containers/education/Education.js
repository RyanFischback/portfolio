import React from "react";
import "./Education.scss";
import EducationCard from "../../components/educationCard/EducationCard";
import {educationInfo} from "../../portfolio";

export default function Education() {
  if (educationInfo.display) {
    return (
      <div className="education-section main" id="education">
        <div className="education-header">
          <span className="section-stage">Chapter 02 · Education</span>
          <h1 className="section-heading education-heading">Education</h1>
        </div>
        <div className="education-card-container">
          {educationInfo.schools.map((school, index) => (
            <EducationCard key={index} school={school} index={index} />
          ))}
        </div>
      </div>
    );
  }
  return null;
}
