// Product detail → SSR (no `use cache` — always fresh, but service handles caching via cacheTag)
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Container } from "@/shared/components/layout/Container";
import { Badge } from "@/shared/components/ui/Badge";
import { formatPrice } from "@/shared/lib/utils";
import { siteConfig } from "@/config/site";
import { AddToCartButton } from "@/modules/cart/components/AddToCartButton";
import { getProductBySlug } from "@/modules/product/services/productService";

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

  const thumbnail = product.images[0];
  const isOnSale = product.compareAtPrice !== undefined && product.compareAtPrice > product.price;

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

      <Container as="main" className="py-10">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          <div className="relative aspect-square overflow-hidden rounded-xl bg-neutral-50">
            {thumbnail ? (
              <Image src={thumbnail.url} alt={thumbnail.alt} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" priority />
            ) : (
              <div className="flex h-full items-center justify-center text-neutral-300 text-sm">No image</div>
            )}
            {isOnSale && <div className="absolute left-4 top-4"><Badge variant="destructive">Sale</Badge></div>}
          </div>

          <div className="flex flex-col gap-6">
            <div>
              <p className="text-sm text-neutral-500">{product.category.name}</p>
              <h1 className="mt-1 text-3xl font-bold tracking-tight text-neutral-900">{product.name}</h1>
              {product.rating > 0 && (
                <div className="mt-2 flex items-center gap-2">
                  <span className="text-yellow-400" aria-hidden="true">{"★".repeat(Math.round(product.rating))}{"☆".repeat(5 - Math.round(product.rating))}</span>
                  <span className="text-sm text-neutral-500">{product.rating.toFixed(1)} ({product.reviewCount} reviews)</span>
                </div>
              )}
            </div>

            <div className="flex items-baseline gap-3">
              <span className="text-3xl font-bold text-neutral-900">{formatPrice(product.price)}</span>
              {isOnSale && <span className="text-xl text-neutral-400 line-through">{formatPrice(product.compareAtPrice!)}</span>}
            </div>

            <p className="text-neutral-600 leading-relaxed">{product.description}</p>

            {!product.inStock && <Badge variant="secondary" className="w-fit">Out of stock</Badge>}

            <AddToCartButton product={product} />

            {product.tags.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {product.tags.map((tag) => <Badge key={tag} variant="outline">{tag}</Badge>)}
              </div>
            )}
          </div>
        </div>
      </Container>
    </>
  );
}
