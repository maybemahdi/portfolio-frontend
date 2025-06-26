"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ExternalLink,
  Github,
  Play,
  Star,
  Users,
  TrendingUp,
  Zap,
  Eye,
  Heart,
  Code2,
  Sparkles,
} from "lucide-react";
import Link from "next/link";
import { socialLinks } from "@/lib/importantLinks";

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce solution with real-time inventory management, payment processing, and admin dashboard.",
      image:
        "https://res.cloudinary.com/du68mtlti/image/upload/v1750956985/%EF%B8%8F_vqhlcv.jpg",
      featured: true,
      tech: ["React", "Node.js", "PostgreSQL", "Stripe", "Redis"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      stats: { users: "10K+", rating: 4.8, views: "25K" },
      status: "Live",
      year: "2024",
      gradient: "from-blue-500 to-purple-600",
    },
    {
      id: 2,
      title: "Task Management App",
      description:
        "Collaborative project management tool with real-time updates, team chat, and advanced analytics.",
      image:
        "https://res.cloudinary.com/du68mtlti/image/upload/v1750956985/%EF%B8%8F_vqhlcv.jpg",
      featured: false,
      tech: ["Next.js", "TypeScript", "Prisma", "Socket.io"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      stats: { users: "5K+", rating: 4.9, views: "15K" },
      status: "Live",
      year: "2024",
      gradient: "from-green-500 to-teal-600",
    },
    {
      id: 3,
      title: "AI Chat Assistant",
      description:
        "Intelligent chatbot with natural language processing, context awareness, and multi-language support.",
      image:
        "https://res.cloudinary.com/du68mtlti/image/upload/v1750956985/%EF%B8%8F_vqhlcv.jpg",
      featured: true,
      tech: ["Python", "OpenAI", "FastAPI", "React", "WebSocket"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      stats: { users: "15K+", rating: 4.6, views: "30K" },
      status: "Beta",
      year: "2024",
      gradient: "from-purple-500 to-pink-600",
    },
    {
      id: 4,
      title: "Analytics Dashboard",
      description:
        "Real-time analytics platform with interactive charts, data visualization, and automated reporting features.",
      image:
        "https://res.cloudinary.com/du68mtlti/image/upload/v1750956985/%EF%B8%8F_vqhlcv.jpg",
      featured: false,
      tech: ["React", "D3.js", "Node.js", "MongoDB", "Chart.js"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      stats: { users: "8K+", rating: 4.7, views: "20K" },
      status: "Live",
      year: "2023",
      gradient: "from-orange-500 to-red-600",
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

  const projectCardVariants = {
    hidden: { scale: 0.9, opacity: 0, y: 30 },
    visible: {
      scale: 1,
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <div id="projects" className="min-h-screen bg-background">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-40 -right-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.7, 0.4],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 2,
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-primary/3 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 12,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 4,
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
            className="text-center space-y-6 mb-20"
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
                <Code2 className="h-3 w-3 mr-1" />
                My Work
              </Badge>
            </motion.div>
            <motion.h1
              className="text-4xl md:text-6xl font-bold"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ type: "spring", stiffness: 100, delay: 0.3 }}
            >
              Featured{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Projects
              </span>
            </motion.h1>
            <motion.p
              className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              A showcase of my recent web applications, from e-commerce
              platforms to AI-powered tools and everything in between
            </motion.p>
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            className="grid lg:grid-cols-2 gap-8 mb-16"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.15,
                },
              },
            }}
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={projectCardVariants}
                whileHover={{
                  y: -15,
                  transition: { type: "spring", stiffness: 300, damping: 20 },
                }}
                className="group"
              >
                <Card
                  className={`overflow-hidden hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br ${
                    project.featured
                      ? "from-primary/10 via-accent/5 to-primary/5 ring-2 ring-primary/20"
                      : "from-muted/30 to-background"
                  }`}
                >
                  <CardContent className="p-0">
                    {/* Image Section */}
                    <div className="relative overflow-hidden">
                      <motion.div
                        className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20 z-10`}
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 30 }}
                        transition={{ duration: 0.3 }}
                      />
                      <motion.img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-64 object-cover"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                      />

                      {/* Overlay Content */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 z-20"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                      />

                      {/* Action Buttons */}
                      <motion.div
                        className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-500 z-30 bg-black/40 w-full"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        transition={{
                          duration: 0.5,
                          ease: "easeInOut",
                        }}
                      >
                        <motion.div
                          whileHover={{ scale: 1.08 }}
                          whileTap={{ scale: 0.96 }}
                          transition={{ type: "spring", stiffness: 250 }}
                        >
                          <Link
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Button
                              size="lg"
                              className="bg-white/20 backdrop-blur-md hover:bg-white/30 border-white/20 text-white hover:text-primary transition-all duration-300"
                            >
                              <Play className="h-5 w-5 mr-2" />
                              Live Demo
                            </Button>
                          </Link>
                        </motion.div>
                        {project.githubUrl && (
                          <motion.div
                            whileHover={{ scale: 1.08 }}
                            whileTap={{ scale: 0.96 }}
                            transition={{ type: "spring", stiffness: 250 }}
                          >
                            <Link
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <Button
                                size="lg"
                                variant="outline"
                                className="bg-white/20 backdrop-blur-md hover:bg-white/30 border-white/30 text-white hover:text-primary transition-all duration-300"
                              >
                                <Github className="h-5 w-5 mr-2" />
                                Code
                              </Button>
                            </Link>
                          </motion.div>
                        )}
                      </motion.div>

                      {/* Status & Featured Badges */}
                      <div className="absolute top-4 left-4 flex gap-2 z-30">
                        {project.featured && (
                          <motion.div
                            initial={{ scale: 0, rotate: -180 }}
                            animate={{ scale: 1, rotate: 0 }}
                            transition={{
                              type: "spring",
                              stiffness: 200,
                              delay: index * 0.1 + 0.5,
                            }}
                          >
                            <Badge className="bg-gradient-to-r from-primary to-accent text-white shadow-lg">
                              <Sparkles className="h-3 w-3 mr-1" />
                              Featured
                            </Badge>
                          </motion.div>
                        )}
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: index * 0.1 + 0.6 }}
                        >
                          <Badge
                            variant={
                              project.status === "Live"
                                ? "default"
                                : "secondary"
                            }
                            className={`${
                              project.status === "Live"
                                ? "bg-green-500 hover:bg-green-600"
                                : "bg-orange-500 hover:bg-orange-600"
                            } text-white shadow-lg`}
                          >
                            {project.status}
                          </Badge>
                        </motion.div>
                      </div>

                      {/* Year Badge */}
                      <div className="absolute top-4 right-4 z-30">
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: index * 0.1 + 0.7 }}
                        >
                          <Badge
                            variant="outline"
                            className="bg-white/10 backdrop-blur-md border-white/30 text-white"
                          >
                            {project.year}
                          </Badge>
                        </motion.div>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="p-8 space-y-6">
                      {/* Title & Description */}
                      <div className="space-y-3">
                        <motion.h3
                          className="text-2xl font-bold group-hover:text-primary transition-colors duration-300"
                          initial={{ x: -20, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ delay: index * 0.1 + 0.8 }}
                        >
                          {project.title}
                        </motion.h3>
                        <motion.p
                          className="text-muted-foreground leading-relaxed"
                          initial={{ y: 20, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ delay: index * 0.1 + 0.9 }}
                        >
                          {project.description}
                        </motion.p>
                      </div>

                      {/* Tech Stack */}
                      <motion.div
                        className="space-y-3"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: index * 0.1 + 1 }}
                      >
                        <h4 className="text-sm font-semibold text-muted-foreground flex items-center gap-2">
                          <Code2 className="h-4 w-4" />
                          Tech Stack
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((tech, techIndex) => (
                            <motion.div
                              key={tech}
                              initial={{ scale: 0, opacity: 0 }}
                              animate={{ scale: 1, opacity: 1 }}
                              transition={{
                                delay: index * 0.1 + 1.1 + techIndex * 0.05,
                                type: "spring",
                                stiffness: 200,
                              }}
                              whileHover={{ scale: 1.1, y: -2 }}
                            >
                              <Badge
                                variant="secondary"
                                className="text-xs hover:bg-primary hover:text-white transition-all duration-300 cursor-default"
                              >
                                {tech}
                              </Badge>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>

                      {/* Stats */}
                      <motion.div
                        className="grid grid-cols-3 gap-4 py-4 border-y border-border/50"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: index * 0.1 + 1.2 }}
                      >
                        <motion.div
                          className="text-center group/stat"
                          whileHover={{ scale: 1.05 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <div className="flex items-center justify-center gap-1 text-primary mb-1">
                            <Users className="h-4 w-4 group-hover/stat:scale-110 transition-transform" />
                            <span className="font-bold">
                              {project.stats.users}
                            </span>
                          </div>
                          <div className="text-xs text-muted-foreground">
                            Users
                          </div>
                        </motion.div>
                        <motion.div
                          className="text-center group/stat"
                          whileHover={{ scale: 1.05 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <div className="flex items-center justify-center gap-1 text-primary mb-1">
                            <Star className="h-4 w-4 group-hover/stat:scale-110 transition-transform" />
                            <span className="font-bold">
                              {project.stats.rating}
                            </span>
                          </div>
                          <div className="text-xs text-muted-foreground">
                            Rating
                          </div>
                        </motion.div>
                        <motion.div
                          className="text-center group/stat"
                          whileHover={{ scale: 1.05 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <div className="flex items-center justify-center gap-1 text-primary mb-1">
                            <Eye className="h-4 w-4 group-hover/stat:scale-110 transition-transform" />
                            <span className="font-bold">
                              {project.stats.views}
                            </span>
                          </div>
                          <div className="text-xs text-muted-foreground">
                            Views
                          </div>
                        </motion.div>
                      </motion.div>

                      {/* Action Footer */}
                      <motion.div
                        className="flex items-center justify-between"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: index * 0.1 + 1.3 }}
                      >
                        <div className="flex items-center gap-2">
                          <motion.div
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.9 }}
                            className="cursor-pointer"
                          >
                            <Heart className="h-5 w-5 text-muted-foreground hover:text-red-500 hover:fill-red-500 transition-all duration-300" />
                          </motion.div>
                          <motion.div
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.9 }}
                            className="cursor-pointer"
                          >
                            <TrendingUp className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors duration-300" />
                          </motion.div>
                        </div>
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Button
                            variant="ghost"
                            size="sm"
                            className="text-primary hover:bg-primary/10"
                          >
                            View Details
                            <ExternalLink className="h-4 w-4 ml-2" />
                          </Button>
                        </motion.div>
                      </motion.div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Call to Action */}
          <motion.div
            className="mt-20"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
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
                <CardContent className="relative p-12 text-center space-y-8">
                  <motion.div
                    className="w-20 h-20 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mx-auto"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.8 }}
                  >
                    <Zap className="h-10 w-10 text-white" />
                  </motion.div>
                  <div className="space-y-4">
                    <h3 className="text-3xl font-bold">
                      Ready to Start Your Project?
                    </h3>
                    <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
                      I&apos;m always excited to work on new challenges and
                      bring innovative ideas to life. Let&apos;s discuss your
                      vision and create something amazing together!
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
                      <Link href="#contact">
                        <Button size="lg" className="group text-lg px-8 py-6">
                          Let&apos;s Work Together
                          <motion.div
                            className="ml-2"
                            whileHover={{ x: 5 }}
                            transition={{ type: "spring", stiffness: 300 }}
                          >
                            <ExternalLink className="h-5 w-5" />
                          </motion.div>
                        </Button>
                      </Link>
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Link href={socialLinks.github} target="_blank">
                        <Button
                          variant="outline"
                          size="lg"
                          className="text-lg px-8 py-6"
                        >
                          View All Projects
                          <TrendingUp className="h-5 w-5 ml-2" />
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
