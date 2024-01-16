import React from "react"; 
import profilepic from './/profilepic.png'

function Home() {
  return (
    <div id="section-home" 
         className="relative bg-cover bg-no-repeat bg-center h-screen flex items-center justify-center" style={{ backgroundImage: `url(${profilepic})` , zindex: '0'}}>
     <h1 className="font-mono text-8xl text-center text-[#fffffe]">How's it going?</h1>

    </div>
  );
}

export default Home;
