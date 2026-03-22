import type { Metadata } from "next";
import { cacheLife } from "next/cache";
import { ShoppingBag } from "lucide-react";

export const metadata: Metadata = { title: "Orders" };

async function getAdminOrders() {
  "use cache";
  cacheLife("minutes");
  return [];
}

export default async function AdminOrdersPage() {
  const orders = await getAdminOrders();

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-neutral-900">Orders</h1>

      {orders.length === 0 && (
        <div className="rounded-lg border border-dashed border-neutral-300 bg-white p-12 text-center">
          <ShoppingBag className="mx-auto h-10 w-10 text-neutral-300" />
          <p className="mt-3 text-sm font-medium text-neutral-900">No orders yet</p>
          <p className="mt-1 text-sm text-neutral-500">Orders will appear here once customers start purchasing.</p>
        </div>
      )}
    </div>
  );
}
