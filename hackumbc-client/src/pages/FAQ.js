import React from "react";

import Question from "../components/Question";
import SectionTitle from "../components/SectionTitle";

import "../css/FAQ.css";

const FAQ = () => {
  return (
    <div className="faq" id="faq-page">
      <div className="faq-content">
        {/* <h1 data-aos='fade-up' id='faq-title' className='about-title'>{"{ FAQ }"}</h1> */}

        <SectionTitle title="FAQ" />

        <div className="questions">
          <Question
            question="What does this year's transition look like with COVID-19?"
            answer="After two years of offering a digital event due to the ongoing pandemic we are excited to announce that this year’s event will be fully in person! We will continue to follow UMBC’s COVID-19 protocols and there will be a virtual platform for communications. However we hope that you are as excited as we are to return to the hype of an in person event!"
          />
          <Question
            question="Will there be free swag?"
            answer="As usual our event wouldn’t be complete without our season swag! We will be giving out swag all weekend long so be on the lookout for swag giveaways throughout the event!"
          />
          <Question
            question="What is a hackathon?"
            answer="A hackathon is a place where you come together to solve problems. Students are encouraged to come up with an idea, form teams, and then build out that idea (typically through programming!) into a product in 24 hours. We want you to take something you love (sports, art, camping, anything!) and combine it with technology to make something awesome. It's a great time to push the envelope and learn some new skills. This is where your dreams run wild. Solve a real-world problem with technology or build the next Iron Man suit."
          />
          <Question
            question="What do I need to register/attend?"
            answer="To complete the pre-registration process you will need a valid student or government-issued ID card and your resume."
          />
          <Question
            question="Who can attend?"
            answer="Any high school or undergraduate students or recent graduates are eligible to participate in our event. Additionally, all participants must follow the MLH code of conduct and hackUMBC code of conduct."
          />
          <Question
            question="What if I don't code?"
            answer="This is the perfect opportunity to learn something new! There will be workshops geared towards beginners and mentors to help you throughout the event. We also have plenty of swag and prizes for teams that bring out the best idea and make the community a better place."
          />
          <Question
            question="What if I don't have a team or an idea?"
            answer="Don’t worry, you may form or join a team by messaging the participant groups/chats that we’ll put you in during the weeks leading up to the weekend, as well as through team formation activities during the event."
          />
          <Question
            question="What can I build?"
            answer="Anything! Web, mobile, desktop, and hardware projects are all welcome. Projects will be judged based on creativity, technical difficulty, polish, and usefulness."
          />
          <Question
            question="How big should teams be? Can I hack alone?"
            answer="Teams should be at most FOUR people. We highly recommend that you form a team, but solo hackers are allowed."
          />
          <Question
            question="Can I build on past projects?"
            answer="We strongly discourage building off of existing projects you've worked on, and unfortunately they will not be eligible for prizes. However, using third–party APIs and libraries are encouraged, as long as they're accessible by everyone."
          />
          <div data-aos="fade-up" className="question-container">
            <details className="question-details">
              <summary>Is there a code of conduct?</summary>
              <p>
                Yes, it can be found{" "}
                <a
                  id="coc-link"
                  href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf"
                >
                  here.
                </a>
              </p>
            </details>
          </div>
          <Question
            question="I have more questions!"
            answer="Get in touch with us at hackumbc@gmail.com"
          />
        </div>
      </div>
    </div>
  );
};

export default FAQ;
