"use client";

import { motion, useInView, Variants } from "motion/react";
import { useRef, useState } from "react";
import { ExternalLink, Github, Star, ArrowUpRight } from "lucide-react";
import { SectionHeader } from "./section-header";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with real-time inventory, payment processing, and admin dashboard.",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop",
    tags: ["Next.js", "Stripe", "PostgreSQL", "Tailwind"],
    github: "https://github.com",
    demo: "https://demo.com",
    featured: true,
  },
  {
    title: "Task Management App",
    description: "Collaborative task manager with real-time updates, drag-and-drop interface, and team workspaces.",
    image: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=800&h=600&fit=crop",
    tags: ["React", "Socket.io", "Node.js", "MongoDB"],
    github: "https://github.com",
    demo: "https://demo.com",
    featured: true,
  },
  {
    title: "AI Image Generator",
    description: "Web app that generates images using AI models with custom prompts and style controls.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
    tags: ["Python", "FastAPI", "React", "OpenAI"],
    github: "https://github.com",
    demo: "https://demo.com",
    featured: false,
  },
  {
    title: "Portfolio CMS",
    description: "Headless CMS for developers to manage their portfolio content with Markdown support.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    tags: ["Next.js", "Prisma", "TypeScript", "MDX"],
    github: "https://github.com",
    demo: "https://demo.com",
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
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  animate={{
                    scale: hoveredIndex === index ? 1.1 : 1,
                  }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                />
                
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
                    opacity: hoveredIndex === index ? 1 : 0,
                    y: hoveredIndex === index ? 0 : 20,
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
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-black/50 hover:bg-black/70 text-white transition-colors"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
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
