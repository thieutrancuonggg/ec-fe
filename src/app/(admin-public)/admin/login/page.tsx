import { Suspense } from "react";
import { siteConfig } from "@/config/site";
import { AdminLoginForm } from "./AdminLoginForm";

export default function AdminLoginPage() {
  return (
    <div style={{ display: "flex", minHeight: "100vh", alignItems: "center", justifyContent: "center", background: "#f8fafc" }}>
      <div style={{ width: "100%", maxWidth: 384, borderRadius: 12, border: "1px solid #e5e7eb", background: "#fff", padding: 32, boxShadow: "0 1px 3px rgba(0,0,0,0.06)" }}>
        <h4 style={{ margin: 0, fontSize: 20, fontWeight: 600, color: "#2563EB" }}>{siteConfig.name} Admin</h4>
        <span style={{ display: "block", marginTop: 4, color: "#6b7280", fontSize: 14 }}>Sign in to continue</span>

        <Suspense>
          <AdminLoginForm />
        </Suspense>
      </div>
    </div>
  );
}
