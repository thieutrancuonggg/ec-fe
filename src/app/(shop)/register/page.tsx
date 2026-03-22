import { Suspense } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { RegisterForm } from "@/modules/auth/components/RegisterForm";

export const metadata: Metadata = {
  title: `Create account – ${siteConfig.name}`,
};

export default function RegisterPage() {
  return (
    <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center px-4 py-12">
      <div className="w-full max-w-sm">
        <div className="rounded-xl border border-neutral-200 bg-white p-8 shadow-sm">
          <Link href="/" className="text-xl font-bold text-neutral-900">
            {siteConfig.name}
          </Link>
          <h1 className="mt-4 text-2xl font-semibold text-neutral-900">
            Create an account
          </h1>
          <p className="mt-1 text-sm text-neutral-500">
            Join {siteConfig.name} and start shopping
          </p>

          <Suspense>
            <RegisterForm />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
