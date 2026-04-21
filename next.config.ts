import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "randomuser.me",
      },
      {
        protocol: "https",
        hostname: "cdn.jsdelivr.net",
      },
      {
        protocol: "https",
        hostname: "my.spline.design",
      },
      {
        protocol: "https",
        hostname: "api.microlink.io",
      },
    ],
  },

  // Permanent 301 redirects — non-www → www
  // This fixes the Vercel default 307 redirect issue
  async redirects() {
    return [
      {
        source: "/(.*)",
        has: [
          {
            type: "host",
            value: "hayyie.click",
          },
        ],
        destination: "https://www.hayyie.click/:1",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
