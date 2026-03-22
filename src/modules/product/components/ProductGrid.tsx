import { Empty } from "antd";
import { type Product } from "../types";
import { ProductCard } from "./ProductCard";
import { ProductCardSkeleton } from "./ProductCardSkeleton";

interface ProductGridProps {
  products: Product[];
  loading?: boolean;
  skeletonCount?: number;
}

export function ProductGrid({ products, loading = false, skeletonCount = 8 }: ProductGridProps) {
  const gridClassName = "grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4";

  if (loading) {
    return (
      <div className={gridClassName}>
        {Array.from({ length: skeletonCount }).map((_, i) => (
          <ProductCardSkeleton key={i} />
        ))}
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", padding: "96px 0" }}>
        <Empty
          description={
            <span>
              <strong style={{ display: "block", fontSize: 16, color: "#111827" }}>No products found</strong>
              <span style={{ color: "#6b7280", fontSize: 14 }}>Try adjusting your search or filter to find what you&apos;re looking for.</span>
            </span>
          }
        />
      </div>
    );
  }

  return (
    <div className={gridClassName}>
      {products.map((product, idx) => (
        <ProductCard key={product.id} product={product} priority={idx < 4} />
      ))}
    </div>
  );
}
