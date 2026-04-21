"use client";

import React, { useState } from "react";
import { AnimatePresence, motion, useMotionValue, useSpring } from "motion/react";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import type { ArchiveItem } from "../types";

const archiveData: ArchiveItem[] = [
  {
    year: "2024",
    title: "Nexus Design System",
    role: "Architecture",
    tech: "React, Storybook",
    link: "https://github.com/Trinhvhao/nexus-design-system",
    image: "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?auto=format&fit=crop&w=400&q=80",
  },
  {
    year: "2023",
    title: "Aura WebGL Experience",
    role: "Creative Dev",
    tech: "Three.js, GLSL",
    link: "https://www.hayyie.click/projects/web3-nft-platform",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=400&q=80",
  },
  {
    year: "2023",
    title: "Fintech Mobile App",
    role: "Frontend",
    tech: "React Native",
    link: "https://www.hayyie.click/projects/fintech-dashboard",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=400&q=80",
  },
  {
    year: "2022",
    title: "E-Commerce Headless",
    role: "Fullstack",
    tech: "Next.js, Shopify",
    link: "https://www.hayyie.click/projects/e-commerce-reimagined",
    image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=400&q=80",
  },
  {
    year: "2022",
    title: "Onyx Dark Theme",
    role: "Design",
    tech: "Figma, CSS",
    link: "https://www.figma.com",
    image: "https://images.unsplash.com/photo-1604871000636-074fa5117945?auto=format&fit=crop&w=400&q=80",
  },
  {
    year: "2021",
    title: "Legacy Dashboard",
    role: "Frontend",
    tech: "Vue.js, Vuex",
    link: "https://www.hayyie.click/experience",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=400&q=80",
  },
];

export const ArchiveSection = React.memo(function ArchiveSection() {
  const [hoveredImage, setHoveredImage] = useState<string | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 150, damping: 15 });
  const springY = useSpring(mouseY, { stiffness: 150, damping: 15 });

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    // Sử dụng clientX/Y cho fixed positioning
    mouseX.set(e.clientX);
    mouseY.set(e.clientY);
  };

  return (
    <section ref={sectionRef} id="archive" className="py-12 md:py-16 px-6 max-w-7xl mx-auto relative" onMouseMove={handleMouseMove}>
      <h2 className="text-5xl md:text-7xl font-heading font-bold mb-2 md:mb-3 tracking-tighter">
        THE ARCHIVE
      </h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ delay: 0.2, duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
        className="text-text-muted font-mono text-sm md:text-base max-w-none mb-10 md:mb-14 text-left w-full"
      >
        A history of past projects, commercial work, and ongoing experiments.
      </motion.p>

      <div className="w-full overflow-x-auto pb-8">
        <table className="w-full text-left border-collapse min-w-[800px]">
          <thead>
            <tr className="border-b border-text-muted/20 text-text-muted font-mono text-xs uppercase tracking-widest">
              <th className="py-4 px-4 font-normal">Year</th>
              <th className="py-4 px-4 font-normal">Project</th>
              <th className="py-4 px-4 font-normal">Role</th>
              <th className="py-4 px-4 font-normal">Built with</th>
              <th className="py-4 px-4 font-normal text-right">Link</th>
            </tr>
          </thead>
          <tbody>
            {archiveData.map((item, i) => (
              <motion.tr
                key={`${item.title}-${item.year}`}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                onMouseEnter={() => setHoveredImage(item.image)}
                onMouseLeave={() => setHoveredImage(null)}
                className="border-b border-text-muted/10 group hover:bg-white hover:text-black transition-colors duration-200 cursor-pointer"
              >
                <td className="py-6 px-4 font-mono text-sm text-text-muted group-hover:text-black/60 transition-colors">{item.year}</td>
                <td className="py-6 px-4 font-heading font-bold text-xl md:text-2xl">{item.title}</td>
                <td className="py-6 px-4 font-sans text-sm text-text-muted group-hover:text-black/80 transition-colors">{item.role}</td>
                <td className="py-6 px-4 font-mono text-xs text-text-muted group-hover:text-black/80 transition-colors">{item.tech}</td>
                <td className="py-6 px-4 text-right font-mono text-sm">
                  <a href={item.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:underline underline-offset-4">
                    {item.link.includes('hayyie') ? 'live site' : new URL(item.link).hostname.replace('www.', '')} <ArrowRight className="w-4 h-4" />
                  </a>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>

      <AnimatePresence>
        {hoveredImage && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
            className="fixed w-64 h-48 pointer-events-none z-50 overflow-hidden rounded-lg shadow-2xl hidden md:block"
            style={{
              left: springX,
              top: springY,
              x: "-50%",
              y: "-50%",
            }}
          >
            <img src={hoveredImage} alt="Project preview" className="w-full h-full object-cover" loading="lazy" decoding="async" />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
});
