"use client";

import { type ReactNode } from "react";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { StyleProvider } from "@ant-design/cssinjs";
import { ConfigProvider, App } from "antd";
import { ApolloWrapper } from "@/lib/graphql/ApolloWrapper";
import { AuthInitializer } from "@/modules/auth/components/AuthInitializer";
import { antdTheme } from "@/lib/antd/theme";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <AntdRegistry>
      <StyleProvider layer>
        <ConfigProvider theme={antdTheme}>
          <App>
            <ApolloWrapper>
              <AuthInitializer />
              {children}
            </ApolloWrapper>
          </App>
        </ConfigProvider>
      </StyleProvider>
    </AntdRegistry>
  );
}
