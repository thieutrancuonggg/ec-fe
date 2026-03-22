import type { Metadata } from "next";
import { Layout } from "antd";
import { AdminSidebar } from "@/modules/admin/components/AdminSidebar";
import { AdminHeader } from "@/modules/admin/components/AdminHeader";

export const metadata: Metadata = {
  title: {
    default: "Admin",
    template: "%s | Admin",
  },
  robots: { index: false, follow: false },
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
