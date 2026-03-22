import type { Metadata } from "next";
import { cacheLife } from "next/cache";
import Link from "next/link";
import { Button, Empty, Typography } from "antd";
import { PlusOutlined } from "@ant-design/icons";

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
        <Typography.Title level={4} style={{ margin: 0 }}>Products</Typography.Title>
        <Link href="/admin/products/new">
          <Button type="primary" size="small" icon={<PlusOutlined />}>
            Add Product
          </Button>
        </Link>
      </div>

      {products.length === 0 && (
        <div style={{ borderRadius: 8, border: "2px dashed #d1d5db", background: "#fff", padding: 48, display: "flex", justifyContent: "center" }}>
          <Empty description={
            <span>
              <strong style={{ display: "block", color: "#111827" }}>No products yet</strong>
              <span style={{ color: "#6b7280" }}>Add your first product to get started.</span>
            </span>
          } />
        </div>
      )}
    </div>
  );
}
