import type { Metadata } from "next";
import { cacheLife } from "next/cache";
import Link from "next/link";
import { Button } from "@/shared/components/ui/Button";
import { Package, Plus } from "lucide-react";

export const metadata: Metadata = { title: "Products" };

async function getAdminProducts() {
  "use cache";
  cacheLife("minutes");
  return [];
}

export default async function AdminProductsPage() {
  const products = await getAdminProducts();

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-neutral-900">Products</h1>
        <Button asChild size="sm">
          <Link href="/admin/products/new">
            <Plus className="h-4 w-4" />
            Add Product
          </Link>
        </Button>
      </div>

      {products.length === 0 && (
        <div className="rounded-lg border border-dashed border-neutral-300 bg-white p-12 text-center">
          <Package className="mx-auto h-10 w-10 text-neutral-300" />
          <p className="mt-3 text-sm font-medium text-neutral-900">No products yet</p>
          <p className="mt-1 text-sm text-neutral-500">Add your first product to get started.</p>
        </div>
      )}
    </div>
  );
}
