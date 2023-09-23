import React from "react";
import { useEffect, useState } from "react";
import "../css/Home.css";
import "../css/Schedule.css";

import Aos from "aos";
import "aos/dist/aos.css";

// realizing after the fact that this does not need its own component but we can keep it for now its not too bad
const ScheduleBlock = ({ time, title, location, details }) => {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };
  useEffect(() => {
    Aos.init({
      once: "true",
      duration: 1000,
    });
  }, []);

  return (
    <div
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      className="schedule-container"
    >
      <div data-aos="fade-up" className="schedule-title">
        <h2>{location}</h2>
        <hr />
        <h2>{time}</h2>
        <hr />
        <h2>{title}</h2>
      </div>
      {isHovering && (
        <div className="schedule-details">
          <h3> {details}</h3>
        </div>
      )}
    </div>
  );
};

export default ScheduleBlock;
