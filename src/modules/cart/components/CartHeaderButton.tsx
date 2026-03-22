"use client";

import { ShoppingCart } from "lucide-react";
import { Button } from "@/shared/components/ui/Button";
import { useCart } from "../hooks/useCart";

export function CartHeaderButton() {
  const { totalItems, toggleCart } = useCart();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleCart}
      aria-label={`Cart (${totalItems} items)`}
      className="relative"
    >
      <ShoppingCart className="h-5 w-5" />
      {totalItems > 0 && (
        <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-orange-500 text-xs font-bold text-white">
          {totalItems > 99 ? "99+" : totalItems}
        </span>
      )}
    </Button>
  );
}
