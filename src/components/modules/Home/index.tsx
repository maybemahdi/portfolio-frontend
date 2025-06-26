import React from "react";
import HeroSection from "./HeroSection";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Experience from "./Experience";
import Contact from "./contact";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
    </div>
  );
};

export default Home;
