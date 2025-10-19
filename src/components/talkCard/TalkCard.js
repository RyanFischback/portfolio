import React from "react";
import "./TalkCard.scss";

export default function TalkCard({talkDetails}) {
  const openEvent = () => {
    if (talkDetails.event_url) {
      window.open(talkDetails.event_url, "_blank");
    }
  };

  return (
    <div className="talk-card" onClick={openEvent}>
      <div className="talk-card-header">
        <span className="talk-card-pill">Featured Talk</span>
        <h3 className="talk-card-title">{talkDetails.title}</h3>
        <p className="talk-card-subtitle">{talkDetails.subtitle}</p>
      </div>
      <div className="talk-card-actions">
        {talkDetails.slides_url && (
          <a
            href={talkDetails.slides_url}
            target="_blank"
            rel="noreferrer"
            className="talk-button"
          >
            View Slides
          </a>
        )}
        {talkDetails.event_url && (
          <a
            href={talkDetails.event_url}
            target="_blank"
            rel="noreferrer"
            className="talk-button secondary"
          >
            Event Recap
          </a>
        )}
      </div>
    </div>
  );
}
