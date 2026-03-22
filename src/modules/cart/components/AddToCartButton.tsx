"use client";

import { ShoppingCart } from "lucide-react";
import { Button } from "@/shared/components/ui/Button";
import { useCart } from "../hooks/useCart";
import { type Product } from "@/modules/product/types";

interface AddToCartButtonProps {
  product: Product;
}

export function AddToCartButton({ product }: AddToCartButtonProps) {
  const { addItem } = useCart();

  return (
    <Button
      size="lg"
      className="w-full"
      disabled={!product.inStock}
      onClick={() => addItem(product, 1)}
      aria-label={`Add ${product.name} to cart`}
    >
      <ShoppingCart className="h-5 w-5" />
      {product.inStock ? "Add to Cart" : "Out of Stock"}
    </Button>
  );
}
