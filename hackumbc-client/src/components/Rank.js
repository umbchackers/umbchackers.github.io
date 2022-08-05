import React from 'react'
import '../css/Sponsors.css'

import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';

const Rank = ({title, children}) => {
    
    useEffect(()=>{
        Aos.init({
            once: 'true',
            duration: 1000
        });
    }, [])
    
    return (
        <div className='sponsor-rank'>
            {/* title */}
            <div data-aos='fade-up' className='rank'>
                <hr className='rank-divider'/>
                <h1 className='rank-title'>{title}</h1>
                <hr className='rank-divider'/>
            </div>
            {/* sponsor logos */}
            <div data-aos='fade-up' className='sponsor-logos'>
                {children}
            </div>
        </div>
    )
}

export default Rank