import React, { useState, useEffect } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Banner from "./Components/Banner/Banner";
import About from "./Components/About/About";
import Banner2 from "./Components/Banner/Banner2";
import Features from "./Components/Features/Features";
import Footer from "./Components/Footer/Footer";


import AOS from "aos";
import "aos/dist/aos.css";
import Banner3 from "./Components/Banner/Banner3";

const App = () => {
  const [isPlay, setIsPlay] = useState(false);

  const togglePlay = () => {
    setIsPlay(!isPlay);
  };

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <main className="overflow-x-hidden text-black duration-300 bg-white dark:bg-black dark:text-white">
      <Navbar />
      <Hero togglePlay={togglePlay} />

      <About />
      <Banner togglePlay={togglePlay} />
      <Banner2 togglePlay={togglePlay} />
      <Banner3 togglePlay={togglePlay} />
      <Features />
      <Footer />

    </main>
  );
};

export default App;
