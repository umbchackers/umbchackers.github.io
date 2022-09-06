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
                    <SectionTitle title='SUPPORT US FOR THE 2022 HACKATHON'/>
                    <p className='sponsor-us'>If you have any questions, please email us at sponsor@hackUMBC.org</p>
                </div>
                
                <a href='https://www.standoutstickers.com/' target="_blank">
                        <div className='sticker-logo' />
                </a>
                {/* <Rank title='DIAMOND'>
                    <img src={require('../assets/sponsors/northrop.png')} alt='sponsor' className='logo-for-sponsor'/>
                    <img src={require('../assets/sponsors/general-dynamics.png')} alt='sponsor' className='logo-for-sponsor'/>
                    <img src={require('../assets/sponsors/TRowe.png')} alt='sponsor' className='logo-for-sponsor'/>
                </Rank>
                <Rank title='GOLD'>
                    <img src={require('../assets/sponsors/GEICO-Logo.png')} alt='sponsor' className='logo-for-sponsor'/>
                    <img src={require('../assets/sponsors/Booz-Allen-Hamiliton-logo.png')} alt='sponsor' className='logo-for-sponsor'/>
                    <img src={require('../assets/sponsors/emochaLogo.png')} alt='sponsor' className='logo-for-sponsor'/>
                </Rank>
                <Rank title='SILVER'>
                    <img src={require('../assets/sponsors/cipher-tech.png')} alt='sponsor' className='logo-for-sponsor'/>
                    <img src={require('../assets/sponsors/alex_brown_text.jpg')} alt='sponsor' className='logo-for-sponsor'/>
                    <img src={require('../assets/sponsors/clearedge-logo.png')} alt='sponsor' className='logo-for-sponsor'/>
                    <img src={require('../assets/sponsors/Capital-One-Logo.png')} alt='sponsor' className='logo-for-sponsor'/>
                </Rank>
                <Rank title='BRONZE'>
                    <img src={require('../assets/sponsors/cards-aganist-humanity.png')} alt='sponsor' className='logo-for-sponsor'/>
                    <img src={require('../assets/sponsors/reverie-labs-logo-gray-p-500.png')} alt='sponsor' className='logo-for-sponsor'/>
                    <img src={require('../assets/sponsors/wolfram-language.png')} alt='sponsor' className='logo-for-sponsor'/>
                    <img src={require('../assets/sponsors/assemblyAI.png')} alt='sponsor' className='logo-for-sponsor'/>
                    <img src={require('../assets/sponsors/smartlogic-logo-teal-1000.png')} alt='sponsor' className='logo-for-sponsor'/>
                    <img src={require('../assets/sponsors/google-cloud-logo.png')} alt='sponsor' className='logo-for-sponsor'/>
                    <img src={require('../assets/sponsors/sticker-mule.png')} alt='sponsor' className='logo-for-sponsor'/>
                </Rank> */}
            </div>
        </div>
    )
}

export default Sponsors