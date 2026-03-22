import type { Metadata } from "next";
import { cacheLife } from "next/cache";
import { AdminStatCard } from "@/modules/admin/components/AdminStatCard";
import { ShoppingBag, Users, Package, TrendingUp } from "lucide-react";

export const metadata: Metadata = { title: "Dashboard" };

async function getStats() {
  "use cache";
  cacheLife("minutes");
  // Data fetching will be implemented here
  return { revenue: 0, orders: 0, products: 0, users: 0 };
}

export default async function AdminDashboardPage() {
  const stats = await getStats();

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
      <h4 style={{ margin: 0, fontSize: 20, fontWeight: 600, color: "#111827" }}>Dashboard</h4>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <AdminStatCard
          title="Total Revenue"
          value={`$${stats.revenue.toLocaleString()}`}
          icon={TrendingUp}
          trend="+12% from last month"
        />
        <AdminStatCard
          title="Total Orders"
          value={stats.orders}
          icon={ShoppingBag}
          trend="+8% from last month"
        />
        <AdminStatCard
          title="Products"
          value={stats.products}
          icon={Package}
          trend="3 added this week"
        />
        <AdminStatCard
          title="Customers"
          value={stats.users}
          icon={Users}
          trend="+24 new this week"
        />
      </div>
    </div>
  );
}
