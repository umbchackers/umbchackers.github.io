import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";

import "../css/Navbar.css";

const Navbar = () => {
  return (
    <div id="nav-bar-container">
      <a
        href="https://mlh.io/na?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2024-season&utm_content=black"
        target="_blank"
      >
        <img
          className="mlh-trust-badge"
          src="https://s3.amazonaws.com/logged-assets/trust-badge/2024/mlh-trust-badge-2024-black.svg"
          alt="Major League Hacking 2022 Hackathon Season"
        />
      </a>
      <nav className="nav-bar-desktop">
        <div className="nav-left">
          <Link to="header" smooth={true} offset={-300} duration={700}>
            <img
              className="nav-logo"
              src={require("../assets/dog_logo.png")}
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
          <Link
            id="left-nav-button"
            to="schedule"
            smooth={true}
            duration={500}
            className="nav-link"
          >
            Schedule
          </Link>
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
