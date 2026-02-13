"use client";

import { motion, useInView, Variants } from "motion/react";
import { useRef } from "react";
import { Brain, Code2, Coffee, Cpu, Terminal, Zap } from "lucide-react";
import { SectionHeader } from "./section-header";

const features = [
  {
    icon: Coffee,
    title: "Passionate",
    description: "Loving what I do, one commit at a time",
  },
  {
    icon: Code2,
    title: "Clean Code",
    description:
      "Writing maintainable, efficient code following best practices",
  },
  {
    icon: Zap,
    title: "Performance",
    description: "Optimizing for speed and user experience",
  },
  {
    icon: Terminal,
    title: "Full Stack",
    description: "From frontend polish to backend architecture",
  },
  {
    icon: Brain,
    title: "AI",
    description:
      "Building intelligent agentic systems that solve real problems",
  },
  {
    icon: Cpu,
    title: "Linux",
    description: "Command line mastery and open-source enthusiast",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const slideFromLeft: Variants = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 15,
    },
  },
};

const slideFromRight: Variants = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 15,
    },
  },
};

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative py-32">
      {/* Subtle gradient that blends from hero */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background pointer-events-none" />
      <div className="relative container-responsive">
        <SectionHeader
          title="About Me"
          subtitle="Crafting digital experiences with passion and precision"
        />

        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          <div className="space-y-8 flex flex-col items-center">
            <motion.div
              variants={slideFromLeft}
              className="flex justify-center w-full relative"
            >
              {/* Animated violet orb - left of photo */}
              <motion.div
                animate={{
                  x: [0, 30, 15, 0],
                  y: [0, -20, -30, 0],
                  scale: [1, 1.1, 0.95, 1],
                }}
                transition={{
                  duration: 25,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -left-4 sm:-left-8 top-[5%] w-48 h-56 sm:w-64 sm:h-72 bg-violet-600/20 rounded-full blur-[70px] sm:blur-[100px] pointer-events-none"
              />
              
              <img
                src="/Shravya.png"
                alt="Shravya"
                className="w-64 h-64 object-cover rounded-2xl mx-auto relative z-10"
              />
            </motion.div>

            {/* Flowing orb - bottom right to connect to skills */}
            <motion.div
              animate={{
                x: [0, 40, 20, 0],
                y: [0, 20, -20, 0],
                scale: [1, 1.15, 1.05, 1],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="hidden sm:block absolute -right-10 lg:-right-20 bottom-0 w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 bg-violet-600/15 rounded-full blur-[90px] sm:blur-[120px] pointer-events-none"
            />

            <motion.div
              variants={slideFromLeft}
              className="space-y-4 text-muted-foreground"
            >
              <p className="text-lg leading-relaxed">
                I&apos;m a software engineer with a passion for building
                beautiful, functional applications. My journey in tech started
                with curiosity and has evolved into a deep love for creating
                solutions that make a real impact.
              </p>
              <p className="text-lg leading-relaxed">
                When I&apos;m not coding, you&apos;ll find me exploring new
                technologies, contributing to open source, solving challenges in
                leetcode or enjoying a good cup of coffee while brainstorming
                the next big idea.
              </p>
            </motion.div>

            <motion.div
              variants={slideFromLeft}
              className="grid grid-cols-3 gap-6 w-full"
            >
              {[
                { value: "3+", label: "Years Experience" },
                { value: "30+", label: "Projects Completed" },
                { value: "100%", label: "Commitment" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{
                    delay: 0.5 + index * 0.1,
                    type: "spring" as const,
                    stiffness: 200,
                  }}
                  whileHover={{
                    scale: 1.05,
                    y: -5,
                    transition: { type: "spring" as const, stiffness: 300 },
                  }}
                  className="text-center p-4 rounded-xl glass hover:bg-white/10 transition-colors cursor-pointer"
                >
                  <div className="text-3xl font-bold gradient-text">
                    {stat.value}
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                variants={index % 2 === 0 ? slideFromLeft : slideFromRight}
                whileHover={{
                  scale: 1.05,
                  y: -5,
                  transition: { type: "spring" as const, stiffness: 300 },
                }}
                className="group p-6 rounded-2xl glass hover:bg-white/10 transition-colors cursor-pointer"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20 flex items-center justify-center mb-4"
                >
                  <feature.icon className="w-6 h-6 text-violet-500" />
                </motion.div>
                <h3 className="font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
