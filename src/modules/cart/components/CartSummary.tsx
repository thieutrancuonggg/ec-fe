"use client";

import Link from "next/link";
import { Button, Divider, Typography } from "antd";
import { formatPrice } from "@/shared/lib/utils";
import { useCart } from "../hooks/useCart";
import { CART } from "@/config/constants";

export function CartSummary() {
  const { subtotal } = useCart();
  const shippingFree = subtotal >= CART.FREE_SHIPPING_THRESHOLD;
  const shipping = shippingFree ? 0 : CART.SHIPPING_COST;
  const total = subtotal + shipping;

  return (
    <div style={{ borderRadius: 8, border: "1px solid #e5e7eb", background: "#f9fafb", padding: 24 }}>
      <Typography.Title level={5} style={{ margin: "0 0 16px 0" }}>Order Summary</Typography.Title>

      <div style={{ display: "flex", flexDirection: "column", gap: 8, fontSize: 14 }}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Typography.Text type="secondary">Subtotal</Typography.Text>
          <Typography.Text strong>{formatPrice(subtotal)}</Typography.Text>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Typography.Text type="secondary">Shipping</Typography.Text>
          <Typography.Text strong>
            {shippingFree ? (
              <span style={{ color: "#22C55E", fontWeight: 600 }}>Free</span>
            ) : (
              formatPrice(shipping)
            )}
          </Typography.Text>
        </div>
        {!shippingFree && (
          <Typography.Text type="secondary" style={{ fontSize: 12 }}>
            Add {formatPrice(CART.FREE_SHIPPING_THRESHOLD - subtotal)} more for free shipping
          </Typography.Text>
        )}
      </div>

      <Divider style={{ margin: "12px 0" }} />

      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 16 }}>
        <Typography.Text strong style={{ fontSize: 15 }}>Total</Typography.Text>
        <Typography.Text strong style={{ fontSize: 15 }}>{formatPrice(total)}</Typography.Text>
      </div>

      <Link href="/checkout">
        <Button
          block
          size="large"
          style={{ backgroundColor: "#F97316", borderColor: "#F97316", color: "#fff", height: 48, fontSize: 16 }}
        >
          Proceed to Checkout
        </Button>
      </Link>
    </div>
  );
}
