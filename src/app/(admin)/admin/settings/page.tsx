import type { Metadata } from "next";
import { Typography } from "antd";

export const metadata: Metadata = {
  title: "Settings — Admin",
};

export default function AdminSettingsPage() {
  return (
    <div>
      <Typography.Title level={4} style={{ margin: "0 0 16px 0" }}>Settings</Typography.Title>
      <Typography.Text type="secondary">Admin settings coming soon.</Typography.Text>
    </div>
  );
}
