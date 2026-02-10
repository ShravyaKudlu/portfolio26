"use client";

import { motion, useInView, Variants } from "motion/react";
import { useRef } from "react";
import { SectionHeader } from "./section-header";

const skillCategories = [
  {
    title: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    color: "from-violet-500 to-purple-500",
  },
  {
    title: "Backend",
    skills: ["Node.js", "Python", "PostgreSQL", "MongoDB", "GraphQL"],
    color: "from-purple-500 to-fuchsia-500",
  },
  {
    title: "DevOps",
    skills: ["Docker", "AWS", "Vercel", "GitHub Actions", "Linux"],
    color: "from-fuchsia-500 to-pink-500",
  },
  {
    title: "Tools",
    skills: ["Git", "VS Code", "Figma", "Postman", "Notion"],
    color: "from-pink-500 to-rose-500",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const cardVariants: Variants = {
  hidden: { 
    opacity: 0, 
    y: 40,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 15,
    },
  },
};

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-violet-600/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-fuchsia-600/5 rounded-full blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader 
          title="Skills & Technologies"
          subtitle="Technologies I work with to bring ideas to life"
        />

        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid md:grid-cols-2 gap-6"
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              variants={cardVariants}
              whileHover={{ 
                scale: 1.02,
                y: -5,
                transition: { type: "spring" as const, stiffness: 300 }
              }}
              className="group relative p-8 rounded-3xl glass overflow-hidden"
            >
              <motion.div
                className={`absolute inset-0 bg-gradient-to-r ${category.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
              />
              
              <div className="relative flex items-center gap-4 mb-6">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center shadow-lg`}
                >
                  <span className="text-white font-bold text-xl">
                    {category.title[0]}
                  </span>
                </motion.div>
                <div>
                  <h3 className="text-2xl font-semibold">{category.title}</h3>
                  <p className="text-sm text-muted-foreground">{category.skills.length} technologies</p>
                </div>
              </div>

              <div className="relative flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    whileHover={{ 
                      scale: 1.1,
                      y: -3,
                    }}
                    className="px-4 py-2 rounded-xl text-sm font-medium bg-white/5 hover:bg-gradient-to-r hover:from-violet-500/20 hover:to-fuchsia-500/20 border border-white/10 hover:border-violet-500/30 transition-all cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
