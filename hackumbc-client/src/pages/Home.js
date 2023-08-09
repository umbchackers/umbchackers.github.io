import { React, useState, useEffect } from "react";

import { MdLocationPin } from "react-icons/md";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaGithubAlt,
} from "react-icons/fa";

import "../css/Home.css";

import Navbar from "../components/Navbar";
import MobileNavbar from "../components/MobileNavbar";
import Schedule from "./Schedule";
import About from "./About";
import FAQ from "./FAQ";
import Sponsors from "./Sponsors";

export const Home = () => {
  // setting up variables for window width and height
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  const updateDimensions = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  // setting up listener for window resize
  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  // function to find if any part of an element is in the viewport, returns boolean
  const elementInViewport2 = (el) => {
    var top = el.offsetTop;
    var left = el.offsetLeft;
    var width = el.offsetWidth;
    var height = el.offsetHeight;

    while (el.offsetParent) {
      el = el.offsetParent;
      top += el.offsetTop;
      left += el.offsetLeft;
    }

    return (
      top < window.pageYOffset + window.innerHeight &&
      left < window.pageXOffset + window.innerWidth &&
      top + height > window.pageYOffset &&
      left + width > window.pageXOffset
    );
  };

  // running the function everytime the user scrolls to keep the page in sync
  window.onscroll = () => {
    //changeColorOnScroll();
  };

  return (
    <html id="home-html">
      {/* only show mobile navbar if the viewport width is less than 1000 pixels */}
      {(width > 1000 && <Navbar />) || <MobileNavbar />}

      <div className="landing">
        <div className="middle-screen">
          {/* landing background is located in src/css/Home.css */}
          <div className="header" id="header">
            <div className="headerlogo-div">
              <img
                className="header-logo"
                src={require("../assets/hackUMBC-retro-logo.png")}
                alt="header-logo"
              />
            </div>
            <h1 className="header-date">SEPTEMBER, 23-24</h1>
            <h2 className="header-year">2023</h2>

            <h3 className="header-location">
              <MdLocationPin className="header-location-icon" />
              <span className="header-location-text">ILSB, UMBC</span>
            </h3>

            <div className="headerbutton-div">
              <a
                href="https://hackumbc.typeform.com/to/KLS8nWNW"
                className="header-button"
                target="_blank"
              >
                REGISTRATION
              </a>
            </div>
            {/* 
                    <div className='mapbutton-div'>
                    <a className='map-button' target="_blank">
                        INTERACTIVE EVENT MAP
                    </a>
                    </div>

                    <div className='devpostbutton-div'>
                    <a href='https://hackumbc-fall-2022.devpost.com/' className='devpost-button' target="_blank">
                        DEVPOST
                    </a>
                    </div> */}

            <h4 className="header-foot">
              Interested in sponsoring us? <br /> <br />
              <a href="mailto: sponsor@hackumbc.tech"> SPONSOR@HACKUMBC.TECH</a>
            </h4>
          </div>
        </div>
        {/* social media icons */}
        <div className="header-social">
          <a href="https://www.facebook.com/hackumbc" target="_blank">
            <FaFacebookF className="header-social-icon" />
          </a>
          <a href="https://www.instagram.com/hackumbc/?hl=en" target="_blank">
            <FaInstagram className="header-social-icon" />
          </a>
          <a href="https://twitter.com/hackumbc" target="_blank">
            <FaTwitter className="header-social-icon" />
          </a>
          <a href="https://github.com/umbchackers" target="_blank">
            <FaGithubAlt className="header-social-icon" />
          </a>
        </div>
      </div>

      {/* width > 770 && (<Schedule/>) */}

      <About />

      <FAQ />

      <Sponsors />

      <div className="footer">
        <div className="footer-icons">
          <a href="https://www.facebook.com/hackumbc" target="_blank">
            <FaFacebookF id="foot-fb" className="footer-social-icon" />
          </a>
          <a href="https://www.instagram.com/hackumbc/?hl=en" target="_blank">
            <FaInstagram id="foot-ig" className="footer-social-icon" />
          </a>
          <a href="https://twitter.com/hackumbc" target="_blank">
            <FaTwitter id="foot-twitter" className="footer-social-icon" />
          </a>
          <a href="https://github.com/umbchackers" target="_blank">
            <FaGithubAlt id="foot-github" className="footer-social-icon" />
          </a>
        </div>
        <p className="footer-text">© 2023 hackUMBC</p>
      </div>
    </html>
  );
};
