export interface ProductImage {
  url: string;
  alt: string;
  width: number;
  height: number;
}

export interface ProductVariant {
  id: string;
  name: string;
  value: string;
  available: boolean;
  priceModifier?: number;
}

export interface ProductCategory {
  id: string;
  name: string;
  slug: string;
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  price: number;
  compareAtPrice?: number;
  images: ProductImage[];
  category: ProductCategory;
  variants?: ProductVariant[];
  tags: string[];
  rating: number;
  reviewCount: number;
  inStock: boolean;
  featured?: boolean;
  createdAt: string;
}

export interface ProductListParams {
  page?: number;
  limit?: number;
  category?: string;
  q?: string;
  sort?: string;
  minPrice?: number;
  maxPrice?: number;
  sale?: boolean;
}
