"use client";

import React from "react";
import { motion } from "motion/react";

export const MarqueeBannerSection = React.memo(function MarqueeBannerSection() {
  const words = ["SCALABLE", "SEARCH OPTIMIZED", "ACCESSIBLE", "RESPONSIVE", "DYNAMIC"];
  const rowContent = [...words, ...words].map((w, i) => (
    <React.Fragment key={i}>
      <span className="mx-4 md:mx-7">&#x2726;</span>
      <span>{w}</span>
    </React.Fragment>
  ));

  return (
    <section className="relative w-full h-48 md:h-64 flex items-center justify-center overflow-hidden bg-bg-dark my-10 md:my-20 select-none">
      <div className="absolute w-[140vw] left-1/2 -translate-x-1/2 rotate-[4deg] md:rotate-[3deg] bg-white/10 z-0 overflow-hidden border-y border-white/20">
        <div className="marquee-track marquee-track-left flex items-center text-white/40 font-bold font-serif text-base md:text-xl uppercase tracking-widest py-3 md:py-4">
          {rowContent}
          {rowContent}
        </div>
      </div>

      <div className="absolute w-[140vw] left-1/2 -translate-x-1/2 -rotate-[4deg] md:-rotate-[3deg] bg-white z-10 overflow-hidden border-y border-black/20">
        <div className="marquee-track marquee-track-right flex items-center text-black font-bold font-serif text-base md:text-xl uppercase tracking-widest py-3 md:py-4">
          {rowContent}
          {rowContent}
        </div>
      </div>
    </section>
  );
});
