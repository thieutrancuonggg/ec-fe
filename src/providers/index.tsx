import { type ReactNode } from "react";
import { ApolloWrapper } from "@/lib/graphql/ApolloWrapper";
import { AuthInitializer } from "@/modules/auth/components/AuthInitializer";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ApolloWrapper>
      <AuthInitializer />
      {children}
    </ApolloWrapper>
  );
}
