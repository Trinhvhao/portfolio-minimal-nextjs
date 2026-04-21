"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

const TikTokIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
  </svg>
);

const FacebookIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
  </svg>
);

const GithubIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.3 9.42 7.88 10.95.58.1.79-.25.79-.56 0-.27-.01-1-.02-1.97-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.28-1.7-1.28-1.7-1.05-.72.08-.71.08-.71 1.16.08 1.78 1.2 1.78 1.2 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.27-5.24-5.65 0-1.25.45-2.26 1.19-3.06-.12-.29-.52-1.45.11-3.02 0 0 .97-.31 3.18 1.17a11.05 11.05 0 013 0c0 2.2-1.48 3.17-1.17 3.17 1.2 1.2 1.78 1.81 1.78 1.81.63 1.57.23 2.73.11 3.02.74.8 1.18 1.81 1.18 3.06 0 4.4-2.7 5.35-5.27 5.64.41.35.78 1.03.78 2.08 0 1.5-.02 2.7-.02 3.07 0 .31.21.67.8.56A11.52 11.52 0 0123.5 12C23.5 5.65 18.35.5 12 .5z" />
  </svg>
);

const ZaloIcon = ({ className }: { className?: string }) => (
  <div className={`font-bold font-sans flex items-center justify-center ${className}`}>
    Z
  </div>
);

const platforms = [
  { name: "TikTok", count: "3.6K", color: "hover:text-[#00F2FE]", border: "group-hover:border-[#00F2FE]/50", icon: TikTokIcon, link: "#" },
  { name: "Facebook", count: "2.2K", color: "hover:text-[#1877F2]", border: "group-hover:border-[#1877F2]/50", icon: FacebookIcon, link: "#" },
  { name: "Instagram", count: "350", color: "hover:text-[#E4405F]", border: "group-hover:border-[#E4405F]/50", icon: InstagramIcon, link: "#" },
  { name: "Zalo", count: "151", color: "hover:text-[#0068FF]", border: "group-hover:border-[#0068FF]/50", icon: ZaloIcon, link: "#" },
  { name: "GitHub", count: "20", color: "hover:text-white", border: "group-hover:border-white/50", icon: GithubIcon, link: "#" },
];

export const DigitalPresenceSection = React.memo(function DigitalPresenceSection() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section id="digital-presence" className="py-12 px-4 md:px-6 max-w-7xl mx-auto border-t border-white/5">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 py-8 px-6 md:px-10 bg-[#0a0a0a] border border-white/10 rounded-3xl relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-transparent pointer-events-none" />

        <div className="flex flex-col gap-2 z-10 w-full md:w-1/3">
          <div className="inline-flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></span>
            <span className="text-[10px] font-mono text-neutral-400 tracking-widest uppercase">Digital Footprints</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-heading font-bold tracking-tight text-white">
            6.3K+ <span className="text-neutral-500"> Connections</span>
          </h2>
          <p className="text-sm text-neutral-400 font-sans mt-2">
            Building in public and connecting across multiple platforms.
          </p>
        </div>

        <div className="flex flex-wrap md:flex-nowrap items-center gap-3 w-full md:w-2/3 md:justify-end z-10">
          {platforms.map((platform, idx) => {
            const Icon = platform.icon;
            const isHovered = hovered === platform.name;

            return (
              <motion.a
                href={platform.link}
                key={platform.name}
                onHoverStart={() => setHovered(platform.name)}
                onHoverEnd={() => setHovered(null)}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`group flex items-center gap-3 px-4 py-3 rounded-2xl bg-[#111] border border-[#222] transition-all duration-300 ${platform.border}`}
              >
                <div className={`w-5 h-5 text-neutral-500 transition-colors duration-300 ${platform.color}`}>
                  <Icon className="w-full h-full" />
                </div>

                <motion.div
                  initial={{ width: 0, opacity: 0 }}
                  animate={{
                    width: isHovered ? "auto" : 0,
                    opacity: isHovered ? 1 : 0,
                  }}
                  className="overflow-hidden hidden md:block whitespace-nowrap"
                >
                  <div className="flex items-center gap-2 pr-2">
                    <span className="font-sans font-bold text-sm text-white">{platform.count}</span>
                    <span className="text-xs text-neutral-500 font-mono tracking-wider">{platform.name}</span>
                  </div>
                </motion.div>

                <div className="flex md:hidden items-center gap-2">
                  <span className="font-sans font-bold text-sm text-white">{platform.count}</span>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
});
