import React from 'react'
import { useEffect } from 'react';
import '../css/Home.css'
import '../css/Schedule.css'

import Aos from "aos";
import "aos/dist/aos.css";

// realizing after the fact that this does not need its own component but we can keep it for now its not too bad
const ScheduleBlock = ({time, title, details}) => {

    useEffect(()=>{
        Aos.init({
            once: 'true',
            duration: 1000
        });
    }, [])

  return (
    <div className="schedule-container">
        <div data-aos='fade-up' className='schedule-title'>
            <h2>{time}</h2>
            <hr/>
            <h2>{title}</h2>
        </div>
        <h2 className='schedule-details'>{details}</h2>
    </div>
  )
}

export default ScheduleBlock