"use client";

import { motion, useInView, Variants } from "motion/react";
import { useRef } from "react";

interface SectionHeaderProps {
  label?: string;
  title: string;
  subtitle?: string;
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const slideUpVariants: Variants = {
  hidden: { 
    opacity: 0, 
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 15,
    },
  },
};

export function SectionHeader({ label, title, subtitle }: SectionHeaderProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
      className="mb-16"
    >
      {/* Large number/icon aligned with content - only show if label provided */}
      {label && (
        <motion.div 
          variants={slideUpVariants}
          className="flex items-center gap-4 mb-4"
        >
          <span className="text-7xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20 leading-none">
            {label}
          </span>
          <div className="h-px flex-1 bg-gradient-to-r from-violet-500/50 to-transparent max-w-xs" />
        </motion.div>
      )}

      {/* Title */}
      <motion.h2 
        variants={slideUpVariants}
        className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight"
      >
        {title.split(" ").map((word, index) => (
          <span key={index}>
            {index === title.split(" ").length - 1 ? (
              <span className="gradient-text">{word}</span>
            ) : (
              <span className="text-foreground">{word} </span>
            )}
          </span>
        ))}
      </motion.h2>

      {/* Subtitle */}
      {subtitle && (
        <motion.p 
          variants={slideUpVariants}
          className="text-lg text-muted-foreground mt-4 max-w-2xl"
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
}
