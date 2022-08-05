import {React, useState} from 'react'
import {Link, animateScroll as scroll} from 'react-scroll';

import '../css/MobileNavbar.css'

import { MdMenu, MdClose } from "react-icons/md";

const MobileNavbar = () => {

    const [overlay, setOverlay] = useState(false);

    return (
        <>
            {overlay && (
                <div className='mobile-overlay' id='fromTop'>
                    <MdClose className='mobile-overlay-close' onClick={()=>{setOverlay(false)}}/>
                    <div className='mobile-overlay-content'>
                        
                        <Link to='about' smooth={true} duration={500} className='mobile-overlay-text' onClick={()=>{setOverlay(false)}}>ABOUT</Link>
                        <Link to='faq' smooth={true} offset={-100} duration={500} className='mobile-overlay-text' onClick={()=>{setOverlay(false)}}>FAQ</Link>
                        <Link to='sponsors' smooth={true} offset={-50} duration={500} className='mobile-overlay-text' onClick={()=>{setOverlay(false)}}>SPONSORS</Link>
                        {/* <Link to='' smooth={true} duration={500} className='mobile-overlay-text' onClick={()=>{setOverlay(false)}}>SOCIAL</Link> */}

                    </div>
                </div>
            )}
            <div className='mobile-nav'>
                <div className='mobile-nav-left'>
                    <a href='/'>
                        <img className='mobile-nav-logo' src={require('../assets/retro-dawg.png')} alt='logo'/>
                    </a>
                </div>
                <div className='mobile-nav-right'>
                    <MdMenu id ='mobile-hamburger' className='nav-hamburger' onClick={()=>{setOverlay(true)}}/>
                </div>
            </div>
        </>
    )
}

export default MobileNavbar