import { memo } from "react";
import Image from "next/image";
import Link from "next/link";
import { Card, Rate, Tag, Typography } from "antd";
import { formatPrice } from "@/shared/lib/utils";
import { type Product } from "../types";

interface ProductCardProps {
  product: Product;
  priority?: boolean;
}

export const ProductCard = memo(function ProductCard({ product, priority = false }: ProductCardProps) {
  const isOnSale = product.compareAtPrice !== undefined && product.compareAtPrice > product.price;
  const discountPercent = isOnSale
    ? Math.round(((product.compareAtPrice! - product.price) / product.compareAtPrice!) * 100)
    : 0;
  const thumbnail = product.images[0];

  return (
    <Link href={`/products/${product.slug}`} style={{ textDecoration: "none", display: "block" }}>
      <Card
        hoverable
        styles={{ body: { padding: "14px 16px 16px" } }}
        style={{ borderRadius: 12, overflow: "hidden", border: "1px solid #f1f5f9" }}
        cover={
          <div style={{ position: "relative", aspectRatio: "1/1", overflow: "hidden", background: "#f8fafc" }}>
            {thumbnail ? (
              <Image
                src={thumbnail.url}
                alt={thumbnail.alt}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="product-card-img"
                style={{ objectFit: "cover" }}
                priority={priority}
              />
            ) : (
              <div style={{ height: "100%", display: "flex", alignItems: "center", justifyContent: "center", background: "#f1f5f9", color: "#cbd5e1", fontSize: 13 }}>
                Không có ảnh
              </div>
            )}

            {/* Badges */}
            <div style={{ position: "absolute", top: 10, left: 10, display: "flex", flexDirection: "column", gap: 4 }}>
              {isOnSale && (
                <Tag color="red" style={{ margin: 0, fontWeight: 600, fontSize: 11 }}>
                  -{discountPercent}%
                </Tag>
              )}
              {!product.inStock && (
                <Tag style={{ margin: 0, fontSize: 11 }}>Hết hàng</Tag>
              )}
              {product.featured && !isOnSale && (
                <Tag color="blue" style={{ margin: 0, fontSize: 11 }}>Nổi bật</Tag>
              )}
            </div>
          </div>
        }
      >
        {/* Category */}
        <Typography.Text
          type="secondary"
          style={{ fontSize: 11, display: "block", marginBottom: 4, textTransform: "uppercase", letterSpacing: "0.06em", fontWeight: 600 }}
        >
          {product.category.name}
        </Typography.Text>

        {/* Name */}
        <Typography.Text
          strong
          style={{
            fontSize: 14,
            color: "#0f172a",
            marginBottom: 8,
            overflow: "hidden",
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            lineHeight: 1.4,
            minHeight: 40,
          } as React.CSSProperties}
        >
          {product.name}
        </Typography.Text>

        {/* Price row */}
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: product.rating > 0 ? 6 : 0 }}>
          <span style={{ fontSize: 16, fontWeight: 700, color: isOnSale ? "#dc2626" : "#0f172a" }}>
            {formatPrice(product.price)}
          </span>
          {isOnSale && (
            <span style={{ fontSize: 13, color: "#94a3b8", textDecoration: "line-through" }}>
              {formatPrice(product.compareAtPrice!)}
            </span>
          )}
        </div>

        {/* Rating */}
        {product.rating > 0 && (
          <Rate disabled value={product.rating} style={{ fontSize: 11 }} count={5} />
        )}
      </Card>
    </Link>
  );
});
