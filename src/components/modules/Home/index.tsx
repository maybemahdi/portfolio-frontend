import React from "react";
import HeroSection from "./HeroSection";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Experience from "./Experience";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <About />
      <Skills />
      <Projects />
      <Experience />
    </div>
  );
};

export default Home;
