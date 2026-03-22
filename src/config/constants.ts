export const CART = {
  FREE_SHIPPING_THRESHOLD: 50,
  SHIPPING_COST: 9.99,
  MAX_QUANTITY_PER_ITEM: 99,
} as const;

export const PAGINATION = {
  DEFAULT_PAGE_SIZE: 20,
  ADMIN_PAGE_SIZE: 50,
} as const;

export const CACHE = {
  PRODUCT_TTL: "days",
  PRODUCT_LIST_TTL: "days",
  ADMIN_STATS_TTL: "minutes",
} as const;
