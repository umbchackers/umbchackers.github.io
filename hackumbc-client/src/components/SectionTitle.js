import React from "react";
import { useEffect } from "react";
import "../css/Home.css";

import Aos from "aos";
import "aos/dist/aos.css";

// realizing after the fact that this does not need its own component but we can keep it for now its not too bad
const SectionTitle = ({ title }) => {
  useEffect(() => {
    Aos.init({
      once: "true",
      duration: 1000,
    });
  }, []);
  if (title === " ") {
    return (
      <>
        <br />
        <br />
        <br />
      </>
    );
  }
  return (
    <div className="title-container">
      <h1 data-aos="fade-up" className="section-title">
        {title}
      </h1>
    </div>
  );
};

export default SectionTitle;
