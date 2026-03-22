import Link from "next/link";
import type { Metadata } from "next";
import { Container } from "@/shared/components/layout/Container";
import { Button } from "@/shared/components/ui/Button";
import { ProductGrid } from "@/modules/product/components/ProductGrid";
import { getFeaturedProducts } from "@/modules/product/services/productService";
import { siteConfig } from "@/config/site";

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

      <section className="bg-neutral-50 border-b border-neutral-200">
        <Container className="py-20 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-neutral-900 sm:text-6xl">
            Discover our collection
          </h1>
          <p className="mt-4 text-lg text-neutral-500 max-w-2xl mx-auto">
            Curated products, delivered with care. Find everything you need in one place.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Button asChild size="lg">
              <Link href="/products">Shop Now</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/products?category=new">New Arrivals</Link>
            </Button>
          </div>
        </Container>
      </section>

      <Container as="section" className="py-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold tracking-tight text-neutral-900">
            Featured Products
          </h2>
          <Link href="/products" className="text-sm font-medium text-neutral-900 hover:underline">
            View all →
          </Link>
        </div>
        <ProductGrid products={featuredProducts} />
      </Container>
    </>
  );
}
