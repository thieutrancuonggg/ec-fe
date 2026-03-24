"use client";

import Link from "next/link";
import { Avatar, Dropdown, Space, Typography } from "antd";
import { UserOutlined, LogoutOutlined } from "@ant-design/icons";
import { Button } from "@/shared/components/ui/Button";
import { useAuth } from "@/modules/auth/hooks/useAuth";
import type { MenuProps } from "antd";

export function UserMenu() {
  const { user, isAuthenticated, logout, logoutLoading } = useAuth();

  if (!isAuthenticated) {
    return (
      <Space className="hidden sm:flex">
        <Button variant="ghost" size="sm">
          <Link href="/login" style={{ color: "inherit", textDecoration: "none" }}>Sign in</Link>
        </Button>
        <Button variant="primary" size="sm">
          <Link href="/register" style={{ color: "#fff", textDecoration: "none" }}>Register</Link>
        </Button>
      </Space>
    );
  }

  const initials =
    user?.name
      ?.trim()
      .split(/\s+/)
      .filter(Boolean)
      .slice(0, 2)
      .map((w) => w[0]!.toUpperCase())
      .join("") || "U";

  const items: MenuProps["items"] = [
    {
      key: "profile",
      type: "group",
      label: (
        <div>
          <Typography.Text strong style={{ display: "block" }}>
            {user?.name}
          </Typography.Text>
          <Typography.Text type="secondary" style={{ fontSize: 12 }}>
            {user?.email}
          </Typography.Text>
        </div>
      ),
    },
    { type: "divider" },
    {
      key: "account",
      icon: <UserOutlined />,
      label: <Link href="/account" style={{ textDecoration: "none" }}>My Account</Link>,
    },
    { type: "divider" },
    {
      key: "logout",
      icon: <LogoutOutlined />,
      label: logoutLoading ? "Signing out…" : "Sign out",
      danger: true,
      onClick: logout,
    },
  ];

  return (
    <Dropdown menu={{ items }} trigger={["click"]} placement="bottomRight">
      <Button variant="ghost" style={{ padding: "4px 8px", height: "auto" }}>
        <Space size={6}>
          <Avatar size={28} style={{ backgroundColor: "#2563EB", fontSize: 12, fontWeight: 700 }}>
            {initials}
          </Avatar>
          <span className="hidden sm:inline" style={{ fontSize: 14, fontWeight: 500, color: "#374151", maxWidth: 120, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
            {user?.name}
          </span>
        </Space>
      </Button>
    </Dropdown>
  );
}
