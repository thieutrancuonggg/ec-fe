// Product detail → SSR (no `use cache` — always fresh, but service handles caching via cacheTag)
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { siteConfig } from "@/config/site";
import { getProductBySlug } from "@/modules/product/services/productService";
import { ProductDetailContent } from "./ProductDetailContent";

interface ProductDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: ProductDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = await getProductBySlug(slug);

  if (!product) return { title: "Product not found" };

  return {
    title: product.name,
    description: product.description,
    openGraph: {
      title: product.name,
      description: product.description,
      type: "website",
      images: product.images[0]
        ? [{ url: product.images[0].url, width: product.images[0].width, height: product.images[0].height, alt: product.images[0].alt }]
        : [],
    },
  };
}

export default async function ProductDetailPage({ params }: ProductDetailPageProps) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);

  if (!product) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    image: product.images.map((img) => img.url),
    url: `${siteConfig.url}/products/${product.slug}`,
    sku: product.id,
    offers: {
      "@type": "Offer",
      price: product.price,
      priceCurrency: process.env.NEXT_PUBLIC_CURRENCY ?? "USD",
      availability: product.inStock ? "https://schema.org/InStock" : "https://schema.org/OutOfStock",
    },
    ...(product.reviewCount > 0 && {
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: product.rating,
        reviewCount: product.reviewCount,
      },
    }),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ProductDetailContent product={product} />
    </>
  );
}

