"use client";

import { motion } from "motion/react";
import { useState, useEffect } from "react";
import { Heart, Github, Linkedin, Twitter, ArrowUp } from "lucide-react";

const socialLinks = [
  { icon: Github, href: "https://github.com", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
];

export function Footer() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative py-12 footer-glass">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left side */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <motion.span 
              className="text-xl font-bold gradient-text"
              whileHover={{ scale: 1.05 }}
            >
              Shravya
            </motion.span>
            <p className="text-sm text-muted-foreground">
              Software Engineer crafting digital experiences
            </p>
          </div>

          {/* Center - Social links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ 
                  scale: 1.2,
                  y: -3,
                }}
                whileTap={{ scale: 0.9 }}
                className="p-2 rounded-lg glass hover:bg-violet-500/20 transition-colors"
                aria-label={social.label}
              >
                {mounted ? (
                  <social.icon className="w-5 h-5" />
                ) : (
                  <span className="w-5 h-5 block" />
                )}
              </motion.a>
            ))}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-4">
            <p className="text-sm text-muted-foreground flex items-center gap-1">
              Built with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> using Next.js
            </p>
            
            <motion.button
              onClick={scrollToTop}
              whileHover={{ 
                scale: 1.1,
                y: -2,
              }}
              whileTap={{ scale: 0.9 }}
              className="p-2 rounded-lg glass hover:bg-violet-500/20 transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-5 h-5" />
            </motion.button>
          </div>
        </div>

        {/* Copyright */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mt-8 pt-8 border-t border-violet-500/20 dark:border-white/10 text-center text-sm text-muted-foreground"
        >
          © {new Date().getFullYear()} Shravya. All rights reserved.
        </motion.div>
      </div>
    </footer>
  );
}
