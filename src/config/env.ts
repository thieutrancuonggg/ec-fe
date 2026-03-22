if (!process.env.NEXT_PUBLIC_GRAPHQL_URL) {
  console.warn("[env] NEXT_PUBLIC_GRAPHQL_URL is not set — falling back to http://localhost:3000/graphql");
}

export const env = {
  // GraphQL — NEXT_PUBLIC_ for browser (Apollo Client), server uses GRAPHQL_URL (preferred)
  graphqlUrl: process.env.NEXT_PUBLIC_GRAPHQL_URL ?? "http://localhost:3000/graphql",
} as const;
