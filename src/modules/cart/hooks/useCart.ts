"use client";

import { useMemo } from "react";
import { useCartStore } from "../store/cartStore";

export function useCart() {
  const store = useCartStore();

  const totalItems = useMemo(
    () => store.items.reduce((acc, item) => acc + item.quantity, 0),
    [store.items]
  );

  const subtotal = useMemo(
    () =>
      store.items.reduce(
        (acc, item) => acc + item.product.price * item.quantity,
        0
      ),
    [store.items]
  );

  const isEmpty = store.items.length === 0;

  return { ...store, totalItems, subtotal, isEmpty };
}
