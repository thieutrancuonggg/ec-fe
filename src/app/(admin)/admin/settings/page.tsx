import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Settings — Admin",
};

export default function AdminSettingsPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold tracking-tight text-neutral-900">Settings</h1>
      <p className="mt-4 text-neutral-500">Admin settings coming soon.</p>
    </div>
  );
}
