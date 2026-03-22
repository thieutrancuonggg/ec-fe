import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Settings — Admin",
};

export default function AdminSettingsPage() {
  return (
    <div>
      <h4 style={{ margin: "0 0 16px 0", fontSize: 20, fontWeight: 600, color: "#111827" }}>Settings</h4>
      <span style={{ color: "#6b7280", fontSize: 14 }}>Admin settings coming soon.</span>
    </div>
  );
}
