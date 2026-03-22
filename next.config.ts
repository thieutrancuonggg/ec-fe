import type { NextConfig } from "next";

// Whitelist CDN/image hostnames explicitly — never use "**" in production.
// Add your actual CDN domain(s) here before going live.
const allowedImageHostnames = [
  "images.unsplash.com",
  "cdn.example.com", // replace with your actual CDN
];

const nextConfig: NextConfig = {
  reactStrictMode: true,
  cacheComponents: true,
  transpilePackages: ["antd", "@ant-design/nextjs-registry", "@ant-design/icons", "@ant-design/cssinjs"],
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    remotePatterns: allowedImageHostnames.map((hostname) => ({
      protocol: "https" as const,
      hostname,
    })),
  },
};

export default nextConfig;
