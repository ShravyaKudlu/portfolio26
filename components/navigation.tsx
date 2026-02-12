"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Github, Linkedin, Twitter } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

const socialLinks = [
  { href: "https://github.com", icon: Github, label: "GitHub" },
  { href: "https://linkedin.com", icon: Linkedin, label: "LinkedIn" },
  { href: "https://twitter.com", icon: Twitter, label: "Twitter" },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Update active section based on scroll
      const sections = navLinks.map(link => link.href.replace("#", ""));
      const scrollPosition = window.scrollY + 200;
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <nav className="container-responsive">
        <div className="relative">
          {/* Blur background layer */}
          <div className="absolute inset-0 rounded-2xl backdrop-blur-xl bg-background/80 dark:bg-background/75" />
          
          <div
            className={`relative flex items-center justify-between rounded-2xl px-6 py-3 shadow-lg transition-all duration-300 ${
              scrolled 
                ? "bg-background/40 dark:bg-background/30 border border-violet-500/20 dark:border-violet-500/15" 
                : "bg-background/30 dark:bg-background/20 border-0"
            }`}
          >
          {/* Logo */}
          <a href="#home" className="text-2xl font-bold gradient-text">
            Shravya
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`relative px-4 py-2 text-base font-medium transition-colors rounded-lg hover:bg-violet-500/10 ${
                  activeSection === link.href.replace("#", "")
                    ? "text-violet-600 dark:text-violet-400"
                    : "text-foreground/70 hover:text-foreground"
                }`}
              >
                {link.label}
                {activeSection === link.href.replace("#", "") && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute inset-0 rounded-lg bg-violet-500/10 border border-violet-500/20"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </a>
            ))}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-3">
            <div className="hidden md:flex items-center gap-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg glass hover:bg-white/10 transition-all duration-300 hover:scale-110"
                  aria-label={social.label}
                >
                  {mounted ? (
                    <social.icon className="w-5 h-5" />
                  ) : (
                    <span className="w-5 h-5 block" />
                  )}
                </a>
              ))}
            </div>
            <ThemeToggle />
            
            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg glass hover:bg-white/10 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </div>
      </nav>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="md:hidden absolute top-full left-0 right-0 mx-4 mt-2 rounded-2xl overflow-hidden"
          >
            {/* Blur background layer */}
            <div className="absolute inset-0 rounded-2xl backdrop-blur-xl bg-background/80 dark:bg-background/75 border border-violet-500/20" />
            
            <div className="relative p-4 space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    activeSection === link.href.replace("#", "")
                      ? "bg-violet-500/15 text-violet-600 dark:text-violet-400"
                      : "hover:bg-violet-500/5"
                  }`}
                >
                  {link.label}
                </a>
              ))}
              <div className="flex items-center gap-2 pt-4 border-t border-violet-500/20 dark:border-white/10">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 p-3 rounded-lg glass hover:bg-white/10 transition-colors flex items-center justify-center gap-2"
                  >
                    {mounted ? (
                      <social.icon className="w-4 h-4" />
                    ) : (
                      <span className="w-4 h-4 block" />
                    )}
                    <span className="text-sm">{social.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
