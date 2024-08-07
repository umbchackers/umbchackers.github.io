import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";

import "../css/Navbar.css";

const Navbar = () => {
  return (
    <div id="nav-bar-container">
      <a href="https://link.hackumbc.tech/mlh" target="_blank">
        <img
          className="mlh-trust-badge"
          src={require("../assets/mlh-trust-badge-2025-black.png")}
          alt="Major League Hacking 2022 Hackathon Season"
        />
      </a>
      <nav className="nav-bar-desktop">
        <div className="nav-left">
          <Link to="header" smooth={true} offset={-300} duration={700}>
            <img
              className="nav-logo"
              src={require("../assets/hackLogo24.png")}
              alt="logo"
            />
          </Link>
          <Link
            id="left-nav-button"
            to="about"
            smooth={true}
            duration={500}
            className="nav-link"
          >
            About
          </Link>
          <Link
            id="left-nav-button"
            to="faq"
            offset={0}
            smooth={true}
            duration={500}
            className="nav-link"
          >
            FAQ
          </Link>
          <Link
            id="left-nav-button"
            to="sponsors"
            offset={0}
            smooth={true}
            duration={500}
            className="nav-link"
          >
            Sponsors
          </Link>
          {/*<a id='left-nav-button' className='nav-link' href="https://oldlemonpepper.github.io/ILSBMap/" target='_blank'>Map</a>*/}
          {/* <Link
            id="left-nav-button"
            to="schedule"
            smooth={true}
            duration={500}
            className="nav-link"
          >
            Schedule
          </Link> */}
        </div>

        <div className="nav-right">
          {/* <a href= 'https://hackumbc.typeform.com/to/nWcCFMXi' id="signup-button" className='nav-sign-up'>REGISTER</a> 
                <a href= 'https://hackumbc.typeform.com/to/MqNdLmuH' id="vsignup-button" className='nav-sign-up'>VOLUNTEER</a> */}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
