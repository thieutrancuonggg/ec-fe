import Image from "next/image";
import Link from "next/link";
import { Card, Rate, Tag, Typography } from "antd";
import { formatPrice } from "@/shared/lib/utils";
import { type Product } from "../types";

interface ProductCardProps {
  product: Product;
  priority?: boolean;
}

export function ProductCard({ product, priority = false }: ProductCardProps) {
  const isOnSale = product.compareAtPrice !== undefined && product.compareAtPrice > product.price;
  const discountPercent = isOnSale
    ? Math.round(((product.compareAtPrice! - product.price) / product.compareAtPrice!) * 100)
    : 0;
  const thumbnail = product.images[0];

  return (
    <Link href={`/products/${product.slug}`} style={{ textDecoration: "none", display: "block" }}>
      <Card
        hoverable
        styles={{ body: { padding: 16 } }}
        cover={
          <div style={{ position: "relative", aspectRatio: "1/1", overflow: "hidden", background: "#f9fafb" }}>
            {thumbnail ? (
              <Image
                src={thumbnail.url}
                alt={thumbnail.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                style={{ objectFit: "cover", transition: "transform 0.3s" }}
                priority={priority}
              />
            ) : (
              <div style={{ height: "100%", display: "flex", alignItems: "center", justifyContent: "center", background: "#f3f4f6", color: "#d1d5db", fontSize: 14 }}>
                No image
              </div>
            )}
            <div style={{ position: "absolute", top: 8, left: 8, display: "flex", flexDirection: "column", gap: 4 }}>
              {isOnSale && <Tag color="red" style={{ margin: 0 }}>-{discountPercent}%</Tag>}
              {!product.inStock && <Tag color="default" style={{ margin: 0 }}>Out of stock</Tag>}
              {product.featured && <Tag color="blue" style={{ margin: 0 }}>Featured</Tag>}
            </div>
          </div>
        }
      >
        <Typography.Text strong style={{ display: "block", fontSize: 14, marginBottom: 4, color: "#111827" }}>
          {product.name}
        </Typography.Text>
        <Typography.Text type="secondary" style={{ fontSize: 12, display: "block", marginBottom: 8 }}>
          {product.category.name}
        </Typography.Text>
        <div style={{ display: "flex", alignItems: "baseline", gap: 8, marginBottom: 4 }}>
          <Typography.Text strong style={{ fontSize: 16, color: "#111827" }}>
            {formatPrice(product.price)}
          </Typography.Text>
          {isOnSale && (
            <Typography.Text delete type="secondary" style={{ fontSize: 13 }}>
              {formatPrice(product.compareAtPrice!)}
            </Typography.Text>
          )}
        </div>
        {product.rating > 0 && (
          <Rate disabled defaultValue={product.rating} style={{ fontSize: 12 }} count={5} />
        )}
      </Card>
    </Link>
  );
}
