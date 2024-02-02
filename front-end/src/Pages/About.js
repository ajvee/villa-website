import React from "react";

function About() {
  return (
    <div id="section-about" className="h-screen flex items-center justify-evenly bg-[#e3f6f5]">
      <h2 className="bg-[#fffffe] transition duration-300 ease-in-out transform hover:-translate-y-4 hover:shadow flex flex-col gap-y-2 border shadow-md rounded-xl p-20 text-[#272343]">Favorite Video Games</h2>
      <h2 className="bg-[#fffffe] transition duration-300 ease-in-out transform hover:-translate-y-4 hover:shadow flex flex-col gap-y-2 border shadow-md rounded-xl p-20 text-[#272343]">iPhone Photos</h2>
      <h2 className="bg-[#fffffe] transition duration-300 ease-in-out transform hover:-translate-y-4 hover:shadow flex flex-col gap-y-2 border shadow-md rounded-xl p-20 text-[#272343]">Restaurant Recommendations</h2>
      <h2 className="bg-[#fffffe] transition duration-300 ease-in-out transform hover:-translate-y-4 hover:shadow flex flex-col gap-y-2 border shadow-md rounded-xl p-20 text-[#272343]">Wine Recommendations</h2>
    </div>
    
  );
}

export default About;
