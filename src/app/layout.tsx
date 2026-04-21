import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const siteUrl = "https://www.hayyie.click";
const ogImage = `${siteUrl}/images/og-cover-1200x630.jpg`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Trịnh Văn Hào - Full Stack Developer | Code, Product Thinking & AI",
  description:
    "Kết hợp tư duy sản phẩm, sáng tạo và AI để xây dựng trải nghiệm web độc đáo. Portfolio của Trịnh Văn Hào - Full Stack Developer.",
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
    "Hao Trinh",
    "Full Stack Developer",
    "Frontend Developer",
    "React Developer",
    "TypeScript",
    "Next.js",
    "Portfolio",
    "Web Development",
    "UI/UX",
    "Motion Design",
    "GSAP",
    "Three.js",
    "Vietnam Developer",
    "Vietnamese Developer",
    "Product Thinking",
    "AI",
    "Creative Development",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/",
      "vi-VN": "/",
    },
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Trịnh Văn Hào Portfolio",
    title: "Trịnh Văn Hào - Full Stack Developer | Code, Product Thinking & AI",
    description:
      "Kết hợp tư duy sản phẩm, sáng tạo và AI để xây dựng trải nghiệm web độc đáo. Portfolio của Trịnh Văn Hào - Full Stack Developer.",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "Trịnh Văn Hào - Full Stack Developer | Code, Product Thinking & AI",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    site: "@hayyie",
    creator: "@hayyie",
    title: "Trịnh Văn Hào - Full Stack Developer | Code, Product Thinking & AI",
    description:
      "Kết hợp tư duy sản phẩm, sáng tạo và AI để xây dựng trải nghiệm web độc đáo. Portfolio của Trịnh Văn Hào - Full Stack Developer.",
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
  "@type": "WebSite",
  name: "Trịnh Văn Hào Portfolio",
  alternateName: "Trịnh Văn Hào Portfolio",
  url: `${siteUrl}/`,
  description:
    "Trịnh Văn Hào - Full Stack Developer Portfolio. Personal portfolio showcasing frontend projects, creative interfaces, and product development experience.",
  author: {
    "@type": "Person",
    name: "Trịnh Văn Hào",
    alternateName: "Trịnh Văn Hào",
    url: siteUrl,
    sameAs: [
      "https://github.com/Trinhvhao",
      "https://www.linkedin.com/in/trinhvanhao",
    ],
  },
  inLanguage: ["en", "vi"],
  potentialAction: {
    "@type": "SearchAction",
    target: `${siteUrl}/?q={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Trịnh Văn Hào",
  alternateName: ["Trịnh Văn Hào", "Hao Trinh", "Trinh Hao"],
  givenName: "Hao",
  familyName: "Trịnh Văn",
  jobTitle: "Full Stack Developer",
  url: `${siteUrl}/`,
  image: ogImage,
  description:
    "Trịnh Văn Hào - Full Stack Developer specializing in React, TypeScript, Next.js, and modern web technologies.",
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
    "JavaScript",
    "Web Development",
    "Artificial Intelligence",
    "Machine Learning",
    "RAG",
    "NLP",
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
  ],
};

const portfolioSchema = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  dateCreated: "2024-01-01",
  dateModified: new Date().toISOString().split("T")[0],
  mainEntity: {
    "@type": "Person",
    name: "Trịnh Văn Hào",
  },
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
        <meta property="og:image:secure_url" content={ogImage} />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="twitter:image:alt" content="Trịnh Văn Hào - Full Stack Developer | Code, Product Thinking & AI" />
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
        <Script
          id="person-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <Script
          id="portfolio-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(portfolioSchema) }}
        />
        {children}
      </body>
    </html>
  );
}
