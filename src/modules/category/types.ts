export interface Category {
  id: number;
  name: string;
  createdAt: string;
  updatedAt: string;
}

export interface PaginatedCategories {
  items: Category[];
  total: number;
  skip: number;
  take: number;
}
