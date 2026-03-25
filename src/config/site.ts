export const siteConfig = {
  name: "LR STORE",
  description: "Lọ Rem Mặc Đẹp - cửa hàng bán lẻ sản phẩm thời trang đẹp.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  ogImage: "/og.png",
  links: {
    twitter: "https://twitter.com",
    github: "https://github.com",
  },
} as const;

export type SiteConfig = typeof siteConfig;
