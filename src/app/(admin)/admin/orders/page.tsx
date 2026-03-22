import type { Metadata } from "next";
import { cacheLife } from "next/cache";

export const metadata: Metadata = { title: "Orders" };

async function getAdminOrders() {
  "use cache";
  cacheLife("minutes");
  return [];
}

export default async function AdminOrdersPage() {
  const orders = await getAdminOrders();

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
      <h4 style={{ margin: 0, fontSize: 20, fontWeight: 600, color: "#111827" }}>Orders</h4>

      {orders.length === 0 && (
        <div style={{ borderRadius: 8, border: "2px dashed #d1d5db", background: "#fff", padding: 48, display: "flex", justifyContent: "center", textAlign: "center" }}>
          <div>
            <strong style={{ display: "block", color: "#111827" }}>No orders yet</strong>
            <span style={{ color: "#6b7280" }}>Orders will appear here once customers start purchasing.</span>
          </div>
        </div>
      )}
    </div>
  );
}
