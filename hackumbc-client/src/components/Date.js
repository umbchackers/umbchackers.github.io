import React from 'react'
import { useEffect } from 'react';
import '../css/Home.css'
import '../css/Schedule.css'

import Aos from "aos";
import "aos/dist/aos.css";

// realizing after the fact that this does not need its own component but we can keep it for now its not too bad
const Date = ({title}) => {

    useEffect(()=>{
        Aos.init({
            once: 'true',
            duration: 1000
        });
    }, [])

    
    return (
      <div className='date-container'>
          <h1 data-aos='fade-up' className='date'>{title}</h1>
      </div>
    )

}

export default Date