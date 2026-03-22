// Cart → CSR with Zustand
"use client";

import { Container } from "@/shared/components/layout/Container";
import { CartItem } from "@/modules/cart/components/CartItem";
import { CartSummary } from "@/modules/cart/components/CartSummary";
import { CartEmpty } from "@/modules/cart/components/CartEmpty";
import { useCart } from "@/modules/cart/hooks/useCart";

export default function CartPage() {
  const { items, isEmpty } = useCart();

  if (isEmpty) return <CartEmpty />;

  return (
    <Container as="main" className="py-10">
      <h1 className="text-2xl font-bold tracking-tight text-neutral-900 mb-8">
        Shopping Cart
      </h1>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <ul className="divide-y divide-neutral-200">
            {items.map((item) => (
              <CartItem key={item.product.id} item={item} />
            ))}
          </ul>
        </div>

        <div className="lg:col-span-1">
          <CartSummary />
        </div>
      </div>
    </Container>
  );
}
