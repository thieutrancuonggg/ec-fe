import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { Button } from "@/shared/components/ui/Button";

export function CartEmpty() {
  return (
    <div className="flex flex-col items-center justify-center py-24 text-center">
      <ShoppingCart className="h-16 w-16 text-neutral-300" />
      <h2 className="mt-4 text-xl font-semibold text-neutral-900">Your cart is empty</h2>
      <p className="mt-2 text-sm text-neutral-500">
        Looks like you haven&apos;t added anything to your cart yet.
      </p>
      <Button asChild className="mt-6">
        <Link href="/products">Start Shopping</Link>
      </Button>
    </div>
  );
}
