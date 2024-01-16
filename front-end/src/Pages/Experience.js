import React from "react";

function Experience() {
    return (
        <div id="section-experience" 
        className="flex overflow-x-auto whitespace-nowrap p-4">
        {[...Array(10).keys()].map((index) => (
          <div key={index} className="w-70 bg-white shadow-lg rounded-lg overflow-hidden inline-block mr-4">
            <img src={`https://placekitten.com/300/200?image=${index + 1}`} alt={`Card ${index}`} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">Card {index + 1}</h2>
              <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
        ))}
      </div>
    );
  };

export default Experience;