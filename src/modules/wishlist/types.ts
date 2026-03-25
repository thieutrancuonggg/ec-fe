import { type Product } from "@/modules/product/types";

export interface WishlistState {
  items: Product[];
}

export interface WishlistActions {
  addItem: (product: Product) => void;
  removeItem: (productId: string) => void;
  toggleItem: (product: Product) => void;
  hasItem: (productId: string) => boolean;
  clearWishlist: () => void;
}

export type WishlistStore = WishlistState & WishlistActions;
