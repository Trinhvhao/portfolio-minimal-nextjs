import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About – Trịnh Văn Hào | Full Stack Developer, React & AI (Vietnam)",
  description:
    "Learn about Trịnh Văn Hào — Full Stack Developer based in Vietnam, specializing in React, Next.js, AI integration, and creative web development. Building with product thinking since 2018.",
  keywords: [
    "about Trịnh Văn Hào",
    "Trịnh Văn Hào biography",
    "Vietnam full stack developer",
    "React developer Vietnam",
    "freelance developer Vietnam",
  ],
  openGraph: {
    title: "About – Trịnh Văn Hào | Full Stack Developer",
    description:
      "Learn about Trịnh Văn Hào — Full Stack Developer based in Vietnam. Building React, Next.js, and AI-powered web experiences since 2018.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Trịnh Văn Hào – About",
      },
    ],
  },
};

const timeline = [
  {
    year: "2024",
    event: "Nexus Design System",
    desc: "Built and open-sourced a comprehensive React design system with Storybook documentation, adopted by 3 projects.",
  },
  {
    year: "2023",
    event: "AI Integration Focus",
    desc: "Deepened expertise in AI/ML — RAG pipelines, LLM integration, and NLP model development for production applications.",
  },
  {
    year: "2023",
    event: "Aura WebGL Experience",
    desc: "Delivered award-worthy WebGL experiences with custom GLSL shaders for creative agency clients.",
  },
  {
    year: "2022",
    event: "E-Commerce Expertise",
    desc: "Led headless e-commerce builds with Next.js, Shopify integration, and Stripe payment infrastructure.",
  },
  {
    year: "2021",
    event: "Full Stack Proficiency",
    desc: "Transitioned from frontend focus to owning the full stack — backend APIs, databases, and DevOps.",
  },
  {
    year: "2018",
    event: "Developer Journey Begins",
    desc: "Started building websites and applications. Learned HTML, CSS, JavaScript, and fell in love with React.",
  },
];

const values = [
  {
    title: "Product Over Code",
    desc: "Code is a tool, not the goal. Every line serves a user need or business objective.",
  },
  {
    title: "Craft at Every Level",
    desc: "From database schema to button hover state — every detail deserves intention.",
  },
  {
    title: "Performance as Feature",
    desc: "Fast is not optional. A 3-second load time is a UX failure, not just a metric.",
  },
  {
    title: "Learning in Public",
    desc: "Building, sharing, and iterating in the open. The best projects come from collaboration.",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      {/* Hero */}
      <section className="pt-32 pb-20 px-6 max-w-5xl mx-auto">
        <p className="text-xs font-mono text-white/40 tracking-widest uppercase mb-4">
          About
        </p>
        <h1 className="text-5xl md:text-7xl font-bold font-heading tracking-tight mb-8">
          I build beautiful and functional web experiences.
        </h1>
        <div className="flex flex-col md:flex-row gap-12">
          <div className="flex-1">
            <img
              src="/images/trinhhao2.jpg"
              alt="Trịnh Văn Hào"
              className="w-full max-w-md rounded-2xl grayscale contrast-125"
            />
          </div>
          <div className="flex-1 space-y-6">
            <p className="text-lg text-white/70 leading-relaxed">
              I&apos;m <strong className="text-white">Trịnh Văn Hào</strong>, a Full Stack Developer
              based in Vietnam. I specialize in building React and Next.js applications that
              combine technical rigor with thoughtful design.
            </p>
            <p className="text-lg text-white/70 leading-relaxed">
              My work spans the full spectrum — from headless e-commerce platforms processing
              thousands of transactions, to immersive WebGL experiences that push browser
              boundaries, to AI-powered applications that automate real business workflows.
            </p>
            <p className="text-lg text-white/70 leading-relaxed">
              I&apos;m particularly drawn to the intersection of{" "}
              <strong className="text-white">creative development</strong> and{" "}
              <strong className="text-white">AI integration</strong>. I believe the most
              compelling digital products come from developers who understand both the art of
              interaction and the science of data.
            </p>
            <div className="flex flex-wrap gap-3 pt-4">
              <a
                href="/contact"
                className="px-6 py-3 bg-white text-black font-bold font-mono text-sm rounded-full hover:scale-105 transition-transform"
              >
                Get In Touch
              </a>
              <a
                href="/projects"
                className="px-6 py-3 border border-white/20 font-mono text-sm rounded-full hover:bg-white hover:text-black transition-all"
              >
                View Projects
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="px-6 py-20 max-w-6xl mx-auto border-t border-white/10">
        <h2 className="text-4xl font-bold font-heading mb-12">What I Believe</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {values.map((value) => (
            <div key={value.title} className="border border-white/10 rounded-xl p-6">
              <h3 className="text-xl font-bold font-heading mb-3">{value.title}</h3>
              <p className="text-white/60">{value.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="px-6 py-20 max-w-4xl mx-auto border-t border-white/10">
        <h2 className="text-4xl font-bold font-heading mb-12">Journey</h2>
        <div className="space-y-8">
          {timeline.map((item) => (
            <div key={item.year} className="flex gap-6">
              <div className="w-20 shrink-0 text-right">
                <span className="text-xs font-mono text-white/40">{item.year}</span>
              </div>
              <div className="flex-1 border-l border-white/10 pl-6 pb-8">
                <h3 className="text-lg font-bold font-heading mb-2">{item.event}</h3>
                <p className="text-white/60 text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section className="px-6 py-20 max-w-4xl mx-auto border-t border-white/10">
        <h2 className="text-4xl font-bold font-heading mb-8">Education</h2>
        <div className="border border-white/10 rounded-xl p-6">
          <h3 className="text-xl font-bold font-heading mb-2">Dai Nam University</h3>
          <p className="text-white/60 font-mono text-sm mb-2">AIoT Lab — Artificial Intelligence & Internet of Things</p>
          <p className="text-white/50 text-sm">
            Research intern working on NLP and computer vision applications for real-world business contexts.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-20 max-w-4xl mx-auto border-t border-white/10 text-center">
        <h2 className="text-3xl font-bold font-heading mb-4">Let&apos;s work together.</h2>
        <p className="text-white/60 mb-8">
          I&apos;m open to freelance projects, full-time opportunities, and collaborations.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-bold font-mono text-sm rounded-full hover:scale-105 transition-transform"
        >
          GET IN TOUCH →
        </Link>
      </section>
    </main>
  );
}
