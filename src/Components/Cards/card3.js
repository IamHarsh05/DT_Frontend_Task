import React from "react";
import "./card.css";

export default function Card3() {
  return (
    <div className="card">
      <div className="cardtitlediv">
        <p className="cardtitle">Structure your Pointers</p>
      </div>
      <div className="carddisc">
        <span>Description:</span> Write a 300 - 400 word article from your
        thread . Publish your understanding and showcase your understanding to
        the entire world
      </div>
      <div className="pointersTitle">
        <div className="threadTitle">
          <p>title</p>
          <div className="inputTitleBox">
            <input
              className="inputTitle"
              type="text"
              placeholder="Enter text here"
            />
          </div>
        </div>
      </div>
      <div className="pointersTitle">
        <div className="threadTitle">
          <p>Content</p>
          <div className="inputTitleBox">
            <input
              className="inputTitle"
              type="text"
              placeholder="Enter text here"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
