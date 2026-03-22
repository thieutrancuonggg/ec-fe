"use client";

import { ApolloNextAppProvider } from "@apollo/client-integration-nextjs";
import { getApolloClient } from "./apollo-client";

export function ApolloWrapper({ children }: { children: React.ReactNode }) {
  return (
    <ApolloNextAppProvider makeClient={getApolloClient}>
      {children}
    </ApolloNextAppProvider>
  );
}
