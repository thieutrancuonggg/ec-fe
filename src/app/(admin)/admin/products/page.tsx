import type { Metadata } from "next";
import { cacheLife } from "next/cache";
import Link from "next/link";

export const metadata: Metadata = { title: "Products" };

async function getAdminProducts() {
  "use cache";
  cacheLife("minutes");
  return [];
}

export default async function AdminProductsPage() {
  const products = await getAdminProducts();

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <h4 style={{ margin: 0, fontSize: 20, fontWeight: 600, color: "#111827" }}>Products</h4>
        <Link href="/admin/products/new" style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "4px 12px", fontSize: 14, fontWeight: 500, color: "#fff", background: "#2563EB", borderRadius: 6, textDecoration: "none" }}>
          + Add Product
        </Link>
      </div>

      {products.length === 0 && (
        <div style={{ borderRadius: 8, border: "2px dashed #d1d5db", background: "#fff", padding: 48, display: "flex", justifyContent: "center", textAlign: "center" }}>
          <div>
            <strong style={{ display: "block", color: "#111827" }}>No products yet</strong>
            <span style={{ color: "#6b7280" }}>Add your first product to get started.</span>
          </div>
        </div>
      )}
    </div>
  );
}
