import { gql } from "@apollo/client";

export const GET_CATEGORIES = gql`
  query GetCategories($filter: CategoriesFilterInput) {
    categories(filter: $filter) {
      items {
        id
        name
      }
      total
    }
  }
`;
