// Cart → CSR with Zustand
"use client";

import { Typography } from "antd";
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
      <Typography.Title level={3} style={{ margin: "0 0 32px 0" }}>
        Shopping Cart
      </Typography.Title>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <ul style={{ listStyle: "none", margin: 0, padding: 0, borderTop: "1px solid #e5e7eb" }}>
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
