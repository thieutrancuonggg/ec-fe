"use client";

import Image from "next/image";
import { MinusOutlined, PlusOutlined, DeleteOutlined } from "@ant-design/icons";
import { Button } from "@/shared/components/ui/Button";
import { formatPrice } from "@/shared/lib/utils";
import { useCart } from "../hooks/useCart";
import { type CartItem as CartItemType } from "../types";

interface CartItemProps {
  item: CartItemType;
}

export function CartItem({ item }: CartItemProps) {
  const { updateQuantity, removeItem } = useCart();
  const thumbnail = item.product.images[0];

  return (
    <li style={{ display: "flex", gap: 16, padding: "16px 0" }}>
      <div style={{ position: "relative", height: 80, width: 80, flexShrink: 0, overflow: "hidden", borderRadius: 8, border: "1px solid #e5e7eb" }}>
        {thumbnail ? (
          <Image
            src={thumbnail.url}
            alt={thumbnail.alt}
            fill
            sizes="80px"
            style={{ objectFit: "cover" }}
          />
        ) : (
          <div style={{ height: "100%", width: "100%", background: "#f3f4f6" }} />
        )}
      </div>

      <div style={{ display: "flex", flex: 1, flexDirection: "column", gap: 4 }}>
        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 8 }}>
          <p style={{ fontSize: 14, fontWeight: 500, color: "#111827", margin: 0, overflow: "hidden", display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical" }}>
            {item.product.name}
          </p>
          <Button
            variant="ghost"
            size="sm"
            icon={<DeleteOutlined />}
            onClick={() => removeItem(item.product.id)}
            aria-label={`Remove ${item.product.name}`}
            style={{ color: "#9ca3af", flexShrink: 0 }}
          />
        </div>

        <p style={{ fontSize: 14, fontWeight: 600, color: "#111827", margin: 0 }}>
          {formatPrice(item.product.price)}
        </p>

        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <Button
            variant="outline"
            size="sm"
            icon={<MinusOutlined />}
            onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
            aria-label="Decrease quantity"
            style={{ width: 28, height: 28, padding: 0, display: "flex", alignItems: "center", justifyContent: "center" }}
          />
          <span style={{ width: 32, textAlign: "center", fontSize: 14, fontWeight: 500 }}>{item.quantity}</span>
          <Button
            variant="outline"
            size="sm"
            icon={<PlusOutlined />}
            onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
            aria-label="Increase quantity"
            style={{ width: 28, height: 28, padding: 0, display: "flex", alignItems: "center", justifyContent: "center" }}
          />
        </div>
      </div>
    </li>
  );
}
