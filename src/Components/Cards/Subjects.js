import React from "react";
import "./cards.css";
import Card from "./card";
import Card2 from "./card2";
import Card3 from "./card3";

export default function Subjects() {
  return (
    <div>
      <div className="my-8">
        <div className="my-36 md:my-14">
          <div className="title">
            <p>Technical Project Management</p>
          </div>
          <div className="disc">
            <div>
              <p>Explore the world of management</p>
            </div>
            <div>
              <p>
                As a project manager, you play an important reole in leading a
                project through initiation, planning, execution, monitoring,
                controlling and completion. How? Do you want to manage each and
                every step of your life?
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-start">
            <Card />
            <Card2 />
          </div>
          <div className="flex flex-col md:flex-row items-start">
            <Card3 />
          </div>
        </div>
      </div>
    </div>
  );
}
