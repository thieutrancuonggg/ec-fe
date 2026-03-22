import { Suspense } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Typography } from "antd";
import { siteConfig } from "@/config/site";
import { LoginForm } from "@/modules/auth/components/LoginForm";

export const metadata: Metadata = {
  title: `Sign in – ${siteConfig.name}`,
};

export default function LoginPage() {
  return (
    <div style={{ display: "flex", minHeight: "calc(100vh - 4rem)", alignItems: "center", justifyContent: "center", padding: "48px 16px" }}>
      <div style={{ width: "100%", maxWidth: 384 }}>
        <div style={{ borderRadius: 12, border: "1px solid #e5e7eb", background: "#fff", padding: 32, boxShadow: "0 1px 3px rgba(0,0,0,0.06)" }}>
          <Link href="/" style={{ fontSize: 20, fontWeight: 700, color: "#2563EB", textDecoration: "none" }}>
            {siteConfig.name}
          </Link>
          <Typography.Title level={3} style={{ marginTop: 16, marginBottom: 4 }}>
            Welcome back
          </Typography.Title>
          <Typography.Text type="secondary">
            Sign in to your account to continue
          </Typography.Text>

          <Suspense>
            <LoginForm />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
