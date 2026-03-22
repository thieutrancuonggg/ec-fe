import type { Metadata } from "next";
import { cacheLife } from "next/cache";
import { Empty, Typography } from "antd";

export const metadata: Metadata = { title: "Users" };

async function getAdminUsers() {
  "use cache";
  cacheLife("minutes");
  return [];
}

export default async function AdminUsersPage() {
  const users = await getAdminUsers();

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
      <Typography.Title level={4} style={{ margin: 0 }}>Users</Typography.Title>

      {users.length === 0 && (
        <div style={{ borderRadius: 8, border: "2px dashed #d1d5db", background: "#fff", padding: 48, display: "flex", justifyContent: "center" }}>
          <Empty description={
            <span>
              <strong style={{ display: "block", color: "#111827" }}>No users yet</strong>
              <span style={{ color: "#6b7280" }}>Registered users will appear here.</span>
            </span>
          } />
        </div>
      )}
    </div>
  );
}
