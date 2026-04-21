"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, Home, User, FolderGit2, Mail, Briefcase, MessageSquareQuote } from "lucide-react";

const CpuIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="4" y="4" width="16" height="16" rx="2" ry="2"/>
    <rect x="9" y="9" width="6" height="6"/>
    <line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/>
    <line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/>
    <line x1="20" y1="9" x2="23" y2="9"/><line x1="20" y1="14" x2="23" y2="14"/>
    <line x1="1" y1="9" x2="4" y2="9"/><line x1="1" y1="14" x2="4" y2="14"/>
  </svg>
);

const BotIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M12 8V4H8"/><rect x="4" y="8" width="16" height="12" rx="2"/>
    <path d="M2 14h2"/><path d="M20 14h2"/><path d="M15 13v2"/>
    <path d="M9 13v2"/><circle cx="8" cy="14" r="1"/><circle cx="16" cy="14" r="1"/>
  </svg>
);

const navItems = [
  { id: "home", label: "Home", icon: Home },
  { id: "about", label: "About", icon: User },
  { id: "capabilities", label: "Capabilities", icon: CpuIcon },
  { id: "experience", label: "Mission Logs", icon: Briefcase },
  { id: "projects", label: "Projects", icon: FolderGit2 },
  { id: "testimonials", label: "Client Feedback", icon: MessageSquareQuote },
  { id: "ai-future", label: "AI Future", icon: BotIcon },
  { id: "contact", label: "Contact", icon: Mail },
];

export function FloatingDock() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.dispatchEvent(new CustomEvent('custom-scroll', { detail: { target: element } }));
    }
  };

  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 pointer-events-none w-[calc(100vw-[24px])] sm:w-auto flex justify-center">
      <motion.div
        className="flex items-center justify-center flex-wrap sm:flex-nowrap gap-1 md:gap-2 px-2 md:px-3 py-2 rounded-2xl bg-black/60 backdrop-blur-xl border border-white/10 shadow-[0_0_30px_rgba(0,0,0,0.5)] pointer-events-auto"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 20, delay: 1 }}
      >
        {navItems.map((item, index) => {
          const Icon = item.icon;
          const isHovered = hoveredIndex === index;

          return (
            <div
              key={item.id}
              className="relative group shrink-0"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <AnimatePresence>
                {isHovered && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, scale: 0.8 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.8 }}
                    transition={{ duration: 0.15 }}
                    className="absolute -bottom-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-white text-black text-[10px] md:text-xs font-bold rounded-md whitespace-nowrap pointer-events-none"
                  >
                    {item.label}
                    <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 border-4 border-transparent border-b-white" />
                  </motion.div>
                )}
              </AnimatePresence>

              <motion.button
                onClick={() => scrollToSection(item.id)}
                className="w-9 h-9 md:w-10 md:h-10 rounded-xl flex items-center justify-center text-neutral-400 hover:text-white hover:bg-white/10 transition-colors relative"
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon className="w-4 h-4 md:w-5 md:h-5" />
              </motion.button>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
}
