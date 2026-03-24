import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { type CartStore } from "../types";

export const useCartStore = create<CartStore>()(
  devtools(
    persist(
      (set, get) => ({
        items: [],
        isOpen: false,

        addItem: (product, quantity = 1, variants) => {
          const { items } = get();
          const existingIndex = items.findIndex(
            (item) => item.product.id === product.id
          );

          if (existingIndex >= 0) {
            const updated = [...items];
            updated[existingIndex] = {
              ...updated[existingIndex],
              quantity: updated[existingIndex].quantity + quantity,
            };
            set({ items: updated }, false, "cart/addItem(existing)");
          } else {
            set(
              { items: [...items, { product, quantity, selectedVariants: variants }] },
              false,
              "cart/addItem(new)"
            );
          }
        },

        removeItem: (productId) => {
          set(
            (state) => ({
              items: state.items.filter((item) => item.product.id !== productId),
            }),
            false,
            "cart/removeItem"
          );
        },

        updateQuantity: (productId, quantity) => {
          if (quantity <= 0) {
            get().removeItem(productId);
            return;
          }
          set(
            (state) => ({
              items: state.items.map((item) =>
                item.product.id === productId ? { ...item, quantity } : item
              ),
            }),
            false,
            "cart/updateQuantity"
          );
        },

        clearCart: () => set({ items: [] }, false, "cart/clear"),
        openCart: () => set({ isOpen: true }, false, "cart/open"),
        closeCart: () => set({ isOpen: false }, false, "cart/close"),
        toggleCart: () =>
          set((state) => ({ isOpen: !state.isOpen }), false, "cart/toggle"),
      }),
      {
        name: "ec-cart",
        partialize: (state) => ({ items: state.items }),
      }
    ),
    { name: "CartStore", enabled: process.env.NODE_ENV === "development" }
  )
);
