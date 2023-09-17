import React from "react";
import { Chrono } from "react-chrono";

export default function WorkTimeLine() {
  const items = [
    {
      title: "January 2013 - November 2014",
      cardTitle: "Front End Developer",
      cardSubtitle: "Worked as help desk and front end developer",
      contentDetailedText:
        "From January 2013 to November 2014, I worked with Wayne Reaves Software as a help desk personnel and front end developer",
    },
    {
      title: "November 2014 - May 2018",
      cardTitle: "Middle Georgia State University",
      cardSubtitle: "I enrolled into MGA to get my bachelors",
      cardDetailedText:
        "From November 2014 to May 2018 I was enrolled at Middle Georgia State University for my bachelors degree",
    },
  ];
  return (
    <Chrono
      items={[
        {
          title: "January 2013 - Nov 2014",
          cardTitle: "Front End Developer",
          url: "https://waynereaves.com/",
          cardSubtitle: "Worked as help desk and front end developer",
          cardDetailedText:
            "From January 2013 to November 2014, I worked with Wayne Reaves Software as a help desk personnel and front end developer",
        },
        {
          title: "November 2014 - May 2018",
          cardTitle: "Middle Georgia State University",
          cardSubtitle: "I enrolled into MGA to get my bachelors",
          cardDetailedText:
            "From November 2014 to May 2018 I was enrolled at Middle Georgia State University for my bachelors degree",
        },
        {
          title: "November 2017 - April 2019",
          cardTitle: "Full Stack Developer for DoD",
          cardSubtitle:
            "I worked on multiple contracts during this time for the DoD",
          cardDetailedText:
            "From November 2017 to April 2019 I worked with VOR Technology Nov 2017-July 2018 | ASET Partner July 2018-Sept 2018 | Zenith Advanced Solutions SEPT 2018-April 2019 - Worked on multiple projects in sprints to update existing software for the Air Force",
        },
        {
          title: "May 2019 - May 2020",
          cardTitle: "Full Stack Developer for Department of Commerce",
          cardSubtitle:
            "I worked with the Department of Commerce on a contract",
        },
        {
          title: "Oct 2020 - Jan 2021",
          cardTitle: "Full Stack Developer",
          cardSubtitle:
            "I worked with the Rocky Mountain Arsenal Wildlife Refuge during this time",
        },
        {
          title: "February 2021 - Present",
          cardTitle: "Full Stack Developer",
          cardSubtitle:
            "I am currently working with RMCI on contract with OPM during this time",
        },
      ]}
      mode="VERTICAL"
    />
  );
}
