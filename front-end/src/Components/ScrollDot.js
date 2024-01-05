import { useEffect, useState } from "react";

function ScrollDot() {
  const [activeDot, setActiveDot] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const totalHeight = document.body.clientHeight;

      const dotsCount = 4; 
      const scrollThreshold = totalHeight / dotsCount;

      const currentDot = Math.floor(scrollPosition / scrollThreshold);
      setActiveDot(currentDot);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="fixed top-1/2 left-4 transform -translate-x-1/2">
      {[...Array(4).keys()].map((index) => (
        <span
          key={index}
          className={`block h-2 w-2 my-1 rounded-full ${
            activeDot === index ? 'bg-black' : 'bg-gray-300'
          }`}
        />
      ))}
    </div>
  );
}

export default ScrollDot;
