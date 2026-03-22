"use client";

import { Button } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { useCart } from "../hooks/useCart";
import { type Product } from "@/modules/product/types";

interface AddToCartButtonProps {
  product: Product;
}

export function AddToCartButton({ product }: AddToCartButtonProps) {
  const { addItem } = useCart();

  return (
    <Button
      size="large"
      block
      disabled={!product.inStock}
      onClick={() => addItem(product, 1)}
      aria-label={`Add ${product.name} to cart`}
      icon={<ShoppingCartOutlined />}
      style={product.inStock ? { backgroundColor: "#F97316", borderColor: "#F97316", color: "#fff" } : undefined}
    >
      {product.inStock ? "Add to Cart" : "Out of Stock"}
    </Button>
  );
}
