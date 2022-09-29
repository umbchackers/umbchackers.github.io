import React, { useEffect } from 'react'
import ScheduleBlock from '../components/ScheduleBlock';
import SectionTitle from '../components/SectionTitle';
import Aos from "aos";
import "aos/dist/aos.css";

import '../css/Schedule.css'


const About = () => {
    
    useEffect(()=>{
        Aos.init({
            once: 'true',
            duration: 1000
        });
    }, [])

    return (
        <div className='schedule' id='about-page'>
            <div className='schedule-content'>

                <SectionTitle data-aos="fade-up" title="SCHEDULE" />

                <ScheduleBlock
                    time="9:00AM"
                    title="CHECK IN"
                    details="Doors open promptly at 9:00AM at the Interdisciplinary Life Sciences Building!"
                />
                
                <ScheduleBlock
                    time="10:00AM"
                    title="OPENING CEREMONY"
                    details="Join us as we welcome all hackers into hackUMBC 2022!"
                />

                <ScheduleBlock
                    time="11:00AM"
                    title="HOUR OF NETWORKING"
                    details="Spend some time meeting the awesome companies that help put this event together!"
                />

                <ScheduleBlock
                    time="12:00PM"
                    title="HACKATHON KICKOFF"
                    details="Time to get this party started! The competition begins at noon!"
                />

                <ScheduleBlock
                    time="1:00PM"
                    title="LUNCH"
                    details="Enjoy your Saturday lunch on us!"
                />

                <ScheduleBlock
                    time="2:00PM"
                    title="WORKSHOPS"
                    details="Learn a little (or a lot) more about Computer Science with our workshops! Ongoing until 6PM."
                />

                <ScheduleBlock
                    time="6:00PM"
                    title="DINNER"
                    details="Enjoy your Saturday dinner on us as well!"
                />

                <ScheduleBlock
                    time="12:00AM"
                    title="MIDNIGHT SNACK"
                    details="We will be providing snacks and caffeine for all our late-night hackers."
                />

                <ScheduleBlock
                    time="9:00AM"
                    title="BREAKFAST"
                    details="Wake up (assuming you slept!) to some great breakfast provided by hackUMBC!"
                />

                <ScheduleBlock
                    time="12:00PM"
                    title="HACKING ENDS"
                    details="Keyboards down! Have your projected finalized and submitted by Sunday at noon. We will also be serving a second lunch at this time!"
                />

                <ScheduleBlock
                    time="2:00PM"
                    title="JUDGING EXPO"
                    details="Judging begins for all projects!"
                />

                <ScheduleBlock
                    time="4:00PM"
                    title="CLOSING CEREMONY"
                    details="hackUMBC wll be wrapping up at 4PM with our closing ceremony, where we will be announcing our winners!!"
                />

            </div>
        </div>
    )
}

export default About