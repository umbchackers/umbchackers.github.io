import React, { useEffect, useState } from "react";
import ScheduleBlock from "../components/ScheduleBlock";
import SectionTitle from "../components/SectionTitle";
import Aos from "aos";
import "aos/dist/aos.css";
import "../css/Schedule.css";
import Date from "../components/Date";
import axios from "axios";

const About = () => {
  const [scheduleData, setScheduleData] = useState([]); // Initialize scheduleData as null

  useEffect(() => {
    Aos.init({
      once: true,
      duration: 1000,
    });
  }, []);

  const fetchSchedule = async () => {
    try {
      const response = await axios.get(
        "https://fh149c2qc4.execute-api.us-east-2.amazonaws.com/prod/org/getevents"
      );
      const fetchedData = response;
      setScheduleData(fetchedData.data.body);
    } catch (error) {
      console.error("Error fetching schedule:", error);
      return <></>;
    }
  };

  useEffect(() => {
    fetchSchedule();
  }, []);

  // change dates here !
  const scheduleDays = {
    "2023-09-23": "Saturday September 23rd, 2023",
    "2023-09-24": "Sunday September 24rd, 2023",
  };
  // scuffed hashmap to fix section title
  const scheduleTitle = {
    "2023-09-23": "SCHEDULE",
    "2023-09-24": " ",
  };
  return (
    <div className="schedule" id="about-page">
      <div>
        <div className="schedule-content">
          {Object.keys(scheduleData).map((date) => (
            <div key={date}>
              <SectionTitle
                data-aos="fade-up"
                title={scheduleTitle[date] || date}
              />
              <Date data-aos="fade-up" title={scheduleDays[date] || date} />
              {scheduleData[date].map((event, index) => (
                <ScheduleBlock
                  key={index}
                  location={event.location}
                  time={event.time}
                  title={event.name}
                  details={event.description}
                />
              ))}
            </div>
          ))}
        </div>
        <br />
      </div>
    </div>
  );
};

export default About;
