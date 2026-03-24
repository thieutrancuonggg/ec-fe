import type { ThemeConfig } from "antd";

export const antdTheme: ThemeConfig = {
  cssVar: true,
  token: {
    colorPrimary: "#2563EB",
    colorSuccess: "#22C55E",
    colorWarning: "#F59E0B",
    colorError: "#EF4444",
    colorInfo: "#3B82F6",
    colorLink: "#2563EB",
    colorLinkHover: "#1D4ED8",
    colorBorder: "#e5e7eb",
    colorTextPlaceholder: "#9ca3af",
    borderRadius: 8,
    fontFamily:
      "var(--font-geist-sans), -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
  },
  components: {
    Button: {
      primaryColor: "#ffffff",
      colorPrimaryHover: "#1D4ED8",
      fontWeight: 500,
      primaryShadow: "0 1px 3px rgba(37, 99, 235, 0.25)",
      dangerShadow: "0 1px 3px rgba(239, 68, 68, 0.25)",
      defaultShadow: "none",
    },
    Layout: {
      headerBg: "#ffffff",
      footerBg: "#0f172a",
      siderBg: "#0f172a",
    },
    Input: {
      hoverBorderColor: "#93c5fd",
      activeBorderColor: "#2563EB",
      activeShadow: "0 0 0 3px rgba(37, 99, 235, 0.12)",
      errorActiveShadow: "0 0 0 3px rgba(239, 68, 68, 0.12)",
      warningActiveShadow: "0 0 0 3px rgba(245, 158, 11, 0.12)",
      paddingBlock: 9,
      paddingInline: 14,
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
