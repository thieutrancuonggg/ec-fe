import type { Metadata } from "next";
import { Container } from "@/shared/components/layout/Container";
import { ProductGrid } from "@/modules/product/components/ProductGrid";
import { getProducts } from "@/modules/product/services/productService";
import { type SearchParams } from "@/shared/types/common";
import { PAGINATION } from "@/config/constants";

export const metadata: Metadata = {
  title: "Products",
  description: "Browse our full product catalog.",
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
          {sp.q ? `Results for "${sp.q}"` : "All Products"}
        </h3>
        {sp.category && (
          <span style={{ textTransform: "capitalize", color: "#6b7280", fontSize: 14 }}>
            Category: {sp.category}
          </span>
        )}
      </div>
      <ProductGrid products={result.data} />
    </Container>
  );
}
