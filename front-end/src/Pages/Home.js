import React, { useEffect } from "react";
import NavBar from "../Components/NavBar"; 

function HomePage() {
  useEffect(() => {
    const smoothScroll = (targetId) => {
      const target = document.getElementById(targetId);
      if (target) {
        window.scrollTo({
          top: target.offsetTop,
          behavior: "smooth",
        });
      }
    };

    const handleClick = (event) => {
      event.preventDefault();
      const targetId = event.target.getAttribute("href").substring(1); 
      smoothScroll(targetId);
    };

    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach((link) => {
      link.addEventListener("click", handleClick);
    });

    return () => {
      links.forEach((link) => {
        link.removeEventListener("click", handleClick);
      });
    };
  }, []);

  return (
    <div>
      <NavBar />
      <div id="intro" className="h-screen flex items-center justify-center bg-gray-200">
        <h1 className="text-6xl text-red-500">Welcome to my Personal Website</h1>
      </div>
      <div id="section-about" className="h-screen flex items-center justify-center bg-green-200">
        <h2>About Me</h2>
      </div>
      <div id="section-experience" className="h-screen flex items-center justify-center bg-blue-200">
        <h2>Experience</h2>
      </div>
      <div id="section-contact" className="h-screen flex items-center justify-center bg-red-200">
        <h2>Contact</h2>
      </div>
    </div>
  );
}

export default HomePage;
