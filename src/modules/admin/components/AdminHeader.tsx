"use client";

import { Layout, Avatar, Space, Typography } from "antd";
import { BellOutlined, SearchOutlined } from "@ant-design/icons";
import { Button } from "@/shared/components/ui/Button";
import { useUserStore } from "@/modules/user/store/userStore";

interface AdminHeaderProps {
  title?: string;
}

export function AdminHeader({ title }: AdminHeaderProps) {
  const { user } = useUserStore();

  return (
    <Layout.Header
      style={{
        height: 64,
        background: "#fff",
        borderBottom: "1px solid #e5e7eb",
        padding: "0 24px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      {title ? (
        <Typography.Title level={5} style={{ margin: 0 }}>{title}</Typography.Title>
      ) : (
        <div />
      )}

      <Space size={8}>
        <Button variant="ghost" icon={<SearchOutlined />} aria-label="Search" />
        <Button variant="ghost" icon={<BellOutlined />} aria-label="Notifications" />

        <div style={{ display: "flex", alignItems: "center", gap: 8, borderLeft: "1px solid #e5e7eb", paddingLeft: 12 }}>
          <Avatar size={32} style={{ backgroundColor: "#2563EB", fontSize: 12, fontWeight: 700 }}>
            {user?.firstName?.charAt(0).toUpperCase() ?? "A"}
          </Avatar>
          {user && (
            <Typography.Text strong className="hidden sm:block" style={{ fontSize: 14, color: "#374151" }}>
              {user.firstName} {user.lastName}
            </Typography.Text>
          )}
        </div>
      </Space>
    </Layout.Header>
  );
}
