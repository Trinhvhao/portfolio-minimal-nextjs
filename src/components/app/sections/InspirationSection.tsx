"use client";

import React from "react";
import { motion } from "motion/react";
import { TextReveal } from "@/components/app/TextReveal";

export const InspirationSection = React.memo(function InspirationSection() {
  return (
    <section id="inspiration" className="py-12 md:py-16 px-6 max-w-5xl mx-auto">
      <TextReveal text="INSPIRATION" className="text-5xl md:text-7xl font-heading font-bold mb-8 md:mb-12 tracking-tighter" />

      <div className="flex flex-col gap-12 text-2xl md:text-4xl text-text-muted max-w-4xl font-sans leading-relaxed">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          I draw heavy inspiration from platforms like{" "}
          <a
            href="https://awwwards.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-white border-b-2 border-white/30 hover:border-white transition-colors"
          >
            Awwwards
          </a>{" "}
          and modern brutalist design trends.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          When I&apos;m not coding, I&apos;m usually exploring{" "}
          <a
            href="https://unsplash.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-white border-b-2 border-white/30 hover:border-white transition-colors"
          >
            photography
          </a>{" "}
          or studying{" "}
          <a
            href="https://fonts.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-white border-b-2 border-white/30 hover:border-white transition-colors"
          >
            typography
          </a>.
        </motion.p>
      </div>
    </section>
  );
});
