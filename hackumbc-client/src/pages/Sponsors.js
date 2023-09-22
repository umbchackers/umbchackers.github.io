import { React, useEffect } from "react";
import SectionTitle from "../components/SectionTitle";
import "../css/Sponsors.css";

import Aos from "aos";
import "aos/dist/aos.css";
import Rank from "../components/Rank";

const Sponsors = () => {
  useEffect(() => {
    Aos.init({
      once: "true",
      duration: 1000,
    });
  }, []);

  return (
    <div className="sponsors" id="sponsors-page">
      <div className="sponsor-page-blur">
        <div className="sponsors-content">
          {/* <div aos-data="fade-up" className="sponsor-section-title">
            <SectionTitle title="SUPPORT 2023 HACKUMBC" />
            <p data-aos="fade-up" className="sponsor-us">
              Interesting in sponsoring us? <br /> <br />
              <b>
                <a
                  data-aos="fade-up"
                  className="sponsor-us-link"
                  href="mailto: sponsor@hackumbc.tech"
                >
                  SPONSOR@HACKUMBC.TECH
                </a>
              </b>
            </p>
          </div> */}

          <div aos-data="fade-up" className="sponsor-section-title">
            <SectionTitle title="2023 SPONSORS" />
            <br />
            <p>HACKUMBC 2023 Sponsors & Partners</p>
          </div>
          <Rank title="DIAMOND">
            <img
              src={require("../assets/new_sponsors/UMBC-COEIT.png")}
              alt="sponsor"
              className="logo-for-sponsor"
            />
          </Rank>

          <Rank title="PLATINUM">
            <img
              src={require("../assets/new_sponsors/Logo_TRP_TwoComponentTwoColor_Digital_R.png")}
              alt="sponsor"
              className="logo-for-sponsor"
            />
            <img
              src={require("../assets/new_sponsors/northrop.png")}
              alt="sponsor"
              className="logo-for-sponsor"
            />
          </Rank>
          <Rank title="GOLD">
            <img
              src={require("../assets/new_sponsors/BAH.png")}
              alt="sponsor"
              className="logo-for-sponsor"
            />
          </Rank>
          <Rank title="SILVER">
            <img
              src={require("../assets/sponsors/cipher-tech.png")}
              alt="sponsor"
              className="logo-for-sponsor"
            />
            <img
              src={require("../assets/new_sponsors/intelligenisis.png")}
              alt="sponsor"
              className="logo-for-sponsor"
            />
            <img
              src={require("../assets/new_sponsors/jphapl.png")}
              alt="sponsor"
              className="logo-for-sponsor"
            />

            <img
              src={require("../assets/new_sponsors/alexbrown.png")}
              alt="sponsor"
              className="logo-for-sponsor"
            />
          </Rank>
          <Rank title="BRONZE">
            <img
              src={require("../assets/new_sponsors/CWIT.png")}
              alt="sponsor"
              className="logo-for-sponsor"
            />
            <img
              src={require("../assets/new_sponsors/makpar.png")}
              alt="sponsor"
              className="logo-for-sponsor"
            />
            <img
              src={require("../assets/new_sponsors/UMBC-CSEE.png")}
              alt="sponsor"
              className="logo-for-sponsor"
            />
          </Rank>
          <Rank title="PARTNERS">
            <img
              src={require("../assets/new_sponsors/cah.png")}
              alt="sponsor"
              className="logo-for-sponsor"
            />
            <img
              src="https://static.mlh.io/brand-assets/logo/official/mlh-logo-white.png"
              alt="sponsor"
              className="logo-for-sponsor"
            />
            <a
              href="https://hackp.ac/mlh-standoutstickers-hackathons"
              target="_blank"
            >
              <div className="sticker-logo" />
            </a>
          </Rank>
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
