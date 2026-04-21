import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "E-Commerce Reimagined – Headless Next.js & Stripe Solution | Trịnh Văn Hào",
  description:
    "A high-performance headless e-commerce platform built with Next.js and Stripe. Real-time inventory syncing, seamless checkout, and 98+ Lighthouse score. Full case study by Trịnh Văn Hào.",
  keywords: [
    "headless e-commerce",
    "Next.js e-commerce",
    "Stripe integration",
    "React e-commerce",
    "full stack e-commerce",
    "Trịnh Văn Hào",
  ],
  openGraph: {
    title: "E-Commerce Reimagined – Headless Next.js & Stripe Solution",
    description:
      "A high-performance headless e-commerce platform built with Next.js and Stripe. Real-time inventory syncing and 98+ Lighthouse score.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "E-Commerce Reimagined – Next.js & Stripe",
      },
    ],
  },
};

const projectSchema = {
  "@context": "https://schema.org",
  "@type": "CreativeWork",
  name: "E-Commerce Reimagined",
  description:
    "A high-performance headless e-commerce solution built for scale with real-time inventory syncing and seamless Stripe checkout.",
  author: {
    "@type": "Person",
    name: "Trịnh Văn Hào",
    url: "https://www.hayyie.click",
  },
  keywords: ["Next.js", "Stripe", "Headless E-Commerce", "React", "TypeScript"],
  dateCreated: "2024-01-01",
  dateModified: "2026-04-21",
};

export default function ECommerceProject() {
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
            src="https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&w=1920&q=80"
            alt="E-Commerce platform interface"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050505]/80 to-[#050505]" />
        </div>
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <div className="flex gap-3 justify-center mb-6">
            {["Next.js", "Stripe", "TypeScript"].map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-xs font-mono border border-white/20 rounded-full bg-white/5"
              >
                {tag}
              </span>
            ))}
          </div>
          <h1 className="text-5xl md:text-7xl font-bold font-heading tracking-tight mb-6">
            E-Commerce Reimagined
          </h1>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            A headless e-commerce solution built for scale — real-time inventory,
            seamless checkout, and exceptional performance.
          </p>
        </div>
      </section>

      {/* Metrics */}
      <section className="px-6 py-20 max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: "98+", label: "Lighthouse Score" },
            { value: "3.2s", label: "Avg. Page Load" },
            { value: "35%", label: "Lower Cart Abandonment" },
            { value: "99.9%", label: "Uptime" },
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
          This headless e-commerce platform separates the storefront from the backend,
          enabling maximum flexibility in user experience design while maintaining enterprise-grade
          reliability. Built on Next.js App Router with server-side rendering for optimal SEO,
          the platform achieves consistent 98+ Lighthouse scores across all metrics.
        </p>
        <p className="text-lg text-white/70 leading-relaxed">
          The Stripe integration handles payment processing with support for multiple currencies,
          automatic tax calculation, and fraud detection. Real-time inventory syncing ensures
          customers always see accurate stock levels, dramatically reducing cart abandonment
          from overselling.
        </p>
      </section>

      {/* Tech Stack */}
      <section className="px-6 py-16 max-w-6xl mx-auto border-t border-white/10">
        <h2 className="text-3xl font-bold font-heading mb-8">Tech Stack</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {[
            "Next.js 16 (App Router)",
            "TypeScript",
            "Stripe Connect",
            "Tailwind CSS 4",
            "PostgreSQL (Prisma)",
            "Redis (Real-time sync)",
            "Vercel Edge Functions",
            "Framer Motion",
            "next/image optimization",
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
              title: "Headless Architecture",
              desc: "Decoupled frontend and backend allow independent scaling and technology choices. The same API powers web, mobile, and third-party integrations.",
            },
            {
              title: "Real-time Inventory Sync",
              desc: "WebSocket-powered inventory updates ensure stock levels are always current. Integrated with warehouse management systems for seamless fulfillment.",
            },
            {
              title: "Stripe-Powered Checkout",
              desc: "Stripe Checkout handles payments, subscriptions, and invoicing. Support for 135+ currencies with automatic currency conversion.",
            },
            {
              title: "Performance-First Design",
              desc: "Server components, image optimization, and edge caching deliver sub-3-second load times globally. Core Web Vitals consistently in the green.",
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
        <h2 className="text-3xl font-bold font-heading mb-4">Interested in a similar project?</h2>
        <p className="text-white/60 mb-8">
          I specialize in building high-performance e-commerce platforms.
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
