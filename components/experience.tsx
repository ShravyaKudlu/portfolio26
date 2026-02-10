"use client";

import { motion, useInView, Variants } from "motion/react";
import { useRef } from "react";
import { Briefcase, Calendar, MapPin } from "lucide-react";
import { SectionHeader } from "./section-header";

const experiences = [
  {
    title: "Senior Software Engineer",
    company: "Tech Corp",
    location: "Remote",
    period: "2023 - Present",
    description: "Leading frontend development for enterprise applications. Architecting scalable solutions and mentoring junior developers.",
    skills: ["React", "TypeScript", "Node.js"],
  },
  {
    title: "Software Engineer",
    company: "Startup Inc",
    location: "San Francisco, CA",
    period: "2021 - 2023",
    description: "Built full-stack applications from scratch. Implemented CI/CD pipelines and improved application performance by 40%.",
    skills: ["Next.js", "Python", "AWS"],
  },
  {
    title: "Junior Developer",
    company: "Digital Agency",
    location: "New York, NY",
    period: "2020 - 2021",
    description: "Developed responsive websites and web applications for diverse clients. Collaborated with design and product teams.",
    skills: ["JavaScript", "React", "CSS"],
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { 
    opacity: 0, 
    x: -40,
  },
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

export function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="relative py-32 overflow-hidden">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <SectionHeader 
          title="Experience"
          subtitle="My professional journey and career highlights"
        />

        <div className="relative">
          <motion.div
            initial={{ height: 0 }}
            animate={isInView ? { height: "100%" } : {}}
            transition={{
              duration: 1.5,
              ease: "easeOut",
            }}
            className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-violet-500 via-fuchsia-500 to-transparent"
          />

          <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
            className="space-y-12"
          >
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative pl-20"
              >
                <motion.div
                  whileHover={{ scale: 1.3 }}
                  className="absolute left-6 top-0 w-5 h-5 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 border-4 border-background shadow-lg shadow-violet-500/30"
                />

                <motion.div
                  whileHover={{ 
                    x: 10,
                    transition: { type: "spring" as const, stiffness: 300 }
                  }}
                  className="group p-6 rounded-2xl glass hover:bg-white/10 transition-colors"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-xl font-semibold group-hover:text-violet-400 transition-colors">
                        {exp.title}
                      </h3>
                      <div className="flex items-center gap-2 text-muted-foreground mt-1">
                        <Briefcase className="w-4 h-4" />
                        <span>{exp.company}</span>
                        <span className="text-border">•</span>
                        <MapPin className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground tag-border px-3 py-1 rounded-full w-fit">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-4">
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-violet-500/10 text-violet-600 dark:text-violet-400 border border-violet-500/30"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
