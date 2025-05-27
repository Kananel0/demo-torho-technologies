import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useMemo, useState } from "react";
import { loadSlim } from "@tsparticles/slim"; 
import image from "../../assets/img/img1.png"; 

const Hero = (props) => {
  const [init, setInit] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const handleThemeChange = () => {
      setDarkMode(document.documentElement.classList.contains('dark'));
    };

    window.addEventListener('themechange', handleThemeChange);
    handleThemeChange(); 

    return () => {
      window.removeEventListener('themechange', handleThemeChange);
    };
  }, []);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  const options = useMemo(
    () => ({
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: { enable: true, mode: "repulse" },
          onHover: { enable: true, mode: 'grab' },
        },
        modes: {
          push: { distance: 200, duration: 15 },
          grab: { distance: 150 },
        },
      },
      particles: {
        color: { value: darkMode ? "#FFFFFF" : "#000000" },
        links: {
          color: darkMode ? "#FFFFFF" : "#000000",
          distance: 150,
          enable: true,
          opacity: 0.3,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: { default: "bounce" },
          random: true,
          speed: 1,
          straight: false,
        },
        number: { density: { enable: true }, value: 150 },
        opacity: { value: 1.0 },
        shape: { type: "circle" },
        size: { value: { min: 1, max: 3 } },
      },
      detectRetina: true,
    }),
    [darkMode],
  );

  return (
    <div className="py-12 overflow-hidden duration-300 sm:py-0 dark:bg-black dark:text-white">
      <div className="relative flex items-center justify-center w-full h-screen bg-white dark:bg-black dark:text-white">
        <Particles id={props.id} init={particlesLoaded} options={options} />
        <img src={image} alt="Hero Image" className="absolute bottom 50 sm:bottom" />
      </div>
    </div>
  );
};

export default Hero;
