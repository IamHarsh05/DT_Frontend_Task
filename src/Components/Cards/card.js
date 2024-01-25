import React from "react";
import "./card.css";

export default function Card() {
  return (
    <div className="card">
      <div className="cardtitlediv">
        <p className="cardtitle">Technical Project Management</p>
      </div>
      <div className="carddisc">
        <span>Description:</span> Story of Alignment Scope of Agility Specific Accountable
        Staggering Approach
      </div>
      <div className="cardvideo">
        <video width="320" height="240" controls>
          <source src="movie.mp4" type="video/mp4" />
          <source src="movie.ogg" type="video/ogg" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}
