"use client";

import React from "react";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const GithubIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.3 9.42 7.88 10.95.58.1.79-.25.79-.56 0-.27-.01-1-.02-1.97-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.28-1.7-1.28-1.7-1.05-.72.08-.71.08-.71 1.16.08 1.78 1.2 1.78 1.2 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.27-5.24-5.65 0-1.25.45-2.26 1.19-3.06-.12-.29-.52-1.45.11-3.02 0 0 .97-.31 3.18 1.17a11.05 11.05 0 013 0c0 2.2-1.48 3.17-1.17 3.17 1.2 1.2 1.78 1.81 1.78 1.81.63 1.57.23 2.73.11 3.02.74.8 1.18 1.81 1.18 3.06 0 4.4-2.7 5.35-5.27 5.64.41.35.78 1.03.78 2.08 0 1.5-.02 2.7-.02 3.07 0 .31.21.67.8.56A11.52 11.52 0 0123.5 12C23.5 5.65 18.35.5 12 .5z" />
  </svg>
);

const GlobeIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
);

export const ContactSection = React.memo(function ContactSection() {
  return (
    <section id="contact" className="pt-16 md:pt-20 pb-10 px-6 max-w-6xl mx-auto relative">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-16 md:mb-24 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-heading font-bold mb-12 tracking-tighter">Let&apos;s build it together.</h2>
          <form className="flex flex-col gap-10 md:gap-12">
            <div className="relative group">
              <input
                type="text"
                id="name"
                className="w-full bg-transparent border-b border-text-muted/30 py-4 text-lg text-text-light focus:outline-none focus:border-text-light transition-colors peer"
                placeholder=" "
              />
              <label
                htmlFor="name"
                className="absolute left-0 top-4 text-text-muted text-lg transition-all peer-focus:-top-6 peer-focus:text-xs peer-focus:text-text-light peer-focus:uppercase peer-focus:tracking-widest peer-not-placeholder-shown:-top-6 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:uppercase peer-not-placeholder-shown:tracking-widest cursor-text"
              >
                What&apos;s your name?
              </label>
            </div>
            <div className="relative group">
              <input
                type="email"
                id="email"
                className="w-full bg-transparent border-b border-text-muted/30 py-4 text-lg text-text-light focus:outline-none focus:border-text-light transition-colors peer"
                placeholder=" "
              />
              <label
                htmlFor="email"
                className="absolute left-0 top-4 text-text-muted text-lg transition-all peer-focus:-top-6 peer-focus:text-xs peer-focus:text-text-light peer-focus:uppercase peer-focus:tracking-widest peer-not-placeholder-shown:-top-6 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:uppercase peer-not-placeholder-shown:tracking-widest cursor-text"
              >
                What&apos;s your email?
              </label>
            </div>
            <div className="relative group">
              <textarea
                id="project"
                rows={3}
                className="w-full bg-transparent border-b border-text-muted/30 py-4 text-lg text-text-light focus:outline-none focus:border-text-light transition-colors peer resize-none"
                placeholder=" "
              />
              <label
                htmlFor="project"
                className="absolute left-0 top-4 text-text-muted text-lg transition-all peer-focus:-top-6 peer-focus:text-xs peer-focus:text-text-light peer-focus:uppercase peer-focus:tracking-widest peer-not-placeholder-shown:-top-6 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:uppercase peer-not-placeholder-shown:tracking-widest cursor-text"
              >
                Tell me about your project.
              </label>
            </div>
            <button type="button" className="self-start flex items-center gap-4 group mt-4">
              <span className="text-sm font-mono uppercase tracking-widest text-text-light group-hover:text-white transition-colors">
                Send Message
              </span>
              <div className="w-10 h-10 rounded-full border border-text-muted/30 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                <ArrowRight size={16} />
              </div>
            </button>
          </form>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-12 md:gap-16 lg:pl-12"
        >
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-text-muted mb-6">Contact Details</h4>
            <div className="flex flex-col gap-2 text-xl">
              <a href="mailto:haotrinh142@gmail.com" className="hover:text-white transition-colors">
                haotrinh142@gmail.com
              </a>
              <a href="tel:+1234567890" className="hover:text-white transition-colors">
                +1 (234) 567-890
              </a>
              <p className="text-text-muted mt-2">San Francisco, CA</p>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-text-muted mb-6">Socials</h4>
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/in/trinhvanhao"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="w-12 h-12 md:w-14 md:h-14 rounded-full border border-text-muted/30 flex items-center justify-center hover:bg-white hover:text-black transition-all text-text-light"
              >
                <LinkedinIcon className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/Trinhvhao"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="w-12 h-12 md:w-14 md:h-14 rounded-full border border-text-muted/30 flex items-center justify-center hover:bg-white hover:text-black transition-all text-text-light"
              >
                <GithubIcon className="w-5 h-5" />
              </a>
              <a
                href="https://www.tiktok.com/@itlamcontent.th"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok Profile"
                className="w-12 h-12 md:w-14 md:h-14 rounded-full border border-text-muted/30 flex items-center justify-center hover:bg-white hover:text-black transition-all text-text-light"
              >
                <GlobeIcon className="w-5 h-5" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="w-full flex justify-center items-center pb-12 pt-4 overflow-visible">
        <h1 className="text-6xl md:text-8xl lg:text-[100px] font-heading font-bold text-text-light leading-tight tracking-tighter text-center px-4">
          TRINH VAN HAO
        </h1>
      </div>
    </section>
  );
});
