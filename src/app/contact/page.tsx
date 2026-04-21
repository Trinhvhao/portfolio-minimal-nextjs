import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact – Trịnh Văn Hào | Full Stack Developer (Available for Work)",
  description:
    "Get in touch with Trịnh Văn Hào — Full Stack Developer based in Vietnam. Available for freelance projects, collaborations, and full-time opportunities. React, Next.js, AI, and Web development.",
  keywords: [
    "contact Trịnh Văn Hào",
    "hire Trịnh Văn Hào",
    "freelance developer Vietnam",
    "remote developer contact",
  ],
  openGraph: {
    title: "Contact – Trịnh Văn Hào",
    description:
      "Get in touch with Trịnh Văn Hào. Available for freelance, collaborations, and full-time opportunities.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Contact Trịnh Văn Hào",
      },
    ],
  },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      {/* Header */}
      <section className="pt-32 pb-20 px-6 max-w-5xl mx-auto">
        <p className="text-xs font-mono text-white/40 tracking-widest uppercase mb-4">
          Get In Touch
        </p>
        <h1 className="text-6xl md:text-8xl font-bold font-heading tracking-tight mb-6">
          Let&apos;s build it together.
        </h1>
        <p className="text-xl text-white/50 max-w-2xl">
          Available for freelance projects, collaborations, and full-time opportunities.
          If you have a project in mind, let&apos;s talk.
        </p>
      </section>

      {/* Contact Grid */}
      <section className="px-6 pb-24 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Form */}
          <div>
            <form className="flex flex-col gap-10">
              <div className="relative group">
                <input
                  type="text"
                  id="name"
                  className="w-full bg-transparent border-b border-white/20 py-4 text-lg text-white focus:outline-none focus:border-white transition-colors peer"
                  placeholder=" "
                />
                <label
                  htmlFor="name"
                  className="absolute left-0 top-4 text-white/40 text-lg transition-all peer-focus:-top-6 peer-focus:text-xs peer-focus:uppercase peer-focus:tracking-widest peer-not-placeholder-shown:-top-6 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:uppercase peer-not-placeholder-shown:tracking-widest cursor-text"
                >
                  Your name
                </label>
              </div>

              <div className="relative group">
                <input
                  type="email"
                  id="email"
                  className="w-full bg-transparent border-b border-white/20 py-4 text-lg text-white focus:outline-none focus:border-white transition-colors peer"
                  placeholder=" "
                />
                <label
                  htmlFor="email"
                  className="absolute left-0 top-4 text-white/40 text-lg transition-all peer-focus:-top-6 peer-focus:text-xs peer-focus:uppercase peer-focus:tracking-widest peer-not-placeholder-shown:-top-6 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:uppercase peer-not-placeholder-shown:tracking-widest cursor-text"
                >
                  Your email
                </label>
              </div>

              <div className="relative group">
                <textarea
                  id="message"
                  rows={4}
                  className="w-full bg-transparent border-b border-white/20 py-4 text-lg text-white focus:outline-none focus:border-white transition-colors peer resize-none"
                  placeholder=" "
                />
                <label
                  htmlFor="message"
                  className="absolute left-0 top-4 text-white/40 text-lg transition-all peer-focus:-top-6 peer-focus:text-xs peer-focus:uppercase peer-focus:tracking-widest peer-not-placeholder-shown:-top-6 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:uppercase peer-not-placeholder-shown:tracking-widest cursor-text"
                >
                  Tell me about your project
                </label>
              </div>

              <button
                type="button"
                className="self-start flex items-center gap-4 group mt-4"
              >
                <span className="text-sm font-mono uppercase tracking-widest text-white group-hover:text-white/70 transition-colors">
                  Send Message
                </span>
                <div className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-12">
            <div>
              <h3 className="text-xs font-mono uppercase tracking-widest text-white/40 mb-6">Direct Contact</h3>
              <div className="space-y-3">
                <a
                  href="mailto:haotrinh142@gmail.com"
                  className="block text-xl hover:text-white/70 transition-colors"
                >
                  haotrinh142@gmail.com
                </a>
                <p className="text-white/40 font-mono text-sm">Based in Vietnam — available globally (remote)</p>
              </div>
            </div>

            <div>
              <h3 className="text-xs font-mono uppercase tracking-widest text-white/40 mb-6">Online</h3>
              <div className="space-y-3">
                {[
                  { name: "GitHub", url: "https://github.com/Trinhvhao" },
                  { name: "LinkedIn", url: "https://www.linkedin.com/in/trinhvanhao" },
                  { name: "TikTok", url: "https://www.tiktok.com/@itlamcontent.th" },
                ].map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-white/60 hover:text-white transition-colors"
                  >
                    <span className="text-xs font-mono text-white/30">{link.name}</span>
                    <span>→</span>
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xs font-mono uppercase tracking-widest text-white/40 mb-6">Availability</h3>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-green-500/20 bg-green-500/5">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-xs font-mono text-green-400">Available for freelance</span>
              </div>
              <p className="text-white/40 text-sm mt-3">
                Open to project-based work, collaborations, and full-time opportunities.
                Response within 24 hours.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Back */}
      <section className="px-6 py-12 max-w-5xl mx-auto border-t border-white/10 text-center">
        <Link href="/" className="text-white/40 font-mono text-sm hover:text-white transition-colors">
          ← Back to portfolio
        </Link>
      </section>
    </main>
  );
}
