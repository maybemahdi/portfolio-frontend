"use client";

import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      className="relative py-8 px-4 border-t border-border/50 bg-background/80 backdrop-blur-sm"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5 pointer-events-none" />

      <div className="container mx-auto max-w-6xl relative">
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <p className="text-muted-foreground text-sm">
            © {currentYear}{" "}
            <motion.span
              className="text-foreground font-medium hover:text-primary transition-colors cursor-default"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Mahdi Hasan Mahi
            </motion.span>
            . All rights reserved.
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
}
