import React, { useEffect } from "react";
import Home from "./Pages/Home"
import NavBar from './Components/NavBar'
import About from "./Pages/About";
import Experience from "./Pages/Experience";
import Contact from "./Pages/Contact";

function App() {
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
    <div className="App">
    <NavBar />
    <Home />
    <About />
    <Experience />
    <Contact />
    </div>
  );
}


export default App;