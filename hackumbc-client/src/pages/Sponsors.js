import {React, useEffect } from 'react'
import SectionTitle from '../components/SectionTitle'
import '../css/Sponsors.css'

import Aos from "aos";
import "aos/dist/aos.css";
import Rank from '../components/Rank';

const Sponsors = () => {
    
    useEffect(()=>{
        Aos.init({
            once: 'true',
            duration: 1000
        });
    }, [])
    
    return (
        <div className='sponsors' id='sponsors-page'>
            <div className='sponsors-content'>
                <div aos-data='fade-up' className='sponsor-section-title'>
                    <div data-aos='fade-up' className='tracks-title'>
                        <hr/>
                        <h2>SPONSORS</h2>
                        <hr/>
                    </div>
                    <SectionTitle title='SUPPORT US FOR THE 2022 HACKATHON'/>
                    <p className='sponsor-us'>If you are interested in sponsoring us, please feel free to email us at sponsor@hackUMBC.org</p>
                </div>
                
                <Rank title='DIAMOND'>
                    <img src={require('../assets/sponsors/northrop.png')} alt='sponsor' className='logo-for-sponsor'/>
                    <img src={require('../assets/sponsors/TRowe.png')} alt='sponsor' className='logo-for-sponsor'/>
                </Rank>
                <Rank title='GOLD'>
                    <img src={require('../assets/sponsors/Booz-Allen-Hamiliton-logo.png')} alt='sponsor' className='logo-for-sponsor'/>
                    <img src={require('../assets/sponsors/apl_small_horizontal_black_1.png')} alt='sponsor' className='logo-for-sponsor'/>
                </Rank>
                <Rank title='SILVER'>
                    <img src={require('../assets/sponsors/cipher-tech.png')} alt='sponsor' className='logo-for-sponsor'/>
                    <img src={require('../assets/sponsors/alex_brown_text.jpg')} alt='sponsor' className='logo-for-sponsor'/>
                    <img src={require('../assets/sponsors/textron_systems.png')} alt='sponsor' className='logo-for-sponsor'/>
                </Rank>
                <a href='https://www.standoutstickers.com/' target="_blank">
                        <div className='sticker-logo' />
                </a>
            </div>
        </div>
    )
}

export default Sponsors