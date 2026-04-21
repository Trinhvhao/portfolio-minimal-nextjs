import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

  const siteUrl = "https://www.hayyie.click";
  const ogImage = `${siteUrl}/images/og-cover-1200x630.jpg`;

  // SEO-optimized title and description
  const seoTitle = "Trịnh Văn Hào – Full Stack Developer | React, Next.js & AI (Vietnam)";
  const seoDescription = "Full Stack Developer portfolio by Trịnh Văn Hào. Building React, Next.js, and AI-powered web experiences with a product-first mindset. Vietnam-based, available globally for remote work.";

  const robotsDirectives = {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large" as const,
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  };

  export const metadata: Metadata = {
    metadataBase: new URL(siteUrl),
    title: seoTitle,
    description: seoDescription,
    applicationName: "Trịnh Văn Hào Portfolio",
    authors: [{ name: "Trịnh Văn Hào", url: siteUrl }],
    creator: "Trịnh Văn Hào",
    publisher: "Trịnh Văn Hào",
    icons: {
      icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
      shortcut: ["/favicon.svg"],
      apple: "/favicon.svg",
    },
    keywords: [
      "Trịnh Văn Hào",
      "Trinh Van Hao",
      "Full Stack Developer",
      "Frontend Developer",
      "React Developer",
      "Next.js Developer",
      "TypeScript",
      "Vietnam Developer",
      "Vietnamese Developer",
      "Portfolio",
      "Web Development",
      "AI Developer",
      "Remote Developer",
      "Freelance Developer",
      "React",
      "Node.js",
      "WebGL",
      "Three.js",
      "Tailwind CSS",
      "Product Thinking",
      "Creative Development",
    ],
    robots: robotsDirectives,
    alternates: {
      canonical: "/",
      languages: {
        "en-US": "/",
        "vi-VN": "/vi",
        "x-default": "/",
      },
    },
    openGraph: {
      type: "website",
      url: siteUrl,
      siteName: "Trịnh Văn Hào Portfolio",
      title: seoTitle,
      description: seoDescription,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: "Trịnh Văn Hào – Full Stack Developer | React, Next.js & AI (Vietnam)",
        },
      ],
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      site: "@hayyie",
      creator: "@hayyie",
      title: seoTitle,
      description: seoDescription,
      images: [ogImage],
    },
    category: "technology",
    verification: {
      google: "google-site-verification-code",
      yandex: "yandex-verification-code",
    },
  };

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#050505",
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      name: "Trịnh Văn Hào Portfolio",
      url: `${siteUrl}/`,
      description:
        "Full Stack Developer portfolio by Trịnh Văn Hào. Building React, Next.js, and AI-powered web experiences with a product-first mindset.",
      inLanguage: "en-US",
      publisher: {
        "@type": "Person",
        "@id": `${siteUrl}/#person`,
        name: "Trịnh Văn Hào",
        url: siteUrl,
      },
      potentialAction: {
        "@type": "SearchAction",
        target: `${siteUrl}/?q={search_term_string}`,
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      name: "Trịnh Văn Hào",
      alternateName: ["Trịnh Văn Hào", "Trinh Van Hao", "Hao Trinh", "Trinh Hao"],
      givenName: "Hao",
      familyName: "Trịnh Văn",
      jobTitle: "Full Stack Developer",
      url: `${siteUrl}/`,
      image: ogImage,
      description:
        "Full Stack Developer specializing in React, TypeScript, Next.js, and modern web technologies. Building AI-powered web experiences from Vietnam.",
      knowsAbout: [
        "React",
        "TypeScript",
        "Next.js",
        "Node.js",
        "Frontend Development",
        "Full Stack Development",
        "Web Performance",
        "UI/UX Design",
        "Motion Design",
        "GSAP",
        "Three.js",
        "Tailwind CSS",
        "WebGL",
        "JavaScript",
        "Web Development",
        "Artificial Intelligence",
        "Machine Learning",
        "RAG",
        "NLP",
        "Python",
        "Docker",
      ],
      skills: [
        "React",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Node.js",
        "Python",
        "PostgreSQL",
        "Docker",
        "Vercel",
        "Framer Motion",
        "GSAP",
        "Three.js",
        "WebGL",
        "Firebase",
        "Prisma",
        "GraphQL",
      ],
      nationality: {
        "@type": "Country",
        name: "Vietnam",
      },
      workLocation: {
        "@type": "Place",
        name: "Vietnam",
      },
      alumniOf: {
        "@type": "CollegeOrUniversity",
        name: "Dai Nam University",
      },
      sameAs: [
        "https://github.com/Trinhvhao",
        "https://www.linkedin.com/in/trinhvanhao",
        "https://www.tiktok.com/@hayyie",
        "https://www.facebook.com/trinhvanhao",
        "https://www.instagram.com/hayyie",
      ],
    },
    {
      "@type": "ProfilePage",
      "@id": `${siteUrl}/#webpage`,
      dateCreated: "2024-01-01",
      dateModified: new Date().toISOString().split("T")[0],
      mainEntity: {
        "@type": "Person",
        "@id": `${siteUrl}/#person`,
        name: "Trịnh Văn Hào",
      },
      inLanguage: "en-US",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={cn("font-sans", geist.variable)}>
      <head>
        <meta property="fb:app_id" content="2714831052216688" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:image:alt" content="Trịnh Văn Hào – Full Stack Developer | React, Next.js & AI (Vietnam)" />
        <link rel="preconnect" href="https://images.unsplash.com" crossOrigin="" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      </head>
      <body className="min-h-full">
        <Script
          id="website-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        {children}
      </body>
    </html>
  );
}
