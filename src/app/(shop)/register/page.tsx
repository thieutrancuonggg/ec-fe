import { Suspense } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ShoppingOutlined } from "@ant-design/icons";
import { siteConfig } from "@/config/site";
import { RegisterForm } from "@/modules/auth/components/RegisterForm";

export const metadata: Metadata = {
  title: `Tạo tài khoản – ${siteConfig.name}`,
};

export default function RegisterPage() {
  return (
    <main className="flex min-h-[calc(100vh-4rem)] items-center justify-center bg-gradient-to-br from-slate-50 via-white to-blue-50 px-4 py-12">
      <div className="w-full max-w-sm">
        <div className="rounded-2xl bg-white px-8 py-10 shadow-lg ring-1 ring-gray-900/5">
          {/* Brand */}
          <Link href="/" className="flex items-center gap-2.5 no-underline">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-600">
              <ShoppingOutlined className="text-lg text-white" />
            </span>
            <span className="text-lg font-bold text-blue-600">{siteConfig.name}</span>
          </Link>

          {/* Heading */}
          <div className="mt-7 mb-7">
            <h1 className="text-2xl font-semibold tracking-tight text-gray-900">
              Tạo tài khoản
            </h1>
            <p className="mt-1 text-sm text-gray-500">
              Tham gia {siteConfig.name} và bắt đầu mua sắm
            </p>
          </div>

          <Suspense>
            <RegisterForm />
          </Suspense>
        </div>

        <p className="mt-6 text-center text-sm text-gray-400">
          <Link href="/" className="text-gray-400 hover:text-gray-600 transition-colors">
            ← Quay lại cửa hàng
          </Link>
        </p>
      </div>
    </main>
  );
}
