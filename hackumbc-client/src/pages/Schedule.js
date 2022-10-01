import React, { useEffect } from 'react'
import ScheduleBlock from '../components/ScheduleBlock';
import SectionTitle from '../components/SectionTitle';
import Aos from "aos";
import "aos/dist/aos.css";

import '../css/Schedule.css'
import Date from '../components/Date';


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
                <div className='leftPane'>

                <SectionTitle data-aos="fade-up" title="SCHEDULE"/>

                <Date data-aos="fade-up" title="Saturday October 1st, 2022" />

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
                    title="NETWORKING HOUR"
                    details="Spend some time meeting the awesome companies that help put this event together!"
                />

                <ScheduleBlock
                    time="12:00PM"
                    title="HACKING BEGINS!"
                    details="Time to get this party started! The competition begins at noon!"
                />

                <ScheduleBlock
                    time="1:00PM"
                    title="LUNCH"
                    details="Enjoy your Saturday lunch on us!"
                />

                <ScheduleBlock
                    time="2:00PM"
                    title="SPONSOR TALK - NORTHROP GRUMMAN"
                    details="Learn a little (or a lot) more about Computer Science with our workshops! Ongoing until 6PM."
                />

                <ScheduleBlock
                    time="2:15PM"
                    title="DEBUGGERS - NORTHROP GRUMMAN"
                    details="Learn a little (or a lot) more about Computer Science with our workshops! Ongoing until 6PM."
                />

                <ScheduleBlock
                    time="3:00PM"
                    title="BOB ROSS MS PAINT"
                    details="Learn a little (or a lot) more about Computer Science with our workshops! Ongoing until 6PM."
                />

                <ScheduleBlock
                    time="3:30PM"
                    title="KUBERNETES INTRO - BOOZ ALLEN HAMILTON"
                    details="Learn a little (or a lot) more about Computer Science with our workshops! Ongoing until 6PM."
                />

                <ScheduleBlock
                    time="4:00PM"
                    title="PYTHON GAME DEV - TECH TEAM"
                    details="Learn a little (or a lot) more about Computer Science with our workshops! Ongoing until 6PM."
                />

                <ScheduleBlock
                    time="4:30PM"
                    title="INTRO TO API"
                    details="Learn a little (or a lot) more about Computer Science with our workshops! Ongoing until 6PM."
                />

                <ScheduleBlock
                    time="4:30PM"
                    title="INTRO TO GIT - TECH TEAM"
                    details="Learn a little (or a lot) more about Computer Science with our workshops! Ongoing until 6PM."
                />

                <ScheduleBlock
                    time="5:00PM"
                    title="SNYK CTF - MLH"
                    details="Learn a little (or a lot) more about Computer Science with our workshops! Ongoing until 6PM."
                />

                <ScheduleBlock
                    time="5:30PM"
                    title="INTRO TO AI - TECH TEAM"
                    details="Learn a little (or a lot) more about Computer Science with our workshops! Ongoing until 6PM."
                />

               <ScheduleBlock
                    time="5:00PM"
                    title="INTRO TO WEB DEV - TECH TEAM"
                    details="Learn a little (or a lot) more about Computer Science with our workshops! Ongoing until 6PM."
                />


                <ScheduleBlock
                    time="6:00PM"
                    title="DINNER"
                    details="Enjoy your Saturday dinner on us as well!"
                />

                <ScheduleBlock
                    time="7:00PM"
                    title="SURPRISE!"
                    details="Why are you looking? it's a surpise!"
                />

                <ScheduleBlock
                    time="7:30PM"
                    title="CUP STACKING"
                    details="You wanna see me do it? You wanna see me do it again?"
                />

                <ScheduleBlock
                    time="8:00PM"
                    title="SMASH TOURNAMENT"
                    details="Compete against your friends, or total strangers and SMASH."
                />

                <ScheduleBlock
                    time="9:00PM"
                    title="DANCE PARTY + BOBA/SNACKS"
                    details="We will be providing snacks and caffeine for all our late-night hackers."
                />

                <ScheduleBlock
                    time="10:00PM"
                    title="TRIVIA"
                    details="Enjoy a game of trivia before our next activity!"
                />
    
                <ScheduleBlock
                    time="11:00PM"
                    title="SURPRISE!"
                    details="Why are you looking? it's a surpise!"
                />
    
                <ScheduleBlock
                    time="11:30PM"
                    title="CHARADES"
                    details="Take a late night break, and live a little."
                />

                </div>

                <div className='rightPane'>

                <Date data-aos="fade-up" title="Sunday October 2nd, 2022" />
                <ScheduleBlock
                    time="9:00AM"
                    title="BREAKFAST"
                    details="Wake up (assuming you slept!) to some great breakfast provided by hackUMBC!"
                />

                <ScheduleBlock
                    time="11:00AM"
                    title="PROJECT SUBMISSION BEGINS"
                    details="Hear ye! Hear ye! submit your projects for a chance at first prize!"
                />

                <ScheduleBlock
                    time="12:00PM"
                    title="HACKING ENDS"
                    details="Keyboards down! Have your projected finalized and submitted by Sunday at noon. We will also be serving a second lunch at this time!"
                />

                <ScheduleBlock
                    time="12:00PM"
                    title="LUNCH"
                    details="Hacking is over, enjoy your delicious lunch stress free."
                />

                <ScheduleBlock
                    time="1:00PM"
                    title="PROJECT SUBMISSION ENDS"
                    details="I hope you made the deadline... for your sake."
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
        </div>
    )
}

export default About