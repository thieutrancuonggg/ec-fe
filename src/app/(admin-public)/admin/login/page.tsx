import { Suspense } from "react";
import { siteConfig } from "@/config/site";
import { AdminLoginForm } from "./AdminLoginForm";

export default function AdminLoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50">
      <div className="w-full max-w-sm rounded-xl border border-neutral-200 bg-white p-8 shadow-sm">
        <h1 className="text-xl font-bold text-blue-600">{siteConfig.name} Admin</h1>
        <p className="mt-1 text-sm text-neutral-500">Sign in to continue</p>

        <Suspense>
          <AdminLoginForm />
        </Suspense>
      </div>
    </div>
  );
}
