"use client";

import Link from "next/link";
import { Button } from "@/shared/components/ui/Button";
import { formatPrice } from "@/shared/lib/utils";
import { useCart } from "../hooks/useCart";
import { CART } from "@/config/constants";

export function CartSummary() {
  const { subtotal } = useCart();
  const shippingFree = subtotal >= CART.FREE_SHIPPING_THRESHOLD;
  const shipping = shippingFree ? 0 : CART.SHIPPING_COST;
  const total = subtotal + shipping;

  return (
    <div className="rounded-lg border border-neutral-200 bg-neutral-50 p-6 space-y-4">
      <h2 className="text-lg font-semibold text-neutral-900">Order Summary</h2>

      <dl className="space-y-2 text-sm">
        <div className="flex justify-between">
          <dt className="text-neutral-500">Subtotal</dt>
          <dd className="font-medium text-neutral-900">{formatPrice(subtotal)}</dd>
        </div>
        <div className="flex justify-between">
          <dt className="text-neutral-500">Shipping</dt>
          <dd className="font-medium text-neutral-900">
            {shippingFree ? (
              <span className="text-emerald-600 font-semibold">Free</span>
            ) : (
              formatPrice(shipping)
            )}
          </dd>
        </div>
        {!shippingFree && (
          <p className="text-xs text-neutral-500">
            Add {formatPrice(CART.FREE_SHIPPING_THRESHOLD - subtotal)} more for free shipping
          </p>
        )}
        <div className="border-t border-neutral-200 pt-2 flex justify-between font-semibold">
          <dt className="text-neutral-900">Total</dt>
          <dd className="text-neutral-900">{formatPrice(total)}</dd>
        </div>
      </dl>

      <Button asChild variant="cta" className="w-full h-12 text-base">
        <Link href="/checkout">Proceed to Checkout</Link>
      </Button>
    </div>
  );
}
