"use client";

import { Container } from "@/shared/components/layout/Container";
import { ProductCardSkeleton } from "@/modules/product/components/ProductCardSkeleton";
import { Skeleton } from "antd";

export default function ProductsLoading() {
  return (
    <Container className="py-10">
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 32 }}>
        <Skeleton.Input active style={{ width: 160, height: 32 }} />
        <Skeleton.Input active style={{ width: 96, height: 20 }} />
      </div>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {Array.from({ length: 12 }).map((_, i) => (
          <ProductCardSkeleton key={i} />
        ))}
      </div>
    </Container>
  );
}
