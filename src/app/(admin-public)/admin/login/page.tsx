import { Suspense } from "react";
import { Typography } from "antd";
import { siteConfig } from "@/config/site";
import { AdminLoginForm } from "./AdminLoginForm";

export default function AdminLoginPage() {
  return (
    <div style={{ display: "flex", minHeight: "100vh", alignItems: "center", justifyContent: "center", background: "#f8fafc" }}>
      <div style={{ width: "100%", maxWidth: 384, borderRadius: 12, border: "1px solid #e5e7eb", background: "#fff", padding: 32, boxShadow: "0 1px 3px rgba(0,0,0,0.06)" }}>
        <Typography.Title level={4} style={{ margin: 0, color: "#2563EB" }}>{siteConfig.name} Admin</Typography.Title>
        <Typography.Text type="secondary" style={{ display: "block", marginTop: 4 }}>Sign in to continue</Typography.Text>

        <Suspense>
          <AdminLoginForm />
        </Suspense>
      </div>
    </div>
  );
}
