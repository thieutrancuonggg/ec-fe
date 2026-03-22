import "server-only";
import { cacheLife, cacheTag } from "next/cache";
import { gqlFetch } from "@/lib/graphql/server-client";
import { CACHE, PAGINATION } from "@/config/constants";
import { type Product, type ProductListParams } from "../types";

// ─── Queries (inline until codegen generates them) ──────────────────────────

const PRODUCT_CARD_FRAGMENT = /* GraphQL */ `
  fragment ProductCardFields on Product {
    id name slug price compareAtPrice inStock featured rating reviewCount
    images { url alt width height }
    category { id name slug }
  }
`;

const PRODUCT_DETAIL_FRAGMENT = /* GraphQL */ `
  ${PRODUCT_CARD_FRAGMENT}
  fragment ProductDetailFields on Product {
    ...ProductCardFields
    description tags createdAt
    variants { id name value available priceModifier }
  }
`;

const GET_PRODUCTS = /* GraphQL */ `
  ${PRODUCT_CARD_FRAGMENT}
  query GetProducts($filter: ProductFilterInput, $sort: ProductSortInput, $page: Int, $limit: Int) {
    products(filter: $filter, sort: $sort, page: $page, limit: $limit) {
      data { ...ProductCardFields }
      total page limit totalPages
    }
  }
`;

const GET_FEATURED_PRODUCTS = /* GraphQL */ `
  ${PRODUCT_CARD_FRAGMENT}
  query GetFeaturedProducts($limit: Int) {
    products(filter: { featured: true }, limit: $limit) {
      data { ...ProductCardFields }
    }
  }
`;

const GET_PRODUCT_BY_SLUG = /* GraphQL */ `
  ${PRODUCT_DETAIL_FRAGMENT}
  query GetProductBySlug($slug: String!) {
    product(slug: $slug) { ...ProductDetailFields }
  }
`;

// ─── Response types (will be replaced by codegen output) ────────────────────

interface ProductsResponse {
  products: {
    data: Product[];
    total: number;
    page: number;
    limit: number;
    totalPages: number;
  };
}

interface ProductResponse {
  product: Product | null;
}

// ─── Service functions ───────────────────────────────────────────────────────

export async function getProducts(params: ProductListParams) {
  "use cache";
  cacheLife(CACHE.PRODUCT_LIST_TTL);
  cacheTag("products");

  try {
    const data = await gqlFetch<ProductsResponse>(GET_PRODUCTS, {
      filter: {
        categorySlug: params.category,
        search: params.q,
        sale: params.sale,
        minPrice: params.minPrice,
        maxPrice: params.maxPrice,
      },
      sort: params.sort ? parseSortParam(params.sort) : undefined,
      page: params.page ?? 1,
      limit: params.limit ?? PAGINATION.DEFAULT_PAGE_SIZE,
    });
    return data.products;
  } catch {
    return { data: [], total: 0, page: 1, limit: PAGINATION.DEFAULT_PAGE_SIZE, totalPages: 0 };
  }
}

export async function getFeaturedProducts(limit = 8) {
  "use cache";
  cacheLife(CACHE.PRODUCT_LIST_TTL);
  cacheTag("products", "featured");

  try {
    const data = await gqlFetch<{ products: { data: Product[] } }>(
      GET_FEATURED_PRODUCTS,
      { limit }
    );
    return data.products.data;
  } catch {
    return [];
  }
}

export async function getProductBySlug(slug: string) {
  "use cache";
  cacheLife(CACHE.PRODUCT_TTL);
  cacheTag("products", `product:${slug}`);

  try {
    const data = await gqlFetch<ProductResponse>(GET_PRODUCT_BY_SLUG, { slug });
    return data.product;
  } catch {
    return null;
  }
}

// ─── Helpers ─────────────────────────────────────────────────────────────────

function parseSortParam(sort: string) {
  const [field, order] = sort.split(":");
  return { field, order: (order ?? "asc").toUpperCase() };
}
