"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Code2,
  Database,
  Palette,
  Wrench,
  Star,
  Award,
  BookOpen,
  Sparkles,
} from "lucide-react";

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("frontend");

  const skillCategories = {
    frontend: {
      title: "Frontend",
      icon: <Code2 className="h-5 w-5" />,
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: "React", level: 95, icon: "⚛️" },
        { name: "Next.js", level: 90, icon: "▲" },
        { name: "TypeScript", level: 88, icon: "📘" },
        { name: "Tailwind CSS", level: 92, icon: "🎨" },
        { name: "JavaScript", level: 94, icon: "🟨" },
        { name: "HTML/CSS", level: 96, icon: "🌐" },
      ],
    },
    backend: {
      title: "Backend",
      icon: <Database className="h-5 w-5" />,
      color: "from-green-500 to-emerald-500",
      skills: [
        { name: "Node.js", level: 85, icon: "🟢" },
        { name: "Prisma", level: 80, icon: "🔧" },
        { name: "PostgreSQL", level: 82, icon: "🐘" },
        { name: "MongoDB", level: 78, icon: "🍃" },
        { name: "Express.js", level: 83, icon: "🚀" },
        { name: "Mongoose", level: 75, icon: "🌳" },
      ],
    },
    design: {
      title: "Design",
      icon: <Palette className="h-5 w-5" />,
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: "Figma", level: 88, icon: "🎯" },
        { name: "Adobe XD", level: 82, icon: "🔷" },
        { name: "Photoshop", level: 75, icon: "🖼️" },
        { name: "UI/UX Design", level: 85, icon: "✨" },
        { name: "Prototyping", level: 87, icon: "🔧" },
        { name: "Design Systems", level: 83, icon: "📐" },
      ],
    },
    tools: {
      title: "Tools & Others",
      icon: <Wrench className="h-5 w-5" />,
      color: "from-orange-500 to-red-500",
      skills: [
        { name: "Git", level: 90, icon: "🌿" },
        { name: "Docker", level: 78, icon: "🐳" },
        { name: "AWS", level: 72, icon: "☁️" },
        { name: "Vercel", level: 88, icon: "▲" },
        { name: "VS Code", level: 95, icon: "💙" },
        { name: "Linux", level: 80, icon: "🐧" },
      ],
    },
  };

