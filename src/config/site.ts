export const siteConfig = {
  name: "EC Store",
  description: "A modern ecommerce platform built with Next.js.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  ogImage: "/og.png",
  links: {
    twitter: "https://twitter.com",
    github: "https://github.com",
  },
} as const;

export type SiteConfig = typeof siteConfig;
