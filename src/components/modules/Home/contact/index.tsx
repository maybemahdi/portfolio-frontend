"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { email, phone, socialLinks } from "@/lib/importantLinks";
import { zodResolver } from "@hookform/resolvers/zod";
import type { Variants } from "framer-motion";
import { AnimatePresence, motion } from "framer-motion";
import {
  AlertCircle,
  AtSign,
  CheckCircle,
  Facebook,
  FileText,
  Github,
  Heart,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  Send,
  Sparkles,
  User,
  Zap
} from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

// Zod validation schema
const contactSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must be less than 50 characters")
    .regex(/^[a-zA-Z\s]+$/, "Name can only contain letters and spaces"),
  email: z.string().email("Please enter a valid email address"),
  subject: z
    .string()
    .min(5, "Subject must be at least 5 characters")
    .max(100, "Subject must be less than 100 characters"),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(1000, "Message must be less than 1000 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    mode: "onChange",
  });

  const watchedFields = watch();

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Simulate random success/error for demo
      if (Math.random() > 0.2) {
        setIsSubmitted(true);
        reset();
      } else {
        throw new Error("Failed to send message. Please try again.");
      }
    } catch (error) {
      setSubmitError(
        error instanceof Error ? error.message : "Something went wrong"
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      label: "Email",
      value: email,
      href: `mailto:${email}`,
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: <Phone className="h-5 w-5" />,
      label: "Phone",
      value: phone,
      href: `tel:${phone}`,
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      label: "Location",
      value: "Sylhet, Bangladesh",
      href: "https://maps.google.com",
      color: "from-purple-500 to-pink-500",
    },
  ];

  const socialPlatforms = [
    {
      icon: <Github className="h-5 w-5" />,
      label: "GitHub",
      href: socialLinks.github,
      color: "hover:bg-gray-900",
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      label: "LinkedIn",
      href: socialLinks.linkedin,
      color: "hover:bg-blue-600",
    },
    {
      icon: <Instagram className="h-5 w-5" />,
      label: "Instagram",
      href: socialLinks.instagram,
      color: "hover:bg-primary",
    },
    {
      icon: <Facebook className="h-5 w-5" />,
      label: "Twitter",
      href: socialLinks.facebook,
      color: "hover:bg-blue-600",
    }
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

  const fieldVariants: Variants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
      },
    },
  };

  return (
    <div id="contact" className="min-h-screen bg-background">
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
          className="absolute top-1/2 left-1/4 w-80 h-80 bg-primary/3 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.2, 0.5, 0.2],
            x: [0, 50, 0],
            y: [0, -30, 0],
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
                <MessageSquare className="h-3 w-3 mr-1" />
                Get In Touch
              </Badge>
            </motion.div>
            <motion.h1
              className="text-4xl md:text-6xl font-bold"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ type: "spring", stiffness: 100, delay: 0.3 }}
            >
              Let&apos;s{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Connect
              </span>
            </motion.h1>
            <motion.p
              className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Have a project in mind or just want to chat? I&apos;d love to hear
              from you. Send me a message and I&apos;ll get back to you as soon
              as possible.
            </motion.p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div className="space-y-8" variants={itemVariants}>
              <motion.div
                className="space-y-6"
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <motion.a
                      key={info.label}
                      href={info.href}
                      className="group block"
                      initial={{ x: -30, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.7 + index * 0.1 }}
                      whileHover={{ x: 5 }}
                    >
                      <Card className="p-4 hover:shadow-lg transition-all duration-300 group-hover:border-primary/30">
                        <CardContent className="p-0 flex items-center gap-4">
                          <motion.div
                            className={`w-12 h-12 bg-gradient-to-r ${info.color} rounded-lg flex items-center justify-center text-white`}
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.8 }}
                          >
                            {info.icon}
                          </motion.div>
                          <div>
                            <div className="font-semibold group-hover:text-primary transition-colors">
                              {info.label}
                            </div>
                            <div className="text-muted-foreground">
                              {info.value}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.a>
                  ))}
                </div>
              </motion.div>

              {/* Social Links */}
              <motion.div
                className="space-y-6"
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 1 }}
              >
                <h3 className="text-xl font-semibold">Follow Me</h3>
                <div className="flex gap-4">
                  {socialPlatforms.map((social, index) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      className={`w-12 h-12 bg-muted rounded-lg flex items-center justify-center text-muted-foreground transition-all duration-300 ${social.color} hover:text-white`}
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{
                        delay: 1.1 + index * 0.1,
                        type: "spring",
                        stiffness: 200,
                      }}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </motion.div>

              {/* Fun Stats */}
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 1.3 }}
              >
                <Card className="p-6 bg-gradient-to-br from-primary/5 to-accent/10 border-primary/20">
                  <CardContent className="p-0 space-y-4">
                    <h3 className="text-lg font-semibold flex items-center gap-2">
                      <Sparkles className="h-5 w-5 text-primary" />
                      Quick Stats
                    </h3>
                    <div className="grid grid-cols-2 gap-4">
                      <motion.div
                        className="text-center"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <div className="text-2xl font-bold text-primary">
                          24h
                        </div>
                        <div className="text-sm text-muted-foreground">
                          Response Time
                        </div>
                      </motion.div>
                      <motion.div
                        className="text-center"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <div className="text-2xl font-bold text-primary">
                          100%
                        </div>
                        <div className="text-sm text-muted-foreground">
                          Client Satisfaction
                        </div>
                      </motion.div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <motion.div
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                <Card className="p-8 hover:shadow-xl transition-all duration-500 border-primary/10">
                  <CardContent className="p-0">
                    <AnimatePresence mode="wait">
                      {isSubmitted ? (
                        <motion.div
                          key="success"
                          initial={{ scale: 0.8, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          exit={{ scale: 0.8, opacity: 0 }}
                          className="text-center space-y-6 py-12"
                        >
                          <motion.div
                            className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto"
                            animate={{
                              scale: [1, 1.2, 1],
                              rotate: [0, 360],
                            }}
                            transition={{
                              scale: {
                                duration: 2,
                                repeat: Number.POSITIVE_INFINITY,
                                ease: "easeInOut",
                              },
                              rotate: { duration: 1 },
                            }}
                          >
                            <CheckCircle className="h-10 w-10 text-white" />
                          </motion.div>
                          <div className="space-y-2">
                            <h3 className="text-2xl font-bold text-green-600">
                              Message Sent!
                            </h3>
                            <p className="text-muted-foreground">
                              Thank you for reaching out. I&apos;ll get back to
                              you within 24 hours.
                            </p>
                          </div>
                          <Button
                            onClick={() => setIsSubmitted(false)}
                            variant="outline"
                            className="hover:bg-primary hover:text-white"
                          >
                            Send Another Message
                          </Button>
                        </motion.div>
                      ) : (
                        <motion.form
                          key="form"
                          onSubmit={handleSubmit(onSubmit)}
                          className="space-y-6"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                        >
                          <div className="space-y-2">
                            <h2 className="text-2xl font-bold mb-6">
                              Send Me a Message
                            </h2>
                          </div>

                          {/* Name Field */}
                          <motion.div
                            className="space-y-2"
                            variants={fieldVariants}
                          >
                            <label className="text-sm font-medium flex items-center gap-2">
                              <User className="h-4 w-4 text-primary" />
                              Name
                            </label>
                            <div className="relative">
                              <Input
                                {...register("name")}
                                placeholder="Your full name"
                                className={`transition-all duration-300 ${
                                  errors.name
                                    ? "border-red-500 focus:border-red-500"
                                    : watchedFields.name
                                    ? "border-green-500 focus:border-green-500"
                                    : "focus:border-primary"
                                }`}
                              />
                              <AnimatePresence>
                                {watchedFields.name && !errors.name && (
                                  <motion.div
                                    initial={{ scale: 0, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    exit={{ scale: 0, opacity: 0 }}
                                    className="absolute right-3 top-1/2 transform -translate-y-1/2"
                                  >
                                    <CheckCircle className="h-4 w-4 text-green-500" />
                                  </motion.div>
                                )}
                              </AnimatePresence>
                            </div>
                            <AnimatePresence>
                              {errors.name && (
                                <motion.div
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{ height: "auto", opacity: 1 }}
                                  exit={{ height: 0, opacity: 0 }}
                                  className="flex items-center gap-2 text-red-500 text-sm"
                                >
                                  <AlertCircle className="h-4 w-4" />
                                  {errors.name.message}
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </motion.div>

                          {/* Email Field */}
                          <motion.div
                            className="space-y-2"
                            variants={fieldVariants}
                          >
                            <label className="text-sm font-medium flex items-center gap-2">
                              <AtSign className="h-4 w-4 text-primary" />
                              Email
                            </label>
                            <div className="relative">
                              <Input
                                {...register("email")}
                                type="email"
                                placeholder="your.email@example.com"
                                className={`transition-all duration-300 ${
                                  errors.email
                                    ? "border-red-500 focus:border-red-500"
                                    : watchedFields.email && !errors.email
                                    ? "border-green-500 focus:border-green-500"
                                    : "focus:border-primary"
                                }`}
                              />
                              <AnimatePresence>
                                {watchedFields.email && !errors.email && (
                                  <motion.div
                                    initial={{ scale: 0, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    exit={{ scale: 0, opacity: 0 }}
                                    className="absolute right-3 top-1/2 transform -translate-y-1/2"
                                  >
                                    <CheckCircle className="h-4 w-4 text-green-500" />
                                  </motion.div>
                                )}
                              </AnimatePresence>
                            </div>
                            <AnimatePresence>
                              {errors.email && (
                                <motion.div
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{ height: "auto", opacity: 1 }}
                                  exit={{ height: 0, opacity: 0 }}
                                  className="flex items-center gap-2 text-red-500 text-sm"
                                >
                                  <AlertCircle className="h-4 w-4" />
                                  {errors.email.message}
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </motion.div>

                          {/* Subject Field */}
                          <motion.div
                            className="space-y-2"
                            variants={fieldVariants}
                          >
                            <label className="text-sm font-medium flex items-center gap-2">
                              <FileText className="h-4 w-4 text-primary" />
                              Subject
                            </label>
                            <div className="relative">
                              <Input
                                {...register("subject")}
                                placeholder="What's this about?"
                                className={`transition-all duration-300 ${
                                  errors.subject
                                    ? "border-red-500 focus:border-red-500"
                                    : watchedFields.subject && !errors.subject
                                    ? "border-green-500 focus:border-green-500"
                                    : "focus:border-primary"
                                }`}
                              />
                              <AnimatePresence>
                                {watchedFields.subject && !errors.subject && (
                                  <motion.div
                                    initial={{ scale: 0, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    exit={{ scale: 0, opacity: 0 }}
                                    className="absolute right-3 top-1/2 transform -translate-y-1/2"
                                  >
                                    <CheckCircle className="h-4 w-4 text-green-500" />
                                  </motion.div>
                                )}
                              </AnimatePresence>
                            </div>
                            <AnimatePresence>
                              {errors.subject && (
                                <motion.div
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{ height: "auto", opacity: 1 }}
                                  exit={{ height: 0, opacity: 0 }}
                                  className="flex items-center gap-2 text-red-500 text-sm"
                                >
                                  <AlertCircle className="h-4 w-4" />
                                  {errors.subject.message}
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </motion.div>

                          {/* Message Field */}
                          <motion.div
                            className="space-y-2"
                            variants={fieldVariants}
                          >
                            <label className="text-sm font-medium flex items-center gap-2">
                              <MessageSquare className="h-4 w-4 text-primary" />
                              Message
                            </label>
                            <div className="relative">
                              <Textarea
                                {...register("message")}
                                placeholder="Tell me about your project or just say hello..."
                                rows={5}
                                className={`transition-all duration-300 resize-none ${
                                  errors.message
                                    ? "border-red-500 focus:border-red-500"
                                    : watchedFields.message && !errors.message
                                    ? "border-green-500 focus:border-green-500"
                                    : "focus:border-primary"
                                }`}
                              />
                              <AnimatePresence>
                                {watchedFields.message && !errors.message && (
                                  <motion.div
                                    initial={{ scale: 0, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    exit={{ scale: 0, opacity: 0 }}
                                    className="absolute right-3 top-3"
                                  >
                                    <CheckCircle className="h-4 w-4 text-green-500" />
                                  </motion.div>
                                )}
                              </AnimatePresence>
                            </div>
                            <div className="flex justify-between items-center">
                              <AnimatePresence>
                                {errors.message && (
                                  <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    className="flex items-center gap-2 text-red-500 text-sm"
                                  >
                                    <AlertCircle className="h-4 w-4" />
                                    {errors.message.message}
                                  </motion.div>
                                )}
                              </AnimatePresence>
                              <div className="text-xs text-muted-foreground">
                                {watchedFields.message?.length || 0}/1000
                              </div>
                            </div>
                          </motion.div>

                          {/* Submit Error */}
                          <AnimatePresence>
                            {submitError && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                className="flex items-center gap-2 text-red-500 text-sm bg-red-50 p-3 rounded-lg border border-red-200"
                              >
                                <AlertCircle className="h-4 w-4" />
                                {submitError}
                              </motion.div>
                            )}
                          </AnimatePresence>

                          {/* Submit Button */}
                          <motion.div
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            transition={{ type: "spring", stiffness: 300 }}
                          >
                            <Button
                              type="submit"
                              disabled={isSubmitting}
                              className="w-full group relative overflow-hidden"
                              size="lg"
                            >
                              <AnimatePresence mode="wait">
                                {isSubmitting ? (
                                  <motion.div
                                    key="loading"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="flex items-center gap-2"
                                  >
                                    <motion.div
                                      animate={{ rotate: 360 }}
                                      transition={{
                                        duration: 1,
                                        repeat: Number.POSITIVE_INFINITY,
                                        ease: "linear",
                                      }}
                                    >
                                      <Zap className="h-4 w-4" />
                                    </motion.div>
                                    Sending...
                                  </motion.div>
                                ) : (
                                  <motion.div
                                    key="send"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="flex items-center gap-2"
                                  >
                                    Send Message
                                    <motion.div
                                      className="group-hover:translate-x-1 transition-transform"
                                      whileHover={{ x: 5 }}
                                    >
                                      <Send className="h-4 w-4" />
                                    </motion.div>
                                  </motion.div>
                                )}
                              </AnimatePresence>
                              <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
                                initial={{ x: "-100%" }}
                                whileHover={{ x: "100%" }}
                              />
                            </Button>
                          </motion.div>
                        </motion.form>
                      )}
                    </AnimatePresence>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </div>

          {/* Bottom CTA */}
          <motion.div
            className="mt-20 text-center"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            <Card className="p-8 bg-gradient-to-r from-primary/5 via-accent/10 to-primary/5 border-primary/20">
              <CardContent className="p-0 space-y-4">
                <motion.div
                  className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mx-auto"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.8 }}
                >
                  <Heart className="h-8 w-8 text-white" />
                </motion.div>
                <h3 className="text-xl font-semibold">
                  Prefer a different way to connect?
                </h3>
                <p className="text-muted-foreground">
                  Feel free to reach out through any of the social platforms
                  above or send me an email directly.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
