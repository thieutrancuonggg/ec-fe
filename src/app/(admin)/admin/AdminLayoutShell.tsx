"use client";

import { Layout } from "antd";
import { AdminSidebar } from "@/modules/admin/components/AdminSidebar";
import { AdminHeader } from "@/modules/admin/components/AdminHeader";

export function AdminLayoutShell({ children }: { children: React.ReactNode }) {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <AdminSidebar />
      <Layout>
        <AdminHeader />
        <Layout.Content style={{ padding: 24, overflow: "auto", background: "#f9fafb" }}>
          {children}
        </Layout.Content>
      </Layout>
    </Layout>
  );
}
