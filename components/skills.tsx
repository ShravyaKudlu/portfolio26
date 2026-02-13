"use client";

import { motion, useInView, Variants } from "motion/react";
import { useRef } from "react";
import { SectionHeader } from "./section-header";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      "React",
      "Next.js",
      "Javascript",
      "TypeScript",
      "Tailwind CSS",
      "Redux",
    ],
    color: "from-violet-500 to-purple-500",
  },
  {
    title: "Backend",
    skills: [
      "Node.js",
      "Python",
      "MongoDB",
      "RestAPI",
      "SQL",
      "FastAPI",
      "Django",
      "Redis",
    ],
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "AI",
    skills: [
      "LangChain",
      "Vector DBs",
      "Prompt Engineering",
      "RAG",
      "Ollama",
      "OpenAI API",
    ],
    color: "from-emerald-500 to-teal-500",
  },
  {
    title: "Java",
    skills: ["Java", "Spring Boot", "Hibernate", "Maven", "JUnit"],
    color: "from-orange-500 to-red-500",
  },
  {
    title: "DevOps",
    skills: [
      "Docker",
      "AWS",
      "Vercel",
      "GitHub Actions",
      "Linux",
      "Kubernetes",
    ],
    color: "from-yellow-500 to-lime-500",
  },
  {
    title: "Tools",
    skills: ["Git", "Nvim", "IntelliJ", "Postman", "Obsidian", "Opencode"],
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
      {/* Flowing orb from about section - top left */}
      <motion.div
        animate={{
          x: [0, 30, 10, 0],
          y: [0, 30, -10, 0],
          scale: [1, 1.1, 1.05, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -left-10 sm:-left-16 top-0 w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 bg-violet-600/15 rounded-full blur-[80px] sm:blur-[100px] pointer-events-none"
      />
      
      {/* Secondary orb for balance - right side */}
      <motion.div
        animate={{
          x: [0, -40, -20, 0],
          y: [0, -30, 20, 0],
          scale: [1, 1.05, 0.95, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="hidden sm:block absolute -right-12 lg:-right-24 bottom-1/4 w-60 h-60 sm:w-72 sm:h-72 lg:w-80 lg:h-80 bg-fuchsia-600/10 rounded-full blur-[70px] sm:blur-[90px] pointer-events-none"
      />
      
      {/* Flowing orb to education section - bottom right */}
      <motion.div
        animate={{
          x: [0, 50, 30, 0],
          y: [0, 20, -30, 0],
          scale: [1, 1.15, 1.05, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="hidden sm:block absolute -right-8 lg:-right-16 bottom-0 w-64 h-72 sm:w-72 sm:h-80 lg:w-80 lg:h-96 bg-violet-600/12 rounded-full blur-[80px] sm:blur-[100px] pointer-events-none"
      />

      <div className="relative container-responsive">
        <SectionHeader
          title="Skills & Technologies"
          subtitle="Technologies I work with to bring ideas to life"
        />

        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              variants={cardVariants}
              whileHover={{
                scale: 1.02,
                y: -5,
                transition: { type: "spring" as const, stiffness: 300 },
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
                  <p className="text-sm text-muted-foreground">
                    {category.skills.length} technologies
                  </p>
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
                    className="px-4 py-2 rounded-xl text-sm font-medium tag-border hover:bg-gradient-to-r hover:from-violet-500/20 hover:to-fuchsia-500/20 hover:border-violet-500/40 transition-all cursor-default"
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
