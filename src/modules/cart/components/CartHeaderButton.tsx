"use client";

import { Badge } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { Button } from "@/shared/components/ui/Button";
import { useCart } from "../hooks/useCart";

export function CartHeaderButton() {
  const { totalItems, toggleCart } = useCart();

  return (
    <Badge count={totalItems} size="small" color="#F97316" overflowCount={99}>
      <Button
        variant="ghost"
        icon={<ShoppingCartOutlined style={{ fontSize: 20 }} />}
        onClick={toggleCart}
        aria-label={`Cart (${totalItems} items)`}
      />
    </Badge>
  );
}
