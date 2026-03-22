"use client";

import { type ReactNode } from "react";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { ConfigProvider, App } from "antd";
import { ApolloWrapper } from "@/lib/graphql/ApolloWrapper";
import { AuthInitializer } from "@/modules/auth/components/AuthInitializer";

const theme = {
  token: {
    colorPrimary: "#2563EB",
    colorSuccess: "#22C55E",
    colorWarning: "#F59E0B",
    colorError: "#EF4444",
    colorInfo: "#3B82F6",
    colorLink: "#2563EB",
    colorLinkHover: "#1D4ED8",
    borderRadius: 8,
    fontFamily: "var(--font-geist-sans), -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
  },
  components: {
    Button: {
      primaryColor: "#ffffff",
      colorPrimaryHover: "#1D4ED8",
    },
    Layout: {
      headerBg: "#ffffff",
      footerBg: "#0f172a",
      siderBg: "#0f172a",
    },
    Menu: {
      darkItemBg: "#0f172a",
      darkSubMenuItemBg: "#1e293b",
      darkItemSelectedBg: "rgba(59,130,246,0.25)",
      darkItemColor: "#94a3b8",
      darkItemHoverColor: "#ffffff",
      darkItemSelectedColor: "#ffffff",
    },
  },
};

export function Providers({ children }: { children: ReactNode }) {
  return (
    <AntdRegistry>
      <ConfigProvider theme={theme}>
        <App>
          <ApolloWrapper>
            <AuthInitializer />
            {children}
          </ApolloWrapper>
        </App>
      </ConfigProvider>
    </AntdRegistry>
  );
}
