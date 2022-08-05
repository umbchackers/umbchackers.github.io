import {React, useState, useEffect} from 'react'

import { MdLocationPin } from "react-icons/md";
import { FaFacebookF, FaInstagram, FaTwitter, FaGithubAlt } from "react-icons/fa";

import '../css/Home.css'

import Navbar from '../components/Navbar'
import MobileNavbar from '../components/MobileNavbar'
import About from './About';
import FAQ from './FAQ';
import Sponsors from './Sponsors';

export const Home = () => {

    // setting up variables for window width and height
    const [width, setWidth]   = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    const updateDimensions = () => {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }

    // setting up listener for window resize
    useEffect(() => {        
        window.addEventListener("resize", updateDimensions);
        return () => window.removeEventListener("resize", updateDimensions);
    }, []);

    // function to find if any part of an element is in the viewport, returns boolean
    function elementInViewport2(el) {
        var top = el.offsetTop;
        var left = el.offsetLeft;
        var width = el.offsetWidth;
        var height = el.offsetHeight;
      
        while(el.offsetParent) {
          el = el.offsetParent;
          top += el.offsetTop;
          left += el.offsetLeft;
        }
      
        return (
          top < (window.pageYOffset + window.innerHeight) &&
          left < (window.pageXOffset + window.innerWidth) &&
          (top + height) > window.pageYOffset &&
          (left + width) > window.pageXOffset
        );
    }

    // changing background and other colors based on user's scroll position
    function changeColorOnScroll() {
        const trigger =  document.querySelector(".faq");
        const trigger2 = document.querySelector(".sponsors");
        // const trigger3 = document.querySelector(".footer");
        if (elementInViewport2(trigger)) {
            document.getElementById('home-html').className = "faq-bg"; // changing background color
            document.getElementById('signup-button').className = "nav-sign-up-dark"; // changing sign up button color
            document.getElementById('about-faq').className = "page-divider-dark"; // changing page divider color
            document.querySelectorAll('[id=left-nav-button]').forEach(element=>{ // changing all nav link colors
                element.className = "nav-link-dark";
            })
        } else if (elementInViewport2(trigger2)) {
            document.getElementById('home-html').className = "sponsors-bg";
        } else {
            // changing all back to normal colors
            document.getElementById('home-html').className = ""
            document.getElementById('signup-button').className = "nav-sign-up";
            document.getElementById('about-faq').className = "page-divider-purple";
            document.querySelectorAll('[id=left-nav-button]').forEach(element=>{
                element.className = "nav-link";
            })
        }
    }

    // running the function everytime the user scrolls to keep the page in sync
    window.onscroll = function() {
        changeColorOnScroll();
    };

    
    return (
        <html id="home-html">

            {/* only show mobile navbar if the viewport width is less than 1000 pixels */}
            {width > 1000 && (
                <Navbar/>
            ) || (
                <MobileNavbar/> 
            )}

            <div className='landing'>
                {/* landing background is located in src/css/Home.css */}
                <div className='header' id='header'>

                    <img className='header-logo' src={require('../assets/hackUMBC-retro-logo.png')} alt='header-logo'/>
                    <h1 className='header-date'>OCTOBER 1 - 2</h1>
                    <h2 className='header-year'>2022</h2>

                    <h3 className='header-location'>
                        <MdLocationPin className='header-location-icon'/>
                        <span className='header-location-text'>ILSB, UMBC</span>
                    </h3>

                    <a className='header-button' href='https://hackumbc.typeform.com/to/nWcCFMXi' target="_blank">
                        HACKUMBC 2022 REGISTRATION NOW OPEN!
                    </a>

                    {/* social media icons */}
                    <div className='header-social'>
                        <a href='https://www.facebook.com/hackumbc' target="_blank">
                            <FaFacebookF className='header-social-icon'/>
                        </a>
                        <a href='https://www.instagram.com/hackumbc/?hl=en' target="_blank">
                            <FaInstagram className='header-social-icon'/>
                        </a>
                        <a href='https://twitter.com/hackumbc' target="_blank">
                            <FaTwitter className='header-social-icon'/>
                        </a>
                        <a href='https://github.com/umbchackers' target="_blank">
                            <FaGithubAlt className='header-social-icon'/>
                        </a>
                    </div>

                    <h4 className='header-foot'>
                        Interested in sponsoring us? Email us at SPONSOR@HACKUMBC.ORG.
                    </h4>
                </div>
            </div>

            <About/>

            <FAQ/>

            <Sponsors/>

            <div className='footer'>
                <div className='footer-icons'>
                    <a href='https://www.facebook.com/hackumbc' target="_blank">
                        <FaFacebookF id='foot-fb' className='footer-social-icon'/>
                    </a>
                    <a href='https://www.instagram.com/hackumbc/?hl=en' target="_blank">
                        <FaInstagram id='foot-ig' className='footer-social-icon'/>
                    </a>
                    <a href='https://twitter.com/hackumbc' target="_blank">
                        <FaTwitter id='foot-twitter' className='footer-social-icon'/>
                    </a>
                    <a href='https://github.com/umbchackers' target="_blank">
                        <FaGithubAlt id='foot-github' className='footer-social-icon'/>
                    </a>
                </div>
                <p className='footer-text'>
                    © 2022 hackUMBC
                </p>
            </div>
        
        </html>
    )
}
