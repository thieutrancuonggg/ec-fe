import { type ReactNode } from "react";
import { ApolloWrapper } from "@/lib/graphql/ApolloWrapper";

export function Providers({ children }: { children: ReactNode }) {
  return <ApolloWrapper>{children}</ApolloWrapper>;
}
