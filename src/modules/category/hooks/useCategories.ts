"use client";

import { useQuery } from "@apollo/client/react";
import { GET_CATEGORIES } from "../graphql/queries";
import { type Category } from "../types";

interface CategoriesData {
  categories: {
    items: Category[];
    total: number;
  };
}

export function useCategories() {
  const { data, loading, error } = useQuery<CategoriesData>(GET_CATEGORIES, {
    variables: { filter: { take: 100 } },
  });

  return {
    categories: data?.categories.items ?? [],
    loading,
    error,
  };
}
