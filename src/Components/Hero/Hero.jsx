import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useMemo, useState } from "react"; // Corrected import syntax
import { loadSlim } from "@tsparticles/slim"; 
// Assuming this path is correct for your project structure
import image from "../../assets/img/img2.png"; // Adjust the path as necessary

const Hero = (props) => { // Changed back to Hero as requested
  const [init, setInit] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  // Effect to detect and update dark mode state
  useEffect(() => {
    const handleThemeChange = () => {
      // Checks if the 'dark' class is present on the document's root element
      setDarkMode(document.documentElement.classList.contains('dark'));
    };

    // Add event listener for custom 'themechange' event (if applicable, or listen to system preference)
    // Note: 'themechange' is not a standard browser event. You might need to listen to
    // a more common event like 'DOMContentLoaded' or a custom event dispatched by your theme toggler.
    // For demonstration, we'll assume a mechanism exists to update the 'dark' class on <html>.
    window.addEventListener('themechange', handleThemeChange);
    // Initial check for theme
    handleThemeChange(); 

    // Cleanup function for the event listener
    return () => {
      window.removeEventListener('themechange', handleThemeChange);
    };
  }, []); // Empty dependency array means this effect runs once on mount

  // Effect to initialize the Particles engine
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // Loads the slim bundle (less features, smaller size)
      await loadSlim(engine);
    }).then(() => {
      setInit(true); // Set init to true once particles engine is loaded
    });
  }, []); // Empty dependency array means this effect runs once on mount

  // Callback function when particles are loaded into the container
  const particlesLoaded = (container) => {
    console.log("Particles container loaded:", container);
  };

  // Memoized options for Particles component to prevent unnecessary re-renders
  const options = useMemo(
    () => ({
      fpsLimit: 120, // Limit frames per second
      interactivity: {
        events: {
          onClick: { enable: true, mode: "repulse" }, // Particles repel on click
          onHover: { enable: true, mode: 'grab' }, // Particles can be grabbed on hover
        },
        modes: {
          push: { distance: 200, duration: 15 }, // Push mode configuration
          grab: { distance: 150 }, // Grab mode configuration
        },
      },
      particles: {
        // Particle color changes based on dark mode
        color: { value: darkMode ? "#FFFFFF" : "#000000" }, 
        links: {
          color: darkMode ? "#FFFFFF" : "#000000", // Link color changes based on dark mode
          distance: 150, // Distance for links between particles
          enable: true, // Enable links
          opacity: 0.3, // Opacity of links
          width: 1, // Width of links
        },
        move: {
          direction: "none", // Particles move in no specific direction
          enable: true, // Enable particle movement
          outModes: { default: "bounce" }, // Particles bounce off canvas edges
          random: true, // Random movement
          speed: 1, // Speed of movement
          straight: false, // Not moving in a straight line
        },
        number: { 
          density: { enable: true }, // Enable particle density management
          value: 150 // Number of particles
        },
        opacity: { value: 1.0 }, // Opacity of particles
        shape: { type: "circle" }, // Shape of particles
        size: { value: { min: 1, max: 3 } }, // Size range of particles
      },
      detectRetina: true, // Detect retina displays for better rendering
    }),
    [darkMode], // Re-memoize options only when darkMode changes
  );

  return (
    // Main container div with responsive padding and dark mode styling
    <div className="py-12 overflow-hidden duration-300 sm:py-0 dark:bg-black dark:text-white font-inter">
      {/* Inner container for positioning particles and image */}
      <div className="relative flex items-center justify-center w-full h-screen bg-white dark:bg-black dark:text-white">
        {/* Particles background, only renders if init is true */}
        {init && <Particles id={props.id || "tsparticles"} init={particlesLoaded} options={options} />}
        
        {/*
          Image element with responsive positioning:
          - absolute: Positions the image absolutely within its nearest positioned ancestor (the inner div).
          - bottom-0: Anchors the image to the bottom edge of the container.
          - left-1/2: Moves the image 50% from the left edge.
          - -translate-x-1/2: Translates the image back by 50% of its own width, effectively centering it horizontally.
          - -translate-y-1/2: On mobile and smaller screens, this moves the image upwards by 50% of its own height.
                            (Note: Negative 'translate-y' values move elements UP.)
          - sm:translate-y-0: On small screens (sm breakpoint) and larger, this removes the upward translation,
                            making the image sit flush with the bottom.
          This combination ensures the image is centered horizontally and shifted upwards on mobile,
          then returns to the bottom on larger screens.
        */}
 <img 
  src={image} 
  alt="Hero Image" 
  className="absolute bottom-0 object-contain w-auto h-auto max-w-full max-h-full -translate-x-1/2 -translate-y-72 left-1/2 sm:translate-y-0" 
/>






      </div>
    </div>
  );
};

export default Hero; // Export as Hero as requested
