/**
 * Apollo Client 4 setup for Client Components (browser + SSR streaming).
 * Uses `@apollo/client-integration-nextjs` for App Router compatibility.
 */
import {
  ApolloClient,
  InMemoryCache,
} from "@apollo/client-integration-nextjs";
import { HttpLink, from, CombinedGraphQLErrors } from "@apollo/client";
import { ErrorLink } from "@apollo/client/link/error";
import { env } from "@/config/env";

function createErrorLink() {
  return new ErrorLink(({ error, operation }) => {
    if (CombinedGraphQLErrors.is(error)) {
      error.errors.forEach(({ message, extensions }) => {
        console.error(
          `[GraphQL] op=${operation.operationName} code=${extensions?.code ?? "UNKNOWN"}: ${message}`
        );
      });
    } else {
      console.error(`[Network] op=${operation.operationName}: ${error.message}`);
    }
  });
}

function createHttpLink() {
  return new HttpLink({
    uri: env.graphqlUrl,
    credentials: "include",
  });
}

function createCache() {
  return new InMemoryCache({
    typePolicies: {
      Product: { keyFields: ["id"] },
      ProductCategory: { keyFields: ["id"] },
      User: { keyFields: ["id"] },
      Order: { keyFields: ["id"] },
      Query: {
        fields: {
          products: {
            keyArgs: ["filter", "sort"],
            merge(existing = { data: [] }, incoming) {
              return {
                ...incoming,
                data: [...(existing.data ?? []), ...(incoming.data ?? [])],
              };
            },
          },
        },
      },
    },
  });
}

export function getApolloClient(): ApolloClient {
  return new ApolloClient({
    link: from([createErrorLink(), createHttpLink()]),
    cache: createCache(),
  });
}
