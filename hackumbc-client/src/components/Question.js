import React from 'react'
import { useEffect } from 'react';

import Aos from "aos";
import "aos/dist/aos.css";

import '../css/FAQ.css'

const Question = ({question, answer}) => {

    useEffect(()=>{
        Aos.init({
            once: 'true',
            duration: 1000
        });
    }, [])
    
    return (
        <div data-aos='fade-up' className='question-container'>
            <details className='question-details'>
                <summary> {question} </summary>
                <p>{answer}</p>
            </details>
        </div>
    )
}

export default Question