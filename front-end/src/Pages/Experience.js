import React from "react";
import Timeline from "../Components/TimeLine";

function Experience() {
  const events = [
   {
    heading: 'Italian Wine Merchants - (2010-2020)',
    subHeading: "'Summarize your work history here'",
    direction: 'up',
   },
   {
    heading: 'Uber Eats Bike Delivery (2021)',
    subHeading:'practice',
    direction: 'down',
   },
   {
    heading: 'Prose (2021-2022)',
    subHeading: 'hello',
    direction: 'up',
   },
   {
    heading: 'Queens Bake House (2022)',
    subHeading: 'hello',
    direction: 'down',
   },
   {
    heading: 'Ship Essential (2022-Present',
    subHeading: 'hello',
    direction: 'up',
   }
  ]
  return (
    
    <div  id="section-experience" className=" h-screen flex items-center justify-evenly bg-[#fffffe]">
    <Timeline events={events}/>
    </div>
  );
}

export default Experience;
