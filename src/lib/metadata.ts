// Dynamic metadata management for React SPA

export interface MetadataConfig {
    title?: string;
    description?: string;
    keywords?: string;
    fbAppId?: string;
    ogTitle?: string;
    ogDescription?: string;
    ogImage?: string;
    twitterTitle?: string;
    twitterDescription?: string;
    twitterImage?: string;
    twitterCard?: "summary" | "summary_large_image" | "app" | "player";
    canonical?: string;
}

const SITE_URL = "https://www.hayyie.click";

// SEO-optimized metadata
export const defaultMetadata: MetadataConfig = {
    title: "Trịnh Văn Hào – Full Stack Developer | React, Next.js & AI (Vietnam)",
    description: "Full Stack Developer portfolio by Trịnh Văn Hào. Building React, Next.js, and AI-powered web experiences with a product-first mindset. Vietnam-based, available globally for remote work.",
    keywords: "Trịnh Văn Hào, Trinh Van Hao, Full Stack Developer, Frontend Developer, React Developer, Next.js Developer, TypeScript, Portfolio, Web Development, AI Developer, Remote Developer, Freelance Developer, Vietnam Developer, React, Node.js, WebGL, Three.js, Tailwind CSS, Product Thinking, Creative Development, RAG, NLP",
    fbAppId: "2714831052216688",
    ogTitle: "Trịnh Văn Hào – Full Stack Developer | React, Next.js & AI (Vietnam)",
    ogDescription: "Full Stack Developer portfolio by Trịnh Văn Hào. Building React, Next.js, and AI-powered web experiences with a product-first mindset. Vietnam-based, available globally for remote work.",
    ogImage: `${SITE_URL}/images/og-cover-1200x630.jpg`,
    twitterTitle: "Trịnh Văn Hào – Full Stack Developer | React, Next.js & AI (Vietnam)",
    twitterDescription: "Full Stack Developer portfolio by Trịnh Văn Hào. Building React, Next.js, and AI-powered web experiences with a product-first mindset. Vietnam-based, available globally for remote work.",
    twitterImage: `${SITE_URL}/images/og-cover-1200x630.jpg`,
    twitterCard: "summary_large_image",
    canonical: `${SITE_URL}/`
};

/**
 * Update document title
 */
export function updateTitle(title: string): void {
    document.title = title;
}

/**
 * Update or create a meta tag
 */
function updateMetaTag(selector: string, content: string): void {
    let element = document.querySelector<HTMLMetaElement>(selector);

    if (!element) {
        element = document.createElement('meta');
        const attrMatch = selector.match(/\[([^=\]]+)=['"]?([^'"\]]+)['"]?\]/);

        if (!attrMatch) {
            return;
        }

        const [, attr, value] = attrMatch;
        element.setAttribute(attr, value);
        document.head.appendChild(element);
    }

    element.setAttribute('content', content);
}

/**
 * Update canonical link
 */
function updateCanonical(url: string): void {
    let link = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');

    if (!link) {
        link = document.createElement('link');
        link.rel = 'canonical';
        document.head.appendChild(link);
    }

    link.href = url;
}

/**
 * Update all metadata at once
 */
export function updateMetadata(config: MetadataConfig): void {
    const metadata = { ...defaultMetadata, ...config };

    if (metadata.title) {
        updateTitle(metadata.title);
    }

    if (metadata.description) {
        updateMetaTag('meta[name="description"]', metadata.description);
    }

    if (metadata.keywords) {
        updateMetaTag('meta[name="keywords"]', metadata.keywords);
    }

    if (metadata.fbAppId) {
        updateMetaTag('meta[property="fb:app_id"]', metadata.fbAppId);
    }

    if (metadata.ogTitle) {
        updateMetaTag('meta[property="og:title"]', metadata.ogTitle);
    }

    if (metadata.ogDescription) {
        updateMetaTag('meta[property="og:description"]', metadata.ogDescription);
    }

    if (metadata.ogImage) {
        updateMetaTag('meta[property="og:image"]', metadata.ogImage);
    }

    if (metadata.twitterTitle) {
        updateMetaTag('meta[name="twitter:title"]', metadata.twitterTitle);
    }

    if (metadata.twitterDescription) {
        updateMetaTag('meta[name="twitter:description"]', metadata.twitterDescription);
    }

    if (metadata.twitterImage) {
        updateMetaTag('meta[name="twitter:image"]', metadata.twitterImage);
    }

    if (metadata.twitterCard) {
        updateMetaTag('meta[name="twitter:card"]', metadata.twitterCard);
        updateMetaTag('meta[property="twitter:card"]', metadata.twitterCard);
    }

    if (metadata.canonical) {
        updateCanonical(metadata.canonical);
    }
}

/**
 * Reset metadata to defaults
 */
export function resetMetadata(): void {
    updateMetadata(defaultMetadata);
}

/**
 * Generate metadata for a specific section
 */
export function getSectionMetadata(section: string): MetadataConfig {
    const baseUrl = SITE_URL;

    const sectionMetadata: Record<string, MetadataConfig> = {
        about: {
            title: "About - Trịnh Văn Hào | Full Stack Developer",
            description: "Learn more about Trịnh Văn Hào, a Full Stack Developer specializing in React, TypeScript, and modern web technologies.",
            canonical: `${baseUrl}/#about`
        },
        projects: {
            title: "Projects - Trịnh Văn Hào | Portfolio",
            description: "Explore projects by Trịnh Văn Hào including E-Commerce platforms, Fintech dashboards, Web3 NFT platforms, and creative agency websites.",
            canonical: `${baseUrl}/#projects`
        },
        experience: {
            title: "Experience - Trịnh Văn Hào | Work History",
            description: "Professional experience of Trịnh Văn Hào as a Full Stack Developer at leading tech companies.",
            canonical: `${baseUrl}/#experience`
        },
        skills: {
            title: "Skills - Trịnh Văn Hào | Tech Stack",
            description: "Technical skills and expertise of Trịnh Văn Hào in React, TypeScript, Next.js, Node.js, and modern web development.",
            canonical: `${baseUrl}/#skills`
        },
        contact: {
            title: "Contact - Trịnh Văn Hào | Get In Touch",
            description: "Get in touch with Trịnh Văn Hào for collaboration opportunities, project inquiries, or professional networking.",
            canonical: `${baseUrl}/#contact`
        }
    };

    return sectionMetadata[section] || defaultMetadata;
}
