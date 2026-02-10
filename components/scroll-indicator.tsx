"use client";

import { motion, useScroll } from "motion/react";
import { useEffect, useState } from "react";

const sections = [
  { id: "home", label: "1" },
  { id: "about", label: "2" },
  { id: "skills", label: "3" },
  { id: "experience", label: "4" },
  { id: "projects", label: "5" },
  { id: "education", label: "6" },
  { id: "contact", label: "7" },
];

export function ScrollIndicator() {
  const [activeSection, setActiveSection] = useState("home");
  const { scrollY } = useScroll();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = scrollY.get() + 300;
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i].id);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i].id);
          break;
        }
      }
    };

    const unsubscribe = scrollY.on("change", handleScroll);
    return () => unsubscribe();
  }, [scrollY]);

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-3">
      {sections.map((section) => (
        <motion.a
          key={section.id}
          href={`#${section.id}`}
          className={`relative w-3 h-8 rounded-full transition-all duration-300 flex items-center justify-center group ${
            activeSection === section.id
              ? "bg-gradient-to-b from-violet-500 to-fuchsia-500"
              : "bg-white/10 hover:bg-white/20"
          }`}
          whileHover={{ scale: 1.2, x: -2 }}
          whileTap={{ scale: 0.9 }}
        >
          {/* Tooltip */}
          <span className="absolute right-full mr-3 px-2 py-1 rounded bg-violet-500/20 text-xs font-mono opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-violet-500/30">
            {section.id}
          </span>
          
          {/* Active indicator dot */}
          {activeSection === section.id && (
            <motion.div
              layoutId="activeSection"
              className="w-1.5 h-1.5 rounded-full bg-white"
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
          )}
        </motion.a>
      ))}
    </div>
  );
}
