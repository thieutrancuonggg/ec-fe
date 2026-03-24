/**
 * Apollo Client 4 setup for Client Components (browser + SSR streaming).
 * Uses `@apollo/client-integration-nextjs` for App Router compatibility.
 */
import {
  ApolloClient,
  InMemoryCache,
} from "@apollo/client-integration-nextjs";
import { ApolloLink, HttpLink, from, CombinedGraphQLErrors, type Reference } from "@apollo/client";
import { ErrorLink } from "@apollo/client/link/error";
import { env } from "@/config/env";
import { useAuthStore } from "@/modules/auth/store/authStore";

function createAuthLink() {
  return new ApolloLink((operation, forward) => {
    const { accessToken } = useAuthStore.getState();
    if (accessToken) {
      operation.setContext(({ headers = {} }: { headers: Record<string, string> }) => ({
        headers: { ...headers, Authorization: `Bearer ${accessToken}` },
      }));
    }
    return forward(operation);
  });
}

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
              const seen = new Set(
                (existing.data ?? []).map((ref: Reference) => ref.__ref)
              );
              const dedupedIncoming = (incoming.data ?? []).filter(
                (ref: Reference) => !seen.has(ref.__ref)
              );
              return {
                ...incoming,
                data: [...(existing.data ?? []), ...dedupedIncoming],
              };
            },
          },
        },
      },
    },
  });
}

export function createApolloClient(): ApolloClient {
  return new ApolloClient({
    link: from([createAuthLink(), createErrorLink(), createHttpLink()]),
    cache: createCache(),
  });
}
