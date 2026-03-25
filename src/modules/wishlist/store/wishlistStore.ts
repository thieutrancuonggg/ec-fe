import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { type WishlistStore } from "../types";

export const useWishlistStore = create<WishlistStore>()(
  devtools(
    persist(
      (set, get) => ({
        items: [],

        addItem: (product) => {
          const { items } = get();
          if (items.some((item) => item.id === product.id)) return;
          set({ items: [...items, product] }, false, "wishlist/addItem");
        },

        removeItem: (productId) => {
          set(
            (state) => ({ items: state.items.filter((item) => item.id !== productId) }),
            false,
            "wishlist/removeItem"
          );
        },

        toggleItem: (product) => {
          const { items, addItem, removeItem } = get();
          items.some((item) => item.id === product.id)
            ? removeItem(product.id)
            : addItem(product);
        },

        hasItem: (productId) => get().items.some((item) => item.id === productId),

        clearWishlist: () => set({ items: [] }, false, "wishlist/clear"),
      }),
      {
        name: "ec-wishlist",
        partialize: (state) => ({ items: state.items }),
      }
    ),
    { name: "WishlistStore", enabled: process.env.NODE_ENV === "development" }
  )
);
