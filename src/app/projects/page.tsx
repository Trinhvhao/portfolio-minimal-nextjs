import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Projects – Featured Work by Trịnh Văn Hào | Full Stack Developer",
  description:
    "Explore featured projects by Trịnh Văn Hào — e-commerce platforms, fintech dashboards, Web3 NFT galleries, and award-winning creative agency sites. Built with React, Next.js, Three.js, and GSAP.",
  keywords: [
    "Trịnh Văn Hào projects",
    "portfolio projects",
    "Next.js projects",
    "React projects",
    "Three.js projects",
    "GSAP projects",
  ],
  openGraph: {
    title: "Projects – Featured Work by Trịnh Văn Hào",
    description:
      "Featured projects: e-commerce, fintech dashboards, Web3 NFT galleries, and award-winning creative sites.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Projects by Trịnh Văn Hào",
      },
    ],
  },
};

const projects = [
  {
    slug: "e-commerce-reimagined",
    title: "E-Commerce Reimagined",
    tags: ["Next.js", "Stripe", "TypeScript"],
    image: "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&w=800&q=80",
    description:
      "A high-performance headless e-commerce solution with real-time inventory syncing and seamless Stripe checkout.",
    colSpan: "md:col-span-8",
    metrics: ["98+ Lighthouse", "3.2s Load", "35% Lower Abandonment"],
  },
  {
    slug: "fintech-dashboard",
    title: "Fintech Dashboard",
    tags: ["React", "D3.js", "WebSocket"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    description:
      "Data-dense financial analytics dashboard with real-time WebSocket feeds and complex D3.js visualizations.",
    colSpan: "md:col-span-4",
    metrics: ["50+ Chart Types", "<100ms Updates", "60fps Performance"],
  },
  {
    slug: "web3-nft-platform",
    title: "Web3 NFT Platform",
    tags: ["Three.js", "WebGL", "GLSL"],
    image: "https://images.unsplash.com/photo-1634152962476-4b8a00e1915c?auto=format&fit=crop&w=800&q=80",
    description:
      "Immersive 3D gallery for digital assets with custom shaders and WebGL rendering for a premium browsing experience.",
    colSpan: "md:col-span-4",
    metrics: ["12 GLSL Shaders", "60fps 3D", "4K Textures"],
  },
  {
    slug: "creative-agency",
    title: "Creative Agency",
    tags: ["GSAP", "Tailwind CSS", "Motion"],
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=800&q=80",
    description:
      "Award-winning portfolio with scroll-jacking, custom cursors, and complex GSAP timeline animations.",
    colSpan: "md:col-span-8",
    metrics: ["Awwwards SOTD", "20+ Timelines", "60fps Animations"],
  },
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      {/* Header */}
      <section className="pt-32 pb-16 px-6 max-w-7xl mx-auto">
        <p className="text-xs font-mono text-white/40 tracking-widest uppercase mb-4">
          Featured Work
        </p>
        <h1 className="text-6xl md:text-8xl font-bold font-heading tracking-tight mb-6">
          Projects
        </h1>
        <p className="text-xl text-white/50 max-w-2xl">
          A selection of projects spanning e-commerce, fintech, Web3, and creative digital experiences.
          Each represents a blend of technical rigor and design craft.
        </p>
      </section>

      {/* Project Grid */}
      <section className="px-6 pb-24 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className={`group relative ${project.colSpan} border border-white/10 overflow-hidden rounded-2xl hover:border-white/30 transition-all duration-500`}
            >
              {/* Image */}
              <div className="relative h-72 md:h-96 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover opacity-50 grayscale group-hover:grayscale-0 group-hover:opacity-70 group-hover:scale-105 transition-all duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs font-mono border border-white/20 rounded bg-white/5 text-white/50 group-hover:text-white/70 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h2 className="text-2xl md:text-4xl font-bold font-heading tracking-tight mb-2 group-hover:text-white transition-colors">
                  {project.title}
                </h2>
                <p className="text-sm text-white/50 group-hover:text-white/70 transition-colors mb-4">
                  {project.description}
                </p>
                <div className="flex gap-4 flex-wrap">
                  {project.metrics.map((metric) => (
                    <span key={metric} className="text-xs font-mono text-white/30">
                      {metric}
                    </span>
                  ))}
                </div>
                <div className="mt-4 flex items-center gap-2 text-xs font-mono text-white/40 group-hover:text-white transition-colors">
                  View Case Study →
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Archive CTA */}
      <section className="px-6 py-20 max-w-7xl mx-auto border-t border-white/10">
        <div className="text-center">
          <p className="text-white/40 font-mono text-sm mb-4">More work in the archive</p>
          <Link
            href="/#archive"
            className="inline-flex items-center gap-2 px-8 py-4 border border-white/20 rounded-full font-mono text-sm hover:bg-white hover:text-black transition-all"
          >
            VIEW ALL PROJECTS →
          </Link>
        </div>
      </section>
    </main>
  );
}
