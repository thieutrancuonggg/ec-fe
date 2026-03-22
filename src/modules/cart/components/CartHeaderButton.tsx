"use client";

import { Badge, Button } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { useCart } from "../hooks/useCart";

export function CartHeaderButton() {
  const { totalItems, toggleCart } = useCart();

  return (
    <Badge count={totalItems} size="small" color="#F97316" overflowCount={99}>
      <Button
        type="text"
        icon={<ShoppingCartOutlined style={{ fontSize: 20 }} />}
        onClick={toggleCart}
        aria-label={`Cart (${totalItems} items)`}
      />
    </Badge>
  );
}
