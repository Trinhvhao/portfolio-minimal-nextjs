import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Web3 NFT Platform – Three.js & WebGL 3D Gallery | Trịnh Văn Hào",
  description:
    "An immersive 3D NFT gallery built with Three.js and WebGL. Custom shaders, premium browsing experience, and seamless blockchain integration. Full case study by Trịnh Văn Hào.",
  keywords: [
    "Web3 NFT platform",
    "Three.js NFT gallery",
    "WebGL 3D",
    "NFT marketplace",
    "3D web experience",
    "Trịnh Văn Hào",
  ],
  openGraph: {
    title: "Web3 NFT Platform – Three.js & WebGL 3D Gallery",
    description:
      "Immersive 3D NFT gallery with custom WebGL shaders and premium browsing experience.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1634152962476-4b8a00e1915c?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Web3 NFT Platform – Three.js & WebGL",
      },
    ],
  },
};

const projectSchema = {
  "@context": "https://schema.org",
  "@type": "CreativeWork",
  name: "Web3 NFT Platform",
  description:
    "Immersive 3D gallery for digital assets with custom shaders and WebGL rendering for premium browsing.",
  author: {
    "@type": "Person",
    name: "Trịnh Văn Hào",
    url: "https://www.hayyie.click",
  },
  keywords: ["Three.js", "WebGL", "NFT", "Web3", "GLSL Shaders", "React"],
  dateCreated: "2023-03-01",
  dateModified: "2026-04-21",
};

export default function Web3NFTProject() {
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
            src="https://images.unsplash.com/photo-1634152962476-4b8a00e1915c?auto=format&fit=crop&w=1920&q=80"
            alt="Web3 NFT platform 3D interface"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050505]/80 to-[#050505]" />
        </div>
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <div className="flex gap-3 justify-center mb-6 flex-wrap">
            {["Three.js", "WebGL", "GLSL", "React"].map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-xs font-mono border border-white/20 rounded-full bg-white/5"
              >
                {tag}
              </span>
            ))}
          </div>
          <h1 className="text-5xl md:text-7xl font-bold font-heading tracking-tight mb-6">
            Web3 NFT Platform
          </h1>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Where digital art meets immersive 3D — custom shaders and WebGL rendering
            for a premium NFT browsing experience.
          </p>
        </div>
      </section>

      {/* Metrics */}
      <section className="px-6 py-20 max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: "60fps", label: "3D Rendering" },
            { value: "12", label: "Custom GLSL Shaders" },
            { value: "<2s", label: "Asset Load Time" },
            { value: "4K", label: "Texture Resolution" },
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
          This Web3 NFT platform transforms the browsing experience with a fully immersive 3D gallery
          powered by Three.js and custom GLSL shaders. Each NFT is presented as a 3D object that
          users can rotate, zoom, and examine in detail — turning passive browsing into an
          interactive discovery experience.
        </p>
        <p className="text-lg text-white/70 leading-relaxed">
          The platform supports GLTF/GLB 3D models, high-resolution 2D images, and audio NFTs.
          A custom WebGL renderer handles complex scenes with instanced geometry for collections
          containing thousands of assets without frame drops.
        </p>
      </section>

      {/* Tech Stack */}
      <section className="px-6 py-16 max-w-6xl mx-auto border-t border-white/10">
        <h2 className="text-3xl font-bold font-heading mb-8">Tech Stack</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {[
            "Three.js (r160+)",
            "React Three Fiber",
            "GLSL Shaders",
            "WebGL 2.0",
            "TypeScript",
            "Framer Motion",
            "Tailwind CSS 4",
            "Vercel Edge",
            "IPFS Integration",
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
              title: "Custom GLSL Shaders",
              desc: "12 hand-crafted shaders including holographic effects, glass refraction, volumetric lighting, and animated displacement for unique NFT presentations.",
            },
            {
              title: "3D Gallery Navigation",
              desc: "Orbit controls, zoom, and pan on all 3D assets. Collection view supports grid, spiral, and cube-arrangement layouts with smooth transitions.",
            },
            {
              title: "Instanced Rendering",
              desc: "Render 1000+ NFT previews simultaneously using GPU instancing. Scene graph optimization keeps frame rates stable under heavy load.",
            },
            {
              title: "GLTF/GLB Pipeline",
              desc: "Full 3D model support with Draco compression, PBR materials, and morph targets for animated NFTs.",
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
        <h2 className="text-3xl font-bold font-heading mb-4">Want to build a Web3 experience?</h2>
        <p className="text-white/60 mb-8">
          I create immersive 3D web applications that push the boundaries of what&apos;s possible in a browser.
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
