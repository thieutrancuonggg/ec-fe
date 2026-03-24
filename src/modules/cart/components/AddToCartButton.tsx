"use client";

import { ShoppingCartOutlined } from "@ant-design/icons";
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
      variant={product.inStock ? "cta" : "outline"}
      size="lg"
      block
      disabled={!product.inStock}
      onClick={() => addItem(product, 1)}
      aria-label={`Add ${product.name} to cart`}
      icon={<ShoppingCartOutlined />}
    >
      {product.inStock ? "Add to Cart" : "Out of Stock"}
    </Button>
  );
}
