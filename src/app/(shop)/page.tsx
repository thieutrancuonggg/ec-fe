import type { Metadata } from "next";
import { getFeaturedProducts } from "@/modules/product/services/productService";
import { siteConfig } from "@/config/site";
import { HomeContent } from "./HomeContent";

export const metadata: Metadata = {
  title: "Home",
  description: siteConfig.description,
};

function HomeJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${siteConfig.url}/products?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export default async function HomePage() {
  const featuredProducts = await getFeaturedProducts(8);

  return (
    <>
      <HomeJsonLd />
      <HomeContent featuredProducts={featuredProducts} />
    </>
  );
}
