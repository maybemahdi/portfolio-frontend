"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { email, socialLinks } from "@/lib/importantLinks";
import {
  ArrowRight,
  Coffee,
  Download,
  Github,
  Heart,
  Linkedin,
  Mail,
  MapPin,
  Music,
  Sparkles,
  Target,
  Tv2,
  Zap,
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export const About = () => {
  const philosophy = [
    {
      icon: <Heart className="h-5 w-5" />,
      title: "User-First Mindset",
      description:
        "Every line of code should serve a purpose and enhance the user experience",
    },
    {
      icon: <Zap className="h-5 w-5" />,
      title: "Continuous Learning",
      description:
        "Technology evolves fast, and so do I. Always exploring new tools and techniques",
    },
    {
      icon: <Target className="h-5 w-5" />,
      title: "Quality Over Quantity",
      description: "I'd rather build one amazing thing than ten mediocre ones",
    },
    {
      icon: <Sparkles className="h-5 w-5" />,
      title: "Details Matter",
      description:
        "The magic is in the micro-interactions and thoughtful touches",
    },
  ];

  const interests = [
    {
      icon: (
        <span role="img" aria-label="Football" className="h-5 w-5">
          ⚽
        </span>
      ),
      label: "Football",
      color: "from-green-500/20 to-lime-500/20",
    },
    {
      icon: (
        <span role="img" aria-label="Chess" className="h-5 w-5">
          ♟️
        </span>
      ),
      label: "Chess",
      color: "from-gray-500/20 to-slate-500/20",
    },
    {
      icon: <Coffee className="h-5 w-5 text-amber-700" />,
      label: "Tea Enthusiast",
      color: "from-amber-500/20 to-orange-500/20",
    },
    {
      icon: <Music className="h-5 w-5" />,
      label: "Listening to Music",
      color: "from-purple-500/20 to-pink-500/20",
    },
    {
      icon: <Tv2 className="h-5 w-5 text-emerald-700" />,
      label: "Movies & TV Shows",
      color: "from-blue-500/20 to-cyan-500/20",
    },
  ];

  return (
    <div id="about" className="min-h-screen bg-background">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative py-20 px-4 md:px-0">
        <div className="container mx-auto max-w-6xl">
          {/* Main About Section */}
          <div className="grid lg:grid-cols-3 gap-12 mb-16">
            {/* Profile Image & Quick Info */}
            <motion.div
              className="lg:col-span-1 space-y-6"
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-2xl blur opacity-25 group-hover:opacity-40 transition-opacity" />
                <div className="relative aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-primary/10 via-accent/20 to-primary/5 p-1">
                  <img
                    src="https://res.cloudinary.com/du68mtlti/image/upload/v1759511752/WhatsApp_Image_2025-10-03_at_8.23.13_PM_b1tat3.jpg"
                    alt="Mahdi Hasan Mahi"
                    className="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center shadow-lg animate-bounce">
                  <span className="text-2xl">👋</span>
                </div>
              </div>

              <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-primary/10">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4 text-primary" />
                    Sylhet, Bangladesh
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-green-600 font-medium">
                      Available for work
                    </span>
                  </div>
                  <div className="flex gap-2 pt-2">
                    <Button size="sm" className="flex-1 group/btn">
                      <Download className="h-4 w-4 mr-2 group-hover/btn:translate-y-0.5 transition-transform" />
                      Download Resume
                    </Button>
                    <Link href={`mailto:${email}`} target="_blank">
                      <Button size="sm" variant="outline" className="group/btn">
                        <Mail className="h-4 w-4 group-hover/btn:rotate-12 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Main Content */}
            <motion.div
              className="lg:col-span-2 space-y-8"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            >
              <div className="space-y-6">
                <Badge
                  variant="secondary"
                  className="w-fit bg-primary/10 text-primary border-primary/20"
                >
                  About Me
                </Badge>
                <div className="space-y-4">
                  <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                    Hey, I&apos;m{" "}
                    <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                      Mahdi Hasan
                    </span>
                  </h1>
                  <p className="text-xl text-muted-foreground leading-relaxed">
                    A passionate full-stack software developer who loves turning
                    complex problems into simple, beautiful solutions.
                  </p>
                </div>
              </div>

              <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
                <p className="leading-relaxed">
                  I&apos;ve been crafting digital experiences for over 2 years,
                  specializing in modern web technologies and user-centered
                  design. When I&apos;m not coding, you&apos;ll find me
                  exploring new places, playing football, or capturing moments
                  through my camera lens.
                </p>
                <p className="leading-relaxed">
                  I believe great software should feel invisible to the user
                  while being robust under the hood. My approach combines
                  technical expertise with creative problem-solving to deliver
                  solutions that not only work flawlessly but also delight
                  users.
                </p>
              </div>

              {/* Enhanced Quick Stats */}
              <motion.div
                className="grid grid-cols-3 gap-6 py-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.4 }}
              >
                <div className="text-center group">
                  <div className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent group-hover:scale-110 transition-transform">
                    50+
                  </div>
                  <div className="text-sm text-muted-foreground font-medium">
                    Projects
                  </div>
                </div>
                <div className="text-center group">
                  <div className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent group-hover:scale-110 transition-transform">
                    2+
                  </div>
                  <div className="text-sm text-muted-foreground font-medium">
                    Years
                  </div>
                </div>
                <div className="text-center group">
                  <div className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent group-hover:scale-110 transition-transform">
                    ∞
                  </div>
                  <div className="text-sm text-muted-foreground font-medium">
                    Tea Cups
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Philosophy & Interests */}
          <motion.div
            className="grid md:grid-cols-2 gap-8 mb-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          >
            {/* My Philosophy */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
            >
              <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                    <div className="w-8 h-8 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center">
                      <Sparkles className="h-4 w-4 text-white" />
                    </div>
                    My Philosophy
                  </h3>
                  <div className="space-y-4">
                    {philosophy.map((item, index) => (
                      <div
                        key={index}
                        className="flex gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors group/item"
                      >
                        <div className="text-primary mt-0.5 group-hover/item:scale-110 transition-transform">
                          {item.icon}
                        </div>
                        <div className="space-y-1">
                          <div className="font-medium text-sm">
                            {item.title}
                          </div>
                          <div className="text-xs text-muted-foreground leading-relaxed">
                            {item.description}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Interests */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.4 }}
            >
              <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-6">
                    When I&apos;m Not Coding
                  </h3>
                  <div className="space-y-4">
                    {interests.map((interest, index) => (
                      <motion.div
                        key={index}
                        className={`relative overflow-hidden rounded-xl p-4 bg-gradient-to-r ${interest.color} border border-white/10 group/interest hover:scale-105 transition-all duration-300`}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 * index }}
                      >
                        <div className="flex items-center gap-3">
                          <div className="text-primary group-hover/interest:rotate-12 transition-transform">
                            {interest.icon}
                          </div>
                          <span className="font-medium">{interest.label}</span>
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover/interest:translate-x-full transition-transform duration-1000" />
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>

          {/* Enhanced Current Focus */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
          >
            <Card className="relative overflow-hidden bg-gradient-to-r from-primary/5 via-accent/10 to-primary/5 border-primary/20 hover:shadow-2xl transition-all duration-500 group">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <CardContent className="relative p-8 text-center space-y-6">
                <div className="space-y-2">
                  <Badge
                    variant="secondary"
                    className="bg-primary/10 text-primary border-primary/20"
                  >
                    Currently Building
                  </Badge>
                  <h3 className="text-2xl font-semibold">Something Amazing</h3>
                </div>
                <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                  Working on an AI-powered productivity app that helps
                  developers manage their workflow more efficiently. Always
                  excited to discuss new opportunities and interesting projects!
                </p>
                <div className="flex flex-wrap justify-center gap-4 pt-4">
                  <Button className="group/btn">
                    Let&apos;s Chat
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                  <Link href={socialLinks.github} target="_blank">
                    <Button variant="outline" className="group/btn">
                      <Github className="h-4 w-4 mr-2 group-hover/btn:rotate-12 transition-transform" />
                      GitHub
                    </Button>
                  </Link>
                  <Link href={socialLinks.linkedin} target="_blank">
                    <Button variant="outline" className="group/btn">
                      <Linkedin className="h-4 w-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                      LinkedIn
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
