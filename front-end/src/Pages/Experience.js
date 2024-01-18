import React from "react";
import Timeline from "../Components/TimeLine";

function Experience() {
  const events = [
   {
    heading: 'Ship Essential',
    subHeading: "'Summarize your work history here'",
    direction: 'up',
   },
   {
    heading: 'practice',
    subHeading:'practice',
    direction: 'down',
   },
   {
    heading: 'annother one',
    subHeading: 'hello',
    direction: 'up',
   },
   {
    heading: 'annother one',
    subHeading: 'hello',
    direction: 'up',
   },
   {
    heading: 'annother one',
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
