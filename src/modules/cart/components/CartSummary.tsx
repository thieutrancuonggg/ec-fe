"use client";

import Link from "next/link";
import { Divider, Typography } from "antd";
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
    <div style={{ borderRadius: 8, border: "1px solid #e5e7eb", background: "#f9fafb", padding: 24 }}>
      <Typography.Title level={5} style={{ margin: "0 0 16px 0" }}>Tóm tắt đơn hàng</Typography.Title>

      <div style={{ display: "flex", flexDirection: "column", gap: 8, fontSize: 14 }}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Typography.Text type="secondary">Tạm tính</Typography.Text>
          <Typography.Text strong>{formatPrice(subtotal)}</Typography.Text>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Typography.Text type="secondary">Vận chuyển</Typography.Text>
          <Typography.Text strong>
            {shippingFree ? (
              <span style={{ color: "#22C55E", fontWeight: 600 }}>Miễn phí</span>
            ) : (
              formatPrice(shipping)
            )}
          </Typography.Text>
        </div>
        {!shippingFree && (
          <Typography.Text type="secondary" style={{ fontSize: 12 }}>
            Mua thêm {formatPrice(CART.FREE_SHIPPING_THRESHOLD - subtotal)} để được miễn phí vận chuyển
          </Typography.Text>
        )}
      </div>

      <Divider style={{ margin: "12px 0" }} />

      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 16 }}>
        <Typography.Text strong style={{ fontSize: 15 }}>Tổng cộng</Typography.Text>
        <Typography.Text strong style={{ fontSize: 15 }}>{formatPrice(total)}</Typography.Text>
      </div>

      <Link href="/checkout">
        <Button variant="cta" size="lg" block style={{ height: 48, fontSize: 16 }}>
          Tiến hành thanh toán
        </Button>
      </Link>
    </div>
  );
}
