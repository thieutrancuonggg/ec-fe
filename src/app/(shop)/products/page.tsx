import type { Metadata } from "next";
import { Suspense } from "react";
import { Container } from "@/shared/components/layout/Container";
import { ProductGrid } from "@/modules/product/components/ProductGrid";
import { CategoryFilter } from "@/modules/category/components/CategoryFilter";
import { getProducts } from "@/modules/product/services/productService";
import { type SearchParams } from "@/shared/types/common";
import { PAGINATION } from "@/config/constants";

export const metadata: Metadata = {
  title: "Sản phẩm",
  description: "Khám phá toàn bộ danh mục sản phẩm của chúng tôi.",
};

interface ProductsPageProps {
  searchParams: SearchParams;
}

export default async function ProductsPage({ searchParams }: ProductsPageProps) {
  const sp = await searchParams;
  const category = typeof sp.category === "string" ? sp.category : undefined;
  const q = typeof sp.q === "string" ? sp.q : undefined;

  const result = await getProducts({
    page: sp.page ? Number(sp.page) : 1,
    limit: PAGINATION.DEFAULT_PAGE_SIZE,
    category,
    q,
    sort: typeof sp.sort === "string" ? sp.sort : undefined,
    sale: sp.sale === "true",
  });

  const title = q ? `Kết quả cho "${q}"` : category ? category : "Tất cả sản phẩm";

  return (
    <Container as="main" className="py-10">
      {/* Header */}
      <div style={{ marginBottom: 8 }}>
        <h3 style={{ margin: 0, fontSize: 24, fontWeight: 600, color: "#111827" }}>
          {title}
        </h3>
        <p style={{ margin: "4px 0 0", fontSize: 13, color: "#9ca3af" }}>
          {result.total} sản phẩm
        </p>
      </div>

      {/* Category filter chips */}
      <div style={{ marginTop: 20 }}>
        <Suspense>
          <CategoryFilter />
        </Suspense>
      </div>

      {/* Product grid */}
      <ProductGrid products={result.data} />
    </Container>
  );
}
