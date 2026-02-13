"use client";

import { motion, useInView, Variants } from "motion/react";
import { useRef, useState } from "react";
import { ExternalLink, Github, Star, ArrowUpRight, Ticket, Utensils, Gavel, Wallet } from "lucide-react";
import { SectionHeader } from "./section-header";

const projects = [
  {
    title: "GitTix",
    description: "Microservice application for buying/selling concert tickets with real-time alerts. Features 10-min cart hold with Redis, JWT authentication, Stripe payments, and NATS streaming.",
    gradient: "from-violet-500/30 via-purple-500/20 to-fuchsia-500/30",
    icon: Ticket,
    iconColor: "text-violet-400",
    tags: ["TypeScript", "Microservices", "Redis", "NATS", "Stripe", "JWT"],
    github: "https://github.com/ShravyaKudlu/GitTix",
    demo: "",
    featured: true,
  },
  {
    title: "MealGenie",
    description: "AI-powered meal prep app that transforms grocery lists into personalized recipes for breakfast, lunch, and dinner. Powered by Generative AI, LLMs, and smart prompt engineering.",
    gradient: "from-emerald-500/30 via-teal-500/20 to-cyan-500/30",
    icon: Utensils,
    iconColor: "text-emerald-400",
    tags: ["Python", "FastAPI", "RAG", "Pinecone", "LLMs", "OpenAI"],
    github: "https://github.com/ShravyaKudlu/MealGenie",
    demo: "",
    featured: true,
  },
  {
    title: "rbay",
    description: "Real-time auction website with live bidding, seller analytics, and OAuth2 login. Built with Redis and MongoDB, powered by Lua scripts for atomic operations.",
    gradient: "from-amber-500/30 via-orange-500/20 to-red-500/30",
    icon: Gavel,
    iconColor: "text-amber-400",
    tags: ["Svelte", "Node.js", "Redis", "MongoDB", "OAuth2", "Lua"],
    github: "https://github.com/ShravyaKudlu/rbay",
    demo: "",
    featured: false,
  },
  {
    title: "goCash",
    description: "Cross-platform desktop app to manage bank accounts and transactions. Built with Rust, Tauri, React, MySQL, Ably pub/sub, Tokio async runtime, and Tailwind.",
    gradient: "from-cyan-500/30 via-blue-500/20 to-indigo-500/30",
    icon: Wallet,
    iconColor: "text-cyan-400",
    tags: ["Rust", "Tauri", "React", "MySQL", "Ably", "Tokio"],
    github: "https://github.com/ShravyaKudlu/goCash",
    demo: "",
    featured: false,
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

const cardVariants: Variants = {
  hidden: { 
    opacity: 0, 
    y: 60,
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

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="projects" className="relative py-32 overflow-hidden">
      {/* Flowing orb from experience section - top right */}
      <motion.div
        animate={{
          x: [0, 40, 20, 0],
          y: [0, -30, 10, 0],
          scale: [1, 1.1, 1.05, 1],
        }}
        transition={{
          duration: 23,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -right-10 sm:-right-20 top-0 w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 bg-violet-600/12 rounded-full blur-[80px] sm:blur-[100px] pointer-events-none"
      />
      
      {/* Secondary orb for balance - bottom left */}
      <motion.div
        animate={{
          x: [0, -35, -15, 0],
          y: [0, 30, -20, 0],
          scale: [1, 1.08, 0.95, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="hidden sm:block absolute -left-8 lg:-left-16 bottom-1/4 w-56 h-64 sm:w-64 sm:h-72 lg:w-72 lg:h-80 bg-fuchsia-600/10 rounded-full blur-[70px] sm:blur-[90px] pointer-events-none"
      />
      <div className="relative container-responsive">
        <SectionHeader 
          title="Featured Work"
          subtitle="Some of my latest projects showcasing different technologies and solutions"
        />

        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid md:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              className={`group relative rounded-3xl overflow-hidden glass ${
                project.featured ? "md:col-span-2" : ""
              }`}
            >
              <div className={`relative overflow-hidden ${project.featured ? "h-80" : "h-64"}`}>
                <motion.div
                  className={`w-full h-full bg-gradient-to-br ${project.gradient} flex items-center justify-center`}
                  animate={{
                    scale: hoveredIndex === index ? 1.05 : 1,
                  }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  <motion.div
                    animate={{
                      y: [0, -10, 0],
                      rotate: [0, 5, -5, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className={`${project.featured ? "w-32 h-32" : "w-24 h-24"} ${project.iconColor}`}
                  >
                    <project.icon className="w-full h-full" strokeWidth={1} />
                  </motion.div>
                </motion.div>
                
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                
                {project.featured && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5, type: "spring" as const }}
                    className="absolute top-4 left-4 flex items-center gap-1 px-3 py-1 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white text-xs font-medium"
                  >
                    <Star className="w-3 h-3" />
                    Featured
                  </motion.div>
                )}

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ 
                    opacity: hoveredIndex === index ? 1 : 1,
                    y: 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="absolute top-4 right-4 flex gap-2"
                >
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-black/50 hover:bg-black/70 text-white transition-colors"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-black/50 hover:bg-black/70 text-white transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  )}
                </motion.div>
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h3 className="text-2xl font-semibold group-hover:text-violet-400 transition-colors">
                    {project.title}
                  </h3>
                  <motion.div
                    animate={{ 
                      x: hoveredIndex === index ? 5 : 0,
                      y: hoveredIndex === index ? -5 : 0,
                    }}
                    transition={{ type: "spring" as const, stiffness: 300 }}
                  >
                    <ArrowUpRight className="w-6 h-6 text-muted-foreground group-hover:text-violet-400 transition-colors" />
                  </motion.div>
                </div>
                
                <p className="text-muted-foreground mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-medium rounded-full tag-border hover:border-violet-500/40 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
