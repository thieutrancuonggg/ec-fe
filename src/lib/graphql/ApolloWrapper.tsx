"use client";

import { ApolloNextAppProvider } from "@apollo/client-integration-nextjs";
import { createApolloClient } from "./apollo-client";

export function ApolloWrapper({ children }: { children: React.ReactNode }) {
  return (
    <ApolloNextAppProvider makeClient={createApolloClient}>
      {children}
    </ApolloNextAppProvider>
  );
}
