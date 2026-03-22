/**
 * Server-side GraphQL client.
 * Used ONLY in Server Components with `use cache` directive.
 * Apollo Client is NOT used here — Next.js handles caching via `use cache` + cacheLife.
 */
import "server-only";

export interface GqlError {
  message: string;
  locations?: { line: number; column: number }[];
  path?: string[];
  extensions?: { code?: string; statusCode?: number };
}

export class GraphQLError extends Error {
  constructor(
    public readonly errors: GqlError[],
    public readonly query: string
  ) {
    super(errors.map((e) => e.message).join("\n"));
    this.name = "GraphQLError";
  }
}

interface GqlResponse<T> {
  data?: T;
  errors?: GqlError[];
}

/**
 * Execute a GraphQL operation on the server.
 * Wrap calls with `'use cache'` + `cacheLife(...)` in your service functions.
 */
export async function gqlFetch<TData, TVariables extends Record<string, unknown> = Record<string, unknown>>(
  query: string,
  variables?: TVariables,
  options?: RequestInit
): Promise<TData> {
  const url = process.env.GRAPHQL_URL ?? process.env.NEXT_PUBLIC_GRAPHQL_URL;

  if (!url) {
    throw new Error("GRAPHQL_URL is not defined. Set it in .env.local");
  }

  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      ...options?.headers,
    },
    body: JSON.stringify({ query, variables }),
    ...options,
  });

  if (!res.ok) {
    throw new Error(`GraphQL request failed: HTTP ${res.status} ${res.statusText}`);
  }

  const json: GqlResponse<TData> = await res.json();

  if (json.errors?.length) {
    throw new GraphQLError(json.errors, query);
  }

  if (json.data === undefined) {
    throw new Error("GraphQL response contained no data");
  }

  return json.data;
}
