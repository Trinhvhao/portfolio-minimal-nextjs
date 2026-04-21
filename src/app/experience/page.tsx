import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Work Experience – Trịnh Văn Hào | Full Stack Developer",
  description:
    "Professional experience of Trịnh Văn Hào — Website Manager at Zaka Edu, AI Intern at AIoT Lab (Dai Nam University), and Freelance Developer. Building with React, Next.js, AI, and full-stack technologies since 2018.",
  keywords: [
    "Trịnh Văn Hào experience",
    "full stack developer resume",
    "Zaka Edu developer",
    "AIoT Lab",
    "freelance developer Vietnam",
  ],
  openGraph: {
    title: "Work Experience – Trịnh Văn Hào",
    description:
      "Professional experience: Zaka Edu, AIoT Lab, and freelance development. React, Next.js, AI, and full-stack web development.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Work Experience – Trịnh Văn Hào",
      },
    ],
  },
};

const experiences = [
  {
    role: "Website Manager",
    company: "Zaka Edu",
    period: "2023 – Present",
    location: "Vietnam",
    overview:
      "Owned the end-to-end digital presence of the education center, balancing platform reliability with growth-oriented communication. Developed and operated the center website with a strong focus on usability and stability.",
    bullets: [
      "Developed and operated the center website with a strong focus on usability and stability.",
      "Designed and optimized user-facing features to improve engagement and learning journey flow.",
      "Created and deployed media assets for campaigns to strengthen brand recognition and interaction.",
      "Managed SEO strategy, increasing organic search traffic by 40% year-over-year.",
      "Integrated third-party learning management systems and payment gateways.",
    ],
    skills: ["Next.js", "SEO", "React", "WordPress", "Media Production", "Brand Strategy"],
  },
  {
    role: "AI Intern",
    company: "AIoT Lab – Dai Nam University",
    period: "July 2025 – Present",
    location: "Da Nang, Vietnam",
    overview:
      "Contributing to applied AI projects from data preparation to model development in real-world business contexts. Building production-ready AI systems for Vietnamese enterprises.",
    bullets: [
      "Built and refined a text emotion recognition model for Ngoc Dung Aesthetic Clinic — deployed for customer feedback analysis.",
      "Contributed to a tea-harvest recognition model for Van Thang Cooperative — supporting agricultural automation.",
      "Collected, cleaned, and labeled datasets to support robust model training and evaluation.",
      "Deployed models using FastAPI and Docker for scalable inference endpoints.",
    ],
    skills: ["Python", "NLP", "Computer Vision", "FastAPI", "Docker", "Data Labeling", "RAG"],
  },
  {
    role: "Freelance Developer",
    company: "Independent",
    period: "2018 – Present",
    location: "Remote",
    overview:
      "Delivered custom software solutions for clients across industries, from concept validation to production-ready releases. Specializing in AI-enabled applications, e-commerce platforms, and interactive web experiences.",
    bullets: [
      "Developed AI-assisted HR management systems tailored to client operational workflows.",
      "Built event management platforms with streamlined registration and coordination features.",
      "Implemented a mini social network project in Java, including core social interaction modules.",
      "Delivered 15+ projects across e-commerce, fintech, and Web3 verticals.",
    ],
    skills: ["React", "Node.js", "Python", "Java", "AI Integration", "Full Stack"],
  },
];

export default function ExperiencePage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      {/* Header */}
      <section className="pt-32 pb-16 px-6 max-w-5xl mx-auto">
        <p className="text-xs font-mono text-white/40 tracking-widest uppercase mb-4">
          Professional Experience
        </p>
        <h1 className="text-6xl md:text-8xl font-bold font-heading tracking-tight mb-6">
          Work History
        </h1>
        <p className="text-xl text-white/50 max-w-2xl">
          A track record of building real products — from managing education platform
          infrastructure to deploying production AI systems.
        </p>
      </section>

      {/* Experience Entries */}
      <section className="px-6 pb-24 max-w-5xl mx-auto space-y-20">
        {experiences.map((exp) => (
          <div key={exp.company} className="border border-white/10 rounded-2xl p-8 md:p-12">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
              <div>
                <h2 className="text-3xl font-bold font-heading tracking-tight">{exp.role}</h2>
                <p className="text-lg text-white/60 mt-1">{exp.company}</p>
                <p className="text-sm text-white/40 font-mono mt-1">{exp.location}</p>
              </div>
              <div className="shrink-0">
                <span className="inline-block px-4 py-2 rounded-full border border-white/10 text-sm font-mono text-white/50">
                  {exp.period}
                </span>
              </div>
            </div>

            {/* Overview */}
            <p className="text-white/60 leading-relaxed mb-6">{exp.overview}</p>

            {/* Bullets */}
            <ul className="space-y-3 mb-8">
              {exp.bullets.map((bullet, i) => (
                <li key={i} className="flex gap-3 text-white/70">
                  <span className="text-white/30 mt-1.5">—</span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>

            {/* Skills */}
            <div className="flex flex-wrap gap-2">
              {exp.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 text-xs font-mono border border-white/10 rounded-full bg-white/5 text-white/50"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* Tech Arsenal Summary */}
      <section className="px-6 py-20 max-w-5xl mx-auto border-t border-white/10">
        <h2 className="text-4xl font-bold font-heading mb-8">Tech Arsenal</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            "React / Next.js",
            "TypeScript",
            "Python",
            "Node.js",
            "PostgreSQL",
            "Docker",
            "Tailwind CSS",
            "GSAP",
            "Three.js",
            "TensorFlow",
            "FastAPI",
            "Vercel",
          ].map((tech) => (
            <div key={tech} className="px-4 py-3 border border-white/10 rounded-lg text-sm font-mono text-white/50 text-center">
              {tech}
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-20 max-w-5xl mx-auto border-t border-white/10 text-center">
        <h2 className="text-3xl font-bold font-heading mb-4">Interested in working together?</h2>
        <p className="text-white/60 mb-8">
          I&apos;m available for freelance projects and full-time opportunities.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-bold font-mono text-sm rounded-full hover:scale-105 transition-transform"
        >
          GET IN TOUCH →
        </Link>
        <div className="mt-8">
          <Link href="/" className="text-white/40 font-mono text-sm hover:text-white transition-colors">
            ← Back to portfolio
          </Link>
        </div>
      </section>
    </main>
  );
}
