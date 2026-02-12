"use client";

import { motion, useInView, Variants } from "motion/react";
import { useRef } from "react";
import { GraduationCap, Calendar, Award } from "lucide-react";
import { SectionHeader } from "./section-header";

const education = [
  {
    degree: "Master of Science in Computer Science",
    school: "Stanford University",
    location: "Stanford, CA",
    period: "2018 - 2020",
    gpa: "3.9/4.0",
    achievements: ["Dean's List", "Research Assistant in AI Lab"],
  },
  {
    degree: "Bachelor of Science in Software Engineering",
    school: "MIT",
    location: "Cambridge, MA",
    period: "2014 - 2018",
    gpa: "3.8/4.0",
    achievements: ["Summa Cum Laude", "Hackathon Winner 2017"],
  },
];

const certifications = [
  {
    name: "AWS Solutions Architect",
    issuer: "Amazon Web Services",
    year: "2023",
  },
  {
    name: "Google Cloud Professional",
    issuer: "Google",
    year: "2022",
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

export function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="relative py-32 overflow-hidden">
      <div className="container-responsive">
        <SectionHeader 
          title="Education"
          subtitle="Academic background and professional certifications"
        />

        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid lg:grid-cols-2 gap-8"
        >
          <motion.div variants={cardVariants} className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-2xl font-semibold">Degrees</h3>
            </div>
            
            {education.map((edu, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ 
                  scale: 1.02,
                  x: 5,
                  transition: { type: "spring" as const, stiffness: 300 }
                }}
                className="p-6 rounded-2xl glass hover:bg-white/10 transition-colors"
              >
                <h4 className="text-lg font-semibold mb-1">{edu.degree}</h4>
                <div className="text-violet-400 font-medium mb-2">
                  {edu.school}
                </div>
                <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{edu.period}</span>
                  </div>
                  <span>GPA: {edu.gpa}</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {edu.achievements.map((achievement) => (
                    <span
                      key={achievement}
                      className="inline-flex items-center gap-1 px-3 py-1 text-xs rounded-full bg-violet-500/10 text-violet-600 dark:text-violet-400 border border-violet-500/30"
                    >
                      <Award className="w-3 h-3" />
                      {achievement}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={cardVariants} className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center">
                <Award className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-2xl font-semibold">Certifications</h3>
            </div>

            <div className="grid gap-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  whileHover={{ 
                    scale: 1.05,
                    transition: { type: "spring" as const, stiffness: 300 }
                  }}
                  className="p-6 rounded-2xl glass hover:bg-white/10 transition-colors group cursor-pointer"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold group-hover:text-violet-400 transition-colors">
                        {cert.name}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {cert.issuer}
                      </p>
                    </div>
                    <span className="px-3 py-1 text-sm rounded-full tag-border">
                      {cert.year}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              variants={cardVariants}
              whileHover={{ scale: 1.02 }}
              className="p-6 rounded-2xl bg-gradient-to-br from-violet-500/10 to-fuchsia-500/10 border border-violet-500/20"
            >
              <h4 className="font-semibold mb-2">Continuous Learning</h4>
              <p className="text-sm text-muted-foreground">
                Always staying up-to-date with the latest technologies through 
                online courses, workshops, and hands-on projects.
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
