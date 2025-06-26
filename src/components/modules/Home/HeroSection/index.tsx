"use client";
import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.2, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 60 } },
};

const HeroSection = () => {
  return (
    <motion.div
      style={{ height: "calc(100vh - 50px)" }}
      className="flex items-center justify-center gap-8 my-10 -mt-20 px-0 md:px-0"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="flex flex-col items-center justify-center gap-4">
        <motion.h5
          variants={itemVariants}
          className="text-primary-foreground/80 tracking-[5px] text-sm text-center"
        >
          Hello World
        </motion.h5>
        <motion.h2
          variants={itemVariants}
          className="text-4xl md:text-6xl font-bold text-center"
        >
          I am{" "}
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Mahdi Hasan
          </span>
        </motion.h2>
        <motion.h3
          variants={itemVariants}
          className="text-2xl md:text-3xl font-normal text-center tracking-[6px]"
        >
          <Typewriter
            cursor
            cursorBlinking
            delaySpeed={1000}
            deleteSpeed={25}
            loop={0}
            typeSpeed={75}
            words={[
              "Programmer",
              "Full-Stack Developer",
              "Software Engineer",
              "JavaScript Developer",
              "React.js Developer",
              "Node.js Developer",
              "Next.js Developer",
              "MERN Stack Developer",
              "Problem Solver",
              "Technology Enthusiast",
              "Web Developer",
            ]}
          />
        </motion.h3>
      </div>
    </motion.div>
  );
};

export default HeroSection;
