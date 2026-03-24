import type { Metadata } from "next";
import { Container } from "@/shared/components/layout/Container";
import { ProductGrid } from "@/modules/product/components/ProductGrid";
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

  const result = await getProducts({
    page: sp.page ? Number(sp.page) : 1,
    limit: PAGINATION.DEFAULT_PAGE_SIZE,
    category: typeof sp.category === "string" ? sp.category : undefined,
    q: typeof sp.q === "string" ? sp.q : undefined,
    sort: typeof sp.sort === "string" ? sp.sort : undefined,
    sale: sp.sale === "true",
  });

  return (
    <Container as="main" className="py-10">
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 32 }}>
        <h3 style={{ margin: 0, fontSize: 24, fontWeight: 600, color: "#111827" }}>
          {sp.q ? `Kết quả cho "${sp.q}"` : "Tất cả sản phẩm"}
        </h3>
        {sp.category && (
          <span style={{ textTransform: "capitalize", color: "#6b7280", fontSize: 14 }}>
            Danh mục: {sp.category}
          </span>
        )}
      </div>
      <ProductGrid products={result.data} />
    </Container>
  );
}
