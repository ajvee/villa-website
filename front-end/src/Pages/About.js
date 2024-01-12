import React from "react";

function About() {
  return (
    <div id="section-about" className="h-screen flex items-center justify-evenly bg-gray-200">
      <h2 className="bg-[#ff8906] p-20 rounded-lg shadow-md">Streaming Channel</h2>
      <h2 className="bg-[#ff8906] p-20 rounded-lg shadow-md">Photography</h2>
      <h2 className="bg-[#ff8906] p-20 rounded-lg shadow-md">Gunpla ideally photos</h2>

      {/* <span className="relative flex h-3 w-3">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-100"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
      </span> */}
    </div>
  );
}

export default About;
