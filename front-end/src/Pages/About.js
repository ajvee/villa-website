import React from "react";

function About() {
  return (
    <div id="section-about" className="h-screen flex items-center justify-center bg-green-200">
      <h2 className="bg-white p-4 rounded-lg shadow-md">About Me</h2>
      <span className="relative flex h-3 w-3">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-100"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
      </span>
    </div>
  );
}

export default About;
