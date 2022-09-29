import React, { useEffect } from 'react'
import Track from '../components/Track'
import Aos from "aos";
import "aos/dist/aos.css";

import '../css/About.css'
import SectionTitle from '../components/SectionTitle';

const About = () => {
    
    useEffect(()=>{
        Aos.init({
            once: 'true',
            duration: 1000
        });
    }, [])

    return (
        <div className='about' id='about-page'>
            <div className='about-content'>

                <SectionTitle data-aos='fade-up' title='ABOUT'/>
                
                <div data-aos='fade-up' className='about-text'>
                    <p>
                        Join hackUMBC for our 24-hour hackathon event where we challenge our ideas to come to life!
                        Collaborate with other students and pick up some new skills in our workshop sessions!
                    </p>

                    <p>
                        With lots of fun activities, over $5,000 in prizes, and swag for all participants
                        you’ll be in for an exciting weekend!
                    </p>
                </div>
                
                <div className='about-tracks'>
                    <div data-aos='fade-up' className='tracks-title'>
                        <hr/>
                        <h2>TRACKS</h2>
                        <hr/>
                    </div>
                    
                    <div className='tracks-content' data-aos='fade-up'>
                        <Track
                            title='General'
                            desc="Whatever you want! These are hacks that don't fit under any specific category."
                        >
                            <img src={require('../assets/Dog_General.png')} alt='track-image' className='track-image'/>
                        </Track>

                        <Track
                            title='Data'
                            desc='Hacks focused around data analysis and visualization to solve large scale problems.'
                        >
                            <img src={require('../assets/wifi.png')} alt='track-image' className='track-image'/>
                        </Track>
                        
                        <Track
                            title='Hardware'
                            desc='Hacks focused around physical components as well as programming to construct innovative designs.'
                        >
                            <img src={require('../assets/education.png')} alt='track-image' className='track-image'/>
                        </Track>
                        
                        <Track
                            title='AI/ML'
                            desc='Hacks focused around Artifical Intelligence programs to train algorithms on complex situations.'
                        >
                            <img src={require('../assets/Dog_Equity.png')} alt='track-image' className='track-image'/>
                        </Track>
                    </div>
                </div>

                {/* styling for this in Home.css */}
                <hr id = "about-faq" className='page-divider-purple'/>

            </div>
        </div>
    )
}

export default About