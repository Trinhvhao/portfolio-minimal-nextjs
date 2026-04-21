import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Creative Agency Portfolio – GSAP & Tailwind Animation Site | Trịnh Văn Hào",
  description:
    "Award-winning creative agency portfolio with scroll-jacking, custom cursors, and complex GSAP timeline animations. Built with GSAP and Tailwind CSS. Full case study by Trịnh Văn Hào.",
  keywords: [
    "creative agency portfolio",
    "GSAP animations",
    "scroll-jacking",
    "Tailwind CSS",
    "award-winning design",
    "motion design",
    "Trịnh Văn Hào",
  ],
  openGraph: {
    title: "Creative Agency Portfolio – GSAP & Tailwind Animation Site",
    description:
      "Award-winning creative agency portfolio with scroll-jacking, custom cursors, and complex GSAP timeline animations.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Creative Agency Portfolio – GSAP & Tailwind",
      },
    ],
  },
};

const projectSchema = {
  "@context": "https://schema.org",
  "@type": "CreativeWork",
  name: "Creative Agency Portfolio",
  description:
    "Award-winning portfolio site with scroll-jacking, custom cursors, and complex GSAP timeline animations.",
  author: {
    "@type": "Person",
    name: "Trịnh Văn Hào",
    url: "https://www.hayyie.click",
  },
  keywords: ["GSAP", "Tailwind CSS", "Scroll Animation", "Creative Agency", "Motion Design"],
  dateCreated: "2023-01-01",
  dateModified: "2026-04-21",
};

export default function CreativeAgencyProject() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectSchema) }}
      />

      {/* Hero */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=1920&q=80"
            alt="Creative agency website design"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050505]/80 to-[#050505]" />
        </div>
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <div className="flex gap-3 justify-center mb-6 flex-wrap">
            {["GSAP", "Tailwind CSS", "ScrollJack", "Custom Cursor"].map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-xs font-mono border border-white/20 rounded-full bg-white/5"
              >
                {tag}
              </span>
            ))}
          </div>
          <h1 className="text-5xl md:text-7xl font-bold font-heading tracking-tight mb-6">
            Creative Agency
          </h1>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Where design and engineering collide — scroll-jacking, custom cursors,
            and GSAP timeline animations that push creative boundaries.
          </p>
        </div>
      </section>

      {/* Metrics */}
      <section className="px-6 py-20 max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: "Awwwards", label: "Site of the Day" },
            { value: "60fps", label: "Animation Perf" },
            { value: "<3s", label: "First Meaningful Paint" },
            { value: "20+", label: "GSAP Timelines" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="text-4xl font-bold font-heading text-white">{stat.value}</p>
              <p className="text-sm text-white/40 font-mono mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Overview */}
      <section className="px-6 py-16 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold font-heading mb-6">Overview</h2>
        <p className="text-lg text-white/70 leading-relaxed mb-8">
          This creative agency portfolio redefines what a website can be. Moving beyond standard
          scroll behavior, the site implements full-page scroll-jacking that transforms every
          user interaction into a narrative experience. Custom cursor designs respond to context,
          morphing from a circle on text to a crosshair on images to an arrow on links.
        </p>
        <p className="text-lg text-white/70 leading-relaxed">
          Over 20 GSAP timeline animations orchestrate the page&apos;s story — from the hero
          entrance to project card reveals to the footer sequence. Every animation serves a purpose:
          guiding attention, communicating hierarchy, or rewarding engagement.
        </p>
      </section>

      {/* Tech Stack */}
      <section className="px-6 py-16 max-w-6xl mx-auto border-t border-white/10">
        <h2 className="text-3xl font-bold font-heading mb-8">Tech Stack</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {[
            "GSAP (ScrollTrigger)",
            "Tailwind CSS 4",
            "Custom Cursor System",
            "React 19",
            "TypeScript",
            "Lenis (smooth scroll)",
            "Framer Motion",
            "Vercel Deployment",
            "WebGL (optional)",
          ].map((tech) => (
            <div key={tech} className="px-4 py-3 border border-white/10 rounded-lg text-sm font-mono text-white/60">
              {tech}
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="px-6 py-16 max-w-4xl mx-auto border-t border-white/10">
        <h2 className="text-3xl font-bold font-heading mb-8">Key Features</h2>
        <div className="space-y-6">
          {[
            {
              title: "Full Page Scroll-Jacking",
              desc: "The entire site operates on a virtual scroll timeline. Each section is a frame in a cinematic sequence, with smooth interpolated transitions between states.",
            },
            {
              title: "Custom Cursor System",
              desc: "A dynamic cursor that adapts to context — circle on text, crosshair on images, arrow on CTAs, and a trail effect on the hero. Built with CSS transforms and GSAP.",
            },
            {
              title: "GSAP Timeline Orchestration",
              desc: "20+ coordinated GSAP timelines power entrance animations, scroll-linked effects, hover states, and exit sequences. A single source of truth for all motion.",
            },
            {
              title: "Pixel-Perfect Implementation",
              desc: "Every design detail — from animation easing curves to hover micro-interactions — is meticulously crafted. No detail is too small for precision engineering.",
            },
          ].map((feature) => (
            <div key={feature.title} className="border border-white/10 rounded-xl p-6">
              <h3 className="text-xl font-bold font-heading mb-2">{feature.title}</h3>
              <p className="text-white/60">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-20 max-w-4xl mx-auto border-t border-white/10 text-center">
        <h2 className="text-3xl font-bold font-heading mb-4">Need award-winning creative work?</h2>
        <p className="text-white/60 mb-8">
          I build sites that don&apos;t just look good — they create unforgettable digital experiences.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-bold font-mono text-sm rounded-full hover:scale-105 transition-transform"
        >
          LET&apos;S TALK →
        </Link>
        <div className="mt-8">
          <Link href="/projects" className="text-white/40 font-mono text-sm hover:text-white transition-colors">
            ← Back to all projects
          </Link>
        </div>
      </section>
    </main>
  );
}
