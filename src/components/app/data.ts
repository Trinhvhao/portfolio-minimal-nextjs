import type { Experience, Project } from "./types";

export const projects: Project[] = [
  {
    title: "E-Commerce Reimagined",
    tags: ["< Next.js />", "< Stripe />"],
    image: "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&w=1200&q=80",
    colSpan: "md:col-span-8",
    href: "/projects/e-commerce-reimagined",
  },
  {
    title: "Fintech Dashboard",
    tags: ["< React />", "< D3.js />"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    colSpan: "md:col-span-4",
    href: "/projects/fintech-dashboard",
  },
  {
    title: "Web3 NFT Platform",
    tags: ["< WebGL />", "< Three.js />"],
    image: "https://images.unsplash.com/photo-1634152962476-4b8a00e1915c?auto=format&fit=crop&w=800&q=80",
    colSpan: "md:col-span-4",
    href: "/projects/web3-nft-platform",
  },
  {
    title: "Creative Agency",
    tags: ["< GSAP />", "< Tailwind />"],
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=1200&q=80",
    colSpan: "md:col-span-8",
    href: "/projects/creative-agency",
  },
];

// Note: Experience data is now managed in ExperienceTimeline.tsx directly.
// The fake experience entries (Acme Corp, Global Tech, Creative Agency) from data.ts
// have been removed as the live site uses real data from ExperienceTimeline.tsx.
