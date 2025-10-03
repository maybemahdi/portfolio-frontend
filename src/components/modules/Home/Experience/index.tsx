"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Building2,
  Calendar,
  MapPin,
  TrendingUp,
  Award,
  Users,
  Code,
  Rocket,
  Star,
  Briefcase,
  ChevronRight,
  ExternalLink,
  Zap,
  Globe,
  Heart,
} from "lucide-react";
import type { Variants } from "framer-motion";
import { easeInOut } from "framer-motion";
import Link from "next/link";

export default function Experience() {
  const [activeExperience, setActiveExperience] = useState(0);

  const experiences = [
    {
      id: 1,
      company: "SM Technology @Betopia",
      logo: "https://res.cloudinary.com/du68mtlti/image/upload/v1748019355/blogs/1748019339292-profile.jpg.png",
      position: "Web Developer",
      duration: "2024 - Present",
      location: "Dhaka, Bangladesh",
      type: "Full-time",
      description:
        "Leading development of enterprise-scale web applications, mentoring junior developers, and architecting scalable solutions for Fortune 500 clients.",
      achievements: [
        "Increased application performance by 40% through optimization",
        "Led a team of 5 developers on critical client projects",
        "Implemented CI/CD pipelines reducing deployment time by 60%",
        "Mentored 8+ junior developers, with 3 receiving promotions",
      ],
      technologies: [
        "React",
        "Node.js",
        "AWS",
        "Docker",
        "TypeScript",
        "PostgreSQL",
      ],
      highlights: {
        projects: "12+",
        teamSize: "5",
        impact: "40%",
      },
      color: "from-blue-500 to-cyan-500",
      current: true,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
      },
    },
  };

  const timelineVariants = {
    hidden: { scaleY: 0 },
    visible: {
      scaleY: 1,
      transition: {
        duration: 1.5,
        ease: easeInOut,
      },
    },
  };

  return (
    <div id="experience" className="min-h-screen bg-background overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-40 -left-40 w-80 h-80 md:w-96 md:h-96 bg-primary/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
            x: [0, 30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute -bottom-40 -right-40 w-80 h-80 md:w-96 md:h-96 bg-accent/10 rounded-full blur-3xl"
          animate={{
            scale: [1.3, 1, 1.3],
            opacity: [0.4, 0.7, 0.4],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </div>

      <motion.div
        className="relative py-12 md:py-20 px-4 md:px-0"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="container mx-auto max-w-6xl">
          {/* Header */}
          <motion.div
            className="text-center space-y-6 mb-12 md:mb-20"
            variants={itemVariants}
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
            >
              <Badge
                variant="secondary"
                className="bg-primary/10 text-primary border-primary/20"
              >
                <Briefcase className="h-3 w-3 mr-1" />
                Career Journey
              </Badge>
            </motion.div>
            <motion.h1
              className="text-3xl md:text-4xl lg:text-6xl font-bold"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ type: "spring", stiffness: 100, delay: 0.3 }}
            >
              Work{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Experience
              </span>
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              My professional journey through the world of web development, from
              freelancing to leading enterprise projects
            </motion.p>
          </motion.div>

          {/* Experience Timeline - Mobile First Approach */}
          <div className="relative w-full mx-auto">
            {/* Timeline Line - Responsive positioning */}
            <motion.div
              className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary md:transform md:-translate-x-1/2"
              variants={timelineVariants}
              style={{ originY: 0 }}
            />

            {/* Experience Cards */}
            <div className="space-y-8 md:space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  className="relative"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 100,
                    delay: 0.6 + index * 0.2,
                  }}
                  onHoverStart={() => setActiveExperience(index)}
                >
                  {/* Timeline Dot */}
                  <motion.div
                    className="absolute left-4 md:left-1/2 top-8 w-3 h-3 md:w-4 md:h-4 bg-gradient-to-r from-primary to-accent rounded-full md:transform md:-translate-x-1/2 z-10 shadow-lg"
                    whileHover={{ scale: 1.5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full"
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [1, 0.5, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                      }}
                    />
                  </motion.div>

                  {/* Experience Card - Mobile first, then desktop alternating */}
                  <motion.div
                    className={`ml-12 md:ml-0 md:w-5/12 ${
                      index % 2 === 0
                        ? "md:mr-auto md:pr-8"
                        : "md:ml-auto md:pl-8"
                    }`}
                    whileHover={{
                      y: -10,
                      transition: { type: "spring", stiffness: 300 },
                    }}
                  >
                    <Card
                      className={`overflow-hidden hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br ${
                        exp.current
                          ? "from-primary/10 via-accent/5 to-primary/5 ring-2 ring-primary/30"
                          : "from-muted/30 to-background"
                      } group`}
                    >
                      <CardContent className="p-6 md:p-8 space-y-4 md:space-y-6">
                        {/* Company Header */}
                        <div className="flex items-start gap-4">
                          <motion.div
                            className="relative flex-shrink-0"
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.8 }}
                          >
                            <div
                              className={`w-12 h-12 md:w-16 md:h-16 rounded-xl bg-gradient-to-br ${exp.color} p-0.5`}
                            >
                              <img
                                src={exp.logo || "/placeholder.svg"}
                                alt={exp.company}
                                className="w-full h-full object-cover rounded-lg bg-white"
                              />
                            </div>
                            {exp.current && (
                              <motion.div
                                className="absolute -top-1 -right-1 w-5 h-5 md:w-6 md:h-6 bg-green-500 rounded-full flex items-center justify-center"
                                animate={{ scale: [1, 1.2, 1] }}
                                transition={{
                                  duration: 2,
                                  repeat: Number.POSITIVE_INFINITY,
                                }}
                              >
                                <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-white rounded-full" />
                              </motion.div>
                            )}
                          </motion.div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-start justify-between gap-2 mb-2">
                              <h3 className="text-lg md:text-xl font-bold truncate">
                                {exp.company}
                              </h3>
                              {exp.current && (
                                <Badge className="bg-green-500 text-white text-xs flex-shrink-0">
                                  <Zap className="h-3 w-3 mr-1" />
                                  Current
                                </Badge>
                              )}
                            </div>
                            <p className="text-primary font-semibold text-sm md:text-base mb-2">
                              {exp.position}
                            </p>
                            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-xs md:text-sm text-muted-foreground">
                              <div className="flex items-center gap-1">
                                <Calendar className="h-3 w-3 md:h-4 md:w-4" />
                                {exp.duration}
                              </div>
                              <div className="flex items-center gap-1">
                                <MapPin className="h-3 w-3 md:h-4 md:w-4" />
                                {exp.location}
                              </div>
                              <Badge
                                variant="outline"
                                className="text-xs w-fit"
                              >
                                {exp.type}
                              </Badge>
                            </div>
                          </div>
                        </div>

                        {/* Description */}
                        <motion.p
                          className="text-muted-foreground leading-relaxed text-sm md:text-base"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.8 + index * 0.1 }}
                        >
                          {exp.description}
                        </motion.p>

                        {/* Key Achievements */}
                        <motion.div
                          className="space-y-3"
                          initial={{ y: 20, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ delay: 0.9 + index * 0.1 }}
                        >
                          <h4 className="font-semibold flex items-center gap-2 text-sm md:text-base">
                            <Award className="h-4 w-4 text-primary" />
                            Key Achievements
                          </h4>
                          <ul className="space-y-2">
                            {exp.achievements.map((achievement, achIndex) => (
                              <motion.li
                                key={achIndex}
                                className="flex items-start gap-2 text-xs md:text-sm text-muted-foreground"
                                initial={{ x: -10, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{
                                  delay: 1 + index * 0.1 + achIndex * 0.05,
                                }}
                              >
                                <ChevronRight className="h-3 w-3 md:h-4 md:w-4 text-primary mt-0.5 flex-shrink-0" />
                                <span className="leading-relaxed">
                                  {achievement}
                                </span>
                              </motion.li>
                            ))}
                          </ul>
                        </motion.div>

                        {/* Technologies */}
                        <motion.div
                          className="space-y-3"
                          initial={{ y: 20, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ delay: 1.1 + index * 0.1 }}
                        >
                          <h4 className="font-semibold flex items-center gap-2 text-sm md:text-base">
                            <Code className="h-4 w-4 text-primary" />
                            Technologies Used
                          </h4>
                          <div className="flex flex-wrap gap-1.5 md:gap-2">
                            {exp.technologies.map((tech, techIndex) => (
                              <motion.div
                                key={tech}
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{
                                  delay: 1.2 + index * 0.1 + techIndex * 0.05,
                                  type: "spring",
                                  stiffness: 200,
                                }}
                                whileHover={{ scale: 1.1, y: -2 }}
                              >
                                <Badge
                                  variant="secondary"
                                  className="text-xs hover:bg-primary hover:text-white transition-all duration-300"
                                >
                                  {tech}
                                </Badge>
                              </motion.div>
                            ))}
                          </div>
                        </motion.div>

                        {/* Highlights */}
                        <motion.div
                          className="grid grid-cols-3 gap-2 md:gap-4 pt-4 border-t border-border/50"
                          initial={{ y: 20, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ delay: 1.3 + index * 0.1 }}
                        >
                          <motion.div
                            className="text-center group/highlight"
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 300 }}
                          >
                            <div className="flex items-center justify-center gap-1 text-primary mb-1">
                              <Rocket className="h-3 w-3 md:h-4 md:w-4 group-hover/highlight:scale-110 transition-transform" />
                              <span className="font-bold text-sm md:text-base">
                                {exp.highlights.projects}
                              </span>
                            </div>
                            <div className="text-xs text-muted-foreground">
                              Projects
                            </div>
                          </motion.div>
                          <motion.div
                            className="text-center group/highlight"
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 300 }}
                          >
                            <div className="flex items-center justify-center gap-1 text-primary mb-1">
                              <Users className="h-3 w-3 md:h-4 md:w-4 group-hover/highlight:scale-110 transition-transform" />
                              <span className="font-bold text-sm md:text-base">
                                {exp.highlights.teamSize}
                              </span>
                            </div>
                            <div className="text-xs text-muted-foreground">
                              Team Size
                            </div>
                          </motion.div>
                          <motion.div
                            className="text-center group/highlight"
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 300 }}
                          >
                            <div className="flex items-center justify-center gap-1 text-primary mb-1">
                              <TrendingUp className="h-3 w-3 md:h-4 md:w-4 group-hover/highlight:scale-110 transition-transform" />
                              <span className="font-bold text-sm md:text-base">
                                {exp.highlights.impact}
                              </span>
                            </div>
                            <div className="text-xs text-muted-foreground">
                              Impact
                            </div>
                          </motion.div>
                        </motion.div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Career Stats */}
          <motion.div
            className="mt-12 md:mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            {[
              {
                icon: <Building2 className="h-5 w-5 md:h-6 md:w-6" />,
                number: "4+",
                label: "Companies",
                color: "from-blue-500 to-cyan-500",
              },
              {
                icon: <Calendar className="h-5 w-5 md:h-6 md:w-6" />,
                number: "2+",
                label: "Years",
                color: "from-green-500 to-emerald-500",
              },
              {
                icon: <Rocket className="h-5 w-5 md:h-6 md:w-6" />,
                number: "85+",
                label: "Projects",
                color: "from-purple-500 to-pink-500",
              },
              {
                icon: <Star className="h-5 w-5 md:h-6 md:w-6" />,
                number: "50+",
                label: "Happy Clients",
                color: "from-orange-500 to-red-500",
              },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                  delay: 1.6 + index * 0.1,
                  type: "spring",
                  stiffness: 200,
                }}
                whileHover={{ y: -5, scale: 1.05 }}
              >
                <Card className="text-center p-4 md:p-6 hover:shadow-xl transition-all duration-300 group">
                  <CardContent className="p-0 space-y-2 md:space-y-3">
                    <motion.div
                      className={`w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r ${stat.color} rounded-lg flex items-center justify-center text-white mx-auto`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.8 }}
                    >
                      {stat.icon}
                    </motion.div>
                    <div className="text-2xl md:text-3xl font-bold text-primary group-hover:scale-110 transition-transform">
                      {stat.number}
                    </div>
                    <div className="text-xs md:text-sm text-muted-foreground">
                      {stat.label}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Call to Action */}
          <motion.div
            className="mt-12 md:mt-20"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 2 }}
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card className="relative overflow-hidden bg-gradient-to-r from-primary/5 via-accent/10 to-primary/5 border-primary/20 hover:shadow-2xl transition-all duration-500 group">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                />
                <CardContent className="relative p-8 md:p-12 text-center space-y-6 md:space-y-8">
                  <motion.div
                    className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mx-auto"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.8 }}
                  >
                    <Heart className="h-8 w-8 md:h-10 md:w-10 text-white" />
                  </motion.div>
                  <div className="space-y-3 md:space-y-4">
                    <h3 className="text-2xl md:text-3xl font-bold">
                      Let&apos;s Work Together
                    </h3>
                    <p className="text-muted-foreground max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
                      I&apos;m always open to discussing new opportunities,
                      interesting projects, or just having a chat about
                      technology and development.
                    </p>
                  </div>
                  <motion.div
                    className="flex flex-col sm:flex-row gap-4 justify-center"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Link href={"#contact"}>
                        <Button
                          size="lg"
                          className="group text-base md:text-lg px-6 md:px-8 py-4 md:py-6 w-full sm:w-auto"
                        >
                          Get In Touch
                          <motion.div
                            className="ml-2"
                            whileHover={{ x: 5 }}
                            transition={{ type: "spring", stiffness: 300 }}
                          >
                            <ExternalLink className="h-4 w-4 md:h-5 md:w-5" />
                          </motion.div>
                        </Button>
                      </Link>
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Link href={"/resume.pdf"} target="_blank">
                        <Button
                          variant="outline"
                          size="lg"
                          className="text-base md:text-lg px-6 md:px-8 py-4 md:py-6 w-full sm:w-auto bg-transparent"
                        >
                          <Globe className="h-4 w-4 md:h-5 md:w-5 mr-2" />
                          View Resume
                        </Button>
                      </Link>
                    </motion.div>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