const currentlyLearning = [
    { name: "Golang", icon: "🐹", progress: 35 },
    { name: "Three.js", icon: "🎮", progress: 60 },
    { name: "Machine Learning", icon: "🤖", progress: 45 },
];

  const achievements = [
    { title: "Black-Belt", icon: "🥋", year: "2024" },
    { title: "Full-Stack Master", icon: "🚀", year: "2025" },
    { title: "Reactive Developer", icon: "⚛️", year: "2025" },
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

  const itemVariants = {
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

  const skillCardVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 15,
      },
    },
    exit: {
      scale: 0.8,
      opacity: 0,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <div id="skills" className="min-h-screen bg-background">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-40 -left-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute -bottom-40 -right-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 1,
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-primary/3 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 6,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </div>

      <motion.div
        className="relative py-20 px-4"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="container mx-auto max-w-6xl">
          {/* Header */}
          <motion.div
            className="text-center space-y-6 mb-16"
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
                My Expertise
              </Badge>
            </motion.div>
            <motion.h1
              className="text-4xl md:text-5xl font-bold"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ type: "spring", stiffness: 100, delay: 0.3 }}
            >
              Skills &{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Technologies
              </span>
            </motion.h1>
            <motion.p
              className="text-xl text-muted-foreground max-w-2xl mx-auto"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              A comprehensive overview of my technical skills and the tools I
              use to bring ideas to life
            </motion.p>
          </motion.div>

          {/* Category Tabs */}
          <motion.div
            className="flex flex-wrap justify-center gap-2 mb-12"
            variants={itemVariants}
          >
            {Object.entries(skillCategories).map(([key, category], index) => (
              <motion.div
                key={key}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant={activeCategory === key ? "default" : "outline"}
                  onClick={() => setActiveCategory(key)}
                  className={`group transition-all duration-300 ${
                    activeCategory === key
                      ? "bg-gradient-to-r from-primary to-accent text-white shadow-lg"
                      : "hover:bg-primary/10"
                  }`}
                >
                  <motion.span
                    className="group-hover:rotate-12 transition-transform"
                    whileHover={{ rotate: 12 }}
                  >
                    {category.icon}
                  </motion.span>
                  <span className="ml-2">{category.title}</span>
                </Button>
              </motion.div>
            ))}
          </motion.div>

          {/* Skills Grid */}
          <motion.div className="mb-16" variants={itemVariants}>
            <motion.div
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="overflow-hidden border-primary/10 hover:shadow-2xl transition-all duration-500">
                <CardContent className="p-8">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeCategory}
                      className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      variants={{
                        hidden: { opacity: 0 },
                        visible: {
                          opacity: 1,
                          transition: {
                            staggerChildren: 0.1,
                          },
                        },
                        exit: { opacity: 0 },
                      }}
                    >
                      {skillCategories[
                        activeCategory as keyof typeof skillCategories
                      ].skills.map((skill, index) => (
                        <motion.div
                          key={skill.name}
                          variants={skillCardVariants}
                          whileHover={{
                            y: -5,
                            transition: { type: "spring", stiffness: 300 },
                          }}
                          className="group relative overflow-hidden rounded-xl p-4 bg-gradient-to-br from-muted/30 to-muted/10 hover:from-primary/5 hover:to-accent/5 transition-all duration-300"
                        >
                          <div className="flex items-center justify-between mb-3">
                            <div className="flex items-center gap-3">
                              <motion.span
                                className="text-2xl"
                                whileHover={{ scale: 1.2, rotate: 10 }}
                                transition={{ type: "spring", stiffness: 300 }}
                              >
                                {skill.icon}
                              </motion.span>
                              <span className="font-semibold">
                                {skill.name}
                              </span>
                            </div>
                            <motion.div
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              transition={{ delay: index * 0.1 + 0.3 }}
                            >
                              <Badge variant="secondary" className="text-xs">
                                {/* {skill.level}% */}
                                Growing
                              </Badge>
                            </motion.div>
                          </div>

                          {/* Progress Bar */}
                          <div className="relative h-2 bg-muted rounded-full overflow-hidden">
                            <motion.div
                              className={`absolute top-0 left-0 h-full bg-gradient-to-r ${
                                skillCategories[
                                  activeCategory as keyof typeof skillCategories
                                ].color
                              } rounded-full`}
                              initial={{ width: 0 }}
                              animate={{ width: `${skill.level}%` }}
                              transition={{
                                duration: 1,
                                delay: index * 0.1 + 0.5,
                                ease: "easeOut",
                              }}
                            />
                            <motion.div
                              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                              initial={{ x: "-100%" }}
                              animate={{ x: "100%" }}
                              transition={{
                                duration: 1.5,
                                delay: index * 0.1 + 1,
                                ease: "easeInOut",
                              }}
                            />
                          </div>
                        </motion.div>
                      ))}
                    </motion.div>
                  </AnimatePresence>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>

          {/* Currently Learning & Achievements */}
          <motion.div
            className="grid lg:grid-cols-2 gap-8 mb-16"
            variants={itemVariants}
          >
            {/* Currently Learning */}
            <motion.div
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card className="group hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <motion.h3
                    className="text-xl font-semibold mb-6 flex items-center gap-2"
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.8 }}
                  >
                    <motion.div
                      className="w-8 h-8 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <BookOpen className="h-4 w-4 text-white" />
                    </motion.div>
                    Currently Learning
                  </motion.h3>
                  <div className="space-y-4">
                    {currentlyLearning.map((item, index) => (
                      <motion.div
                        key={item.name}
                        initial={{ x: -50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.9 + index * 0.1 }}
                        whileHover={{ scale: 1.02 }}
                        className="relative overflow-hidden rounded-lg p-4 bg-gradient-to-r from-muted/20 to-muted/10 group/item hover:from-primary/5 hover:to-accent/5 transition-all duration-300"
                      >
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-3">
                            <motion.span
                              className="text-xl"
                              whileHover={{ y: -2 }}
                              transition={{ type: "spring", stiffness: 300 }}
                            >
                              {item.icon}
                            </motion.span>
                            <span className="font-medium">{item.name}</span>
                          </div>
                          <Badge variant="outline" className="text-xs">
                            {item.progress}%
                          </Badge>
                        </div>
                        <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                          <motion.div
                            className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                            initial={{ width: 0 }}
                            animate={{ width: `${item.progress}%` }}
                            transition={{
                              duration: 1,
                              delay: 1 + index * 0.2,
                              ease: "easeOut",
                            }}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Achievements */}
            <motion.div
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card className="group hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <motion.h3
                    className="text-xl font-semibold mb-6 flex items-center gap-2"
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.8 }}
                  >
                    <motion.div
                      className="w-8 h-8 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Award className="h-4 w-4 text-white" />
                    </motion.div>
                    Achievements
                  </motion.h3>
                  <div className="space-y-4">
                    {achievements.map((achievement, index) => (
                      <motion.div
                        key={achievement.title}
                        initial={{ x: 50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.9 + index * 0.1 }}
                        whileHover={{ scale: 1.05 }}
                        className="flex items-center gap-4 p-4 rounded-lg bg-gradient-to-r from-muted/20 to-muted/10 group/achievement hover:from-primary/5 hover:to-accent/5 transition-all duration-300"
                      >
                        <motion.div
                          className="w-12 h-12 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full flex items-center justify-center text-xl"
                          whileHover={{ rotate: 12, scale: 1.1 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          {achievement.icon}
                        </motion.div>
                        <div className="flex-1">
                          <div className="font-semibold">
                            {achievement.title}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            {achievement.year}
                          </div>
                        </div>
                        <motion.div
                          whileHover={{ rotate: 180, scale: 1.2 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <Star className="h-5 w-5 text-primary group-hover/achievement:fill-primary transition-all" />
                        </motion.div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>

          {/* Skills Summary */}
          <motion.div variants={itemVariants}>
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card className="relative overflow-hidden bg-gradient-to-r from-primary/5 via-accent/10 to-primary/5 border-primary/20 hover:shadow-2xl transition-all duration-500 group">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                />
                <CardContent className="relative p-8 text-center space-y-6">
                  <div className="space-y-2">
                    <motion.div
                      className="flex justify-center"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{
                        type: "spring",
                        stiffness: 200,
                        delay: 1.2,
                      }}
                    >
                      <motion.div
                        className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mb-4"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.8 }}
                      >
                        <Sparkles className="h-8 w-8 text-white" />
                      </motion.div>
                    </motion.div>
                    <motion.h3
                      className="text-2xl font-semibold"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 1.3 }}
                    >
                      Always Growing
                    </motion.h3>
                  </div>
                  <motion.p
                    className="text-muted-foreground max-w-2xl mx-auto leading-relaxed"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1.4 }}
                  >
                    Technology never stops evolving, and neither do I. I&apos;m
                    constantly learning new skills, exploring emerging
                    technologies, and pushing the boundaries of what&apos;s
                    possible in web development.
                  </motion.p>
                  <motion.div
                    className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6"
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1.5 }}
                  >
                    {[
                      { number: "20+", label: "Technologies" },
                      { number: "115+", label: "Github Repo" },
                      { number: "3", label: "Certifications" },
                      { number: "∞", label: "Learning" },
                    ].map((stat, index) => (
                      <motion.div
                        key={stat.label}
                        className="text-center"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{
                          delay: 1.6 + index * 0.1,
                          type: "spring",
                          stiffness: 200,
                        }}
                        whileHover={{ scale: 1.1 }}
                      >
                        <div className="text-2xl font-bold text-primary">
                          {stat.number}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {stat.label}
                        </div>
                      </motion.div>
                    ))}
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
