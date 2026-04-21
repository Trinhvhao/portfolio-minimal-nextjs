"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

export const ScrollRevealText = React.memo(function ScrollRevealText() {
  const text = "I build beautiful and functional web experiences where design meets code.";
  const words = text.split(" ");

  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "end 0.3"],
  });

  return (
    <div ref={ref}>
      <p className="text-3xl md:text-5xl lg:text-6xl font-sans leading-tight tracking-tight flex flex-wrap justify-center gap-x-3 md:gap-x-4 gap-y-2 md:gap-y-4">
        {words.map((word, i) => {
          const isBold = ["design", "meets", "code."].includes(word);

          const start = i / words.length;
          const end = start + 0.15;
          const opacity = useTransform(scrollYProgress, [start, end], [0.15, 1]);
          const color = useTransform(
            scrollYProgress,
            [start, end],
            ["#555555", "#ffffff"]
          );

          return (
            <motion.span
              key={i}
              style={{ opacity, color }}
              className={isBold ? "font-medium" : ""}
            >
              {word}
            </motion.span>
          );
        })}
      </p>
    </div>
  );
});
