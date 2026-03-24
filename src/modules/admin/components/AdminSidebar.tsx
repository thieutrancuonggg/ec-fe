"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Layout, Menu } from "antd";
import {
  DashboardOutlined,
  ShoppingOutlined,
  ShoppingCartOutlined,
  TeamOutlined,
  SettingOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from "@ant-design/icons";
import { Button } from "@/shared/components/ui/Button";
import { siteConfig } from "@/config/site";
import { useAdminStore } from "../store/adminStore";

const navItems = [
  { href: "/admin/dashboard", label: "Tổng quan", icon: <DashboardOutlined /> },
  { href: "/admin/products", label: "Sản phẩm", icon: <ShoppingOutlined /> },
  { href: "/admin/orders", label: "Đơn hàng", icon: <ShoppingCartOutlined /> },
  { href: "/admin/users", label: "Người dùng", icon: <TeamOutlined /> },
  { href: "/admin/settings", label: "Cài đặt", icon: <SettingOutlined /> },
];

export function AdminSidebar() {
  const pathname = usePathname();
  const { sidebarCollapsed, toggleSidebar } = useAdminStore();

  const selectedKey = navItems.find((item) => pathname.startsWith(item.href))?.href ?? "";

  const menuItems = navItems.map(({ href, label, icon }) => ({
    key: href,
    icon,
    label: <Link href={href}>{label}</Link>,
  }));

  return (
    <Layout.Sider
      collapsed={sidebarCollapsed}
      theme="dark"
      style={{ position: "relative", background: "#0f172a" }}
      width={240}
      collapsedWidth={64}
    >
      {/* Logo */}
      <div style={{ height: 64, display: "flex", alignItems: "center", borderBottom: "1px solid #1e293b", padding: sidebarCollapsed ? "0 16px" : "0 20px", overflow: "hidden" }}>
        <Link href="/admin/dashboard" style={{ color: "#fff", textDecoration: "none", fontWeight: 700, fontSize: 15, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
          {sidebarCollapsed ? siteConfig.name.charAt(0) : (
            <>
              {siteConfig.name}{" "}
              <span style={{ color: "#94a3b8", fontSize: 12, fontWeight: 400 }}>Admin</span>
            </>
          )}
        </Link>
      </div>

      {/* Nav */}
      <Menu
        theme="dark"
        mode="inline"
        selectedKeys={[selectedKey]}
        items={menuItems}
        style={{ background: "#0f172a", borderRight: "none", flex: 1 }}
      />

      {/* Collapse toggle */}
      <Button
        variant="ghost"
        icon={sidebarCollapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        onClick={toggleSidebar}
        aria-label={sidebarCollapsed ? "Expand sidebar" : "Collapse sidebar"}
        style={{
          position: "absolute",
          right: -16,
          top: 80,
          width: 32,
          height: 32,
          borderRadius: "50%",
          border: "1px solid #e5e7eb",
          background: "#fff",
          color: "#6b7280",
          boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: 0,
          zIndex: 10,
        }}
      />
    </Layout.Sider>
  );
}
