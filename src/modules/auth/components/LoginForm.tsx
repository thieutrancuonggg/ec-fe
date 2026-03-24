"use client";

import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { MailOutlined, LockOutlined } from "@ant-design/icons";
import { Input } from "@/shared/components/ui/Input";
import { Button } from "@/shared/components/ui/Button";
import { useAuth } from "../hooks/useAuth";

const schema = z.object({
  email: z.string().min(1, "Email is required").email("Invalid email"),
  password: z.string().min(1, "Password is required"),
});

type FormValues = z.infer<typeof schema>;

export function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") ?? "/";
  const { login, loginLoading } = useAuth();

  const {
    control,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  const onSubmit = handleSubmit(async (values) => {
    try {
      await login(values);
      router.push(callbackUrl);
    } catch (err: unknown) {
      setError("root", {
        message: err instanceof Error ? err.message : "Invalid email or password.",
      });
    }
  });

  return (
    <form onSubmit={onSubmit} noValidate className="flex flex-col gap-4">
      {/* Root error */}
      {errors.root && (
        <div
          role="alert"
          className="flex items-center gap-2 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600"
        >
          {errors.root.message}
        </div>
      )}

      <Controller
        name="email"
        control={control}
        render={({ field }) => (
          <Input
            {...field}
            label="Email"
            type="email"
            placeholder="you@example.com"
            autoComplete="email"
            autoFocus
            prefix={<MailOutlined className="text-gray-400" />}
            error={errors.email?.message}
            required
            size="large"
          />
        )}
      />

      <div className="flex flex-col gap-1.5">
        <Controller
          name="password"
          control={control}
          render={({ field }) => (
            <Input.Password
              {...field}
              label="Password"
              placeholder="••••••••"
              autoComplete="current-password"
              prefix={<LockOutlined className="text-gray-400" />}
              error={errors.password?.message}
              required
              size="large"
            />
          )}
        />
        <div className="flex justify-end">
          <Link
            href="/forgot-password"
            className="text-xs text-blue-600 hover:text-blue-700 transition-colors"
          >
            Forgot password?
          </Link>
        </div>
      </div>

      <Button
        variant="primary"
        size="lg"
        htmlType="submit"
        block
        loading={loginLoading}
        className="mt-1"
      >
        Sign in
      </Button>

      <p className="text-center text-sm text-gray-500">
        Don&apos;t have an account?{" "}
        <Link href="/register" className="font-medium text-blue-600 hover:text-blue-700 transition-colors">
          Create one
        </Link>
      </p>
    </form>
  );
}
