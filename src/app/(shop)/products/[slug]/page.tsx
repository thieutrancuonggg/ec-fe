// Product detail → SSR (no `use cache` — always fresh, but service handles caching via cacheTag)
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Rate, Tag, Typography } from "antd";
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
          <div style={{ position: "relative", aspectRatio: "1/1", overflow: "hidden", borderRadius: 12, background: "#f9fafb" }}>
            {thumbnail ? (
              <Image src={thumbnail.url} alt={thumbnail.alt} fill sizes="(max-width: 1024px) 100vw, 50vw" style={{ objectFit: "cover" }} priority />
            ) : (
              <div style={{ display: "flex", height: "100%", alignItems: "center", justifyContent: "center", color: "#d1d5db", fontSize: 14 }}>No image</div>
            )}
            {isOnSale && (
              <div style={{ position: "absolute", left: 16, top: 16 }}>
                <Badge variant="destructive">Sale</Badge>
              </div>
            )}
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            <div>
              <Typography.Text type="secondary" style={{ fontSize: 14 }}>{product.category.name}</Typography.Text>
              <Typography.Title level={2} style={{ margin: "4px 0 0", fontSize: 30, letterSpacing: "-0.025em" }}>{product.name}</Typography.Title>
              {product.rating > 0 && (
                <div style={{ marginTop: 8, display: "flex", alignItems: "center", gap: 8 }}>
                  <Rate disabled defaultValue={product.rating} style={{ fontSize: 14 }} />
                  <Typography.Text type="secondary" style={{ fontSize: 14 }}>
                    {product.rating.toFixed(1)} ({product.reviewCount} reviews)
                  </Typography.Text>
                </div>
              )}
            </div>

            <div style={{ display: "flex", alignItems: "baseline", gap: 12 }}>
              <Typography.Title level={3} style={{ margin: 0, fontSize: 30, color: "#111827" }}>{formatPrice(product.price)}</Typography.Title>
              {isOnSale && (
                <Typography.Text delete type="secondary" style={{ fontSize: 20 }}>{formatPrice(product.compareAtPrice!)}</Typography.Text>
              )}
            </div>

            <Typography.Paragraph style={{ color: "#4b5563", lineHeight: 1.7, margin: 0 }}>{product.description}</Typography.Paragraph>

            {!product.inStock && <Badge variant="secondary">Out of stock</Badge>}

            <AddToCartButton product={product} />

            {product.tags.length > 0 && (
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {product.tags.map((tag) => (
                  <Tag key={tag} color="geekblue">{tag}</Tag>
                ))}
              </div>
            )}
          </div>
        </div>
      </Container>
    </>
  );
}
