import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Fintech Dashboard – React & D3.js Analytics Platform | Trịnh Văn Hào",
  description:
    "A data-dense financial analytics dashboard built with React and D3.js. Real-time WebSocket feeds, complex data visualizations, and enterprise-grade performance. Full case study by Trịnh Văn Hào.",
  keywords: [
    "fintech dashboard",
    "D3.js data visualization",
    "React dashboard",
    "financial analytics",
    "real-time data",
    "Trịnh Văn Hào",
  ],
  openGraph: {
    title: "Fintech Dashboard – React & D3.js Analytics Platform",
    description:
      "Data-dense financial analytics dashboard with real-time WebSocket feeds and complex D3.js visualizations.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Fintech Dashboard – React & D3.js",
      },
    ],
  },
};

const projectSchema = {
  "@context": "https://schema.org",
  "@type": "CreativeWork",
  name: "Fintech Dashboard",
  description:
    "Data-dense financial analytics dashboard with complex D3.js visualizations and real-time WebSocket feeds.",
  author: {
    "@type": "Person",
    name: "Trịnh Văn Hào",
    url: "https://www.hayyie.click",
  },
  keywords: ["React", "D3.js", "Fintech", "Dashboard", "WebSocket", "TypeScript"],
  dateCreated: "2023-06-01",
  dateModified: "2026-04-21",
};

export default function FintechDashboardProject() {
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
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1920&q=80"
            alt="Fintech dashboard interface"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050505]/80 to-[#050505]" />
        </div>
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <div className="flex gap-3 justify-center mb-6 flex-wrap">
            {["React", "D3.js", "WebSocket", "TypeScript"].map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-xs font-mono border border-white/20 rounded-full bg-white/5"
              >
                {tag}
              </span>
            ))}
          </div>
          <h1 className="text-5xl md:text-7xl font-bold font-heading tracking-tight mb-6">
            Fintech Dashboard
          </h1>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Complex financial analytics made accessible — real-time data visualizations
            that transform raw numbers into actionable insights.
          </p>
        </div>
      </section>

      {/* Metrics */}
      <section className="px-6 py-20 max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: "50+", label: "Chart Types" },
            { value: "<100ms", label: "Update Latency" },
            { value: "10M+", label: "Data Points Rendered" },
            { value: "60fps", label: "Animation Performance" },
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
          This financial analytics dashboard processes and visualizes millions of data points
          in real-time. Built with React for the UI layer and D3.js for complex visualizations,
          it delivers enterprise-grade performance with smooth 60fps animations even under
          heavy data loads.
        </p>
        <p className="text-lg text-white/70 leading-relaxed">
          WebSocket connections feed live market data, cryptocurrency prices, and portfolio
          updates directly into the visualization engine. The custom D3.js chart library supports
          candlesticks, heatmaps, network graphs, and geospatial visualizations — all
          maintaining performance at scale.
        </p>
      </section>

      {/* Tech Stack */}
      <section className="px-6 py-16 max-w-6xl mx-auto border-t border-white/10">
        <h2 className="text-3xl font-bold font-heading mb-8">Tech Stack</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {[
            "React 19",
            "D3.js v7",
            "WebSocket (native)",
            "TypeScript",
            "Tailwind CSS 4",
            "Framer Motion",
            "Recharts (secondary)",
            "Zustand (state)",
            "Vite (bundler)",
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
              title: "Real-time Data Streams",
              desc: "WebSocket-powered live feeds for market data, portfolio updates, and price alerts. Sub-100ms update latency with efficient DOM batching.",
            },
            {
              title: "Custom D3.js Visualizations",
              desc: "50+ chart types including candlesticks, treemaps, force-directed graphs, and custom geospatial maps. All optimized for performance with canvas rendering.",
            },
            {
              title: "60fps Animations",
              desc: "Smooth transitions and data morphing even with millions of data points. Custom animation orchestration with requestAnimationFrame timing.",
            },
            {
              title: "Responsive Data Tables",
              desc: "Virtual scrolling for large datasets. Sortable, filterable tables that handle 100K+ rows without performance degradation.",
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
        <h2 className="text-3xl font-bold font-heading mb-4">Need a data visualization expert?</h2>
        <p className="text-white/60 mb-8">
          I build performant, beautiful dashboards that make complex data actionable.
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
