"use client";

import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { UserOutlined, MailOutlined, LockOutlined } from "@ant-design/icons";
import { Input } from "@/shared/components/ui/Input";
import { Button } from "@/shared/components/ui/Button";
import { useAuth } from "../hooks/useAuth";

const schema = z
  .object({
    name: z
      .string()
      .min(1, "Name is required")
      .max(100, "Name must be at most 100 characters"),
    email: z.string().min(1, "Email is required").email("Invalid email"),
    password: z
      .string()
      .min(8, "Password must be at least 8 characters")
      .max(128, "Password must be at most 128 characters")
      .regex(/[A-Z]/, "Must contain at least one uppercase letter")
      .regex(/[a-z]/, "Must contain at least one lowercase letter")
      .regex(/[0-9]/, "Must contain at least one number"),
    confirmPassword: z.string().min(1, "Please confirm your password"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

type FormValues = z.infer<typeof schema>;

export function RegisterForm() {
  const router = useRouter();
  const { register: registerUser, registerLoading } = useAuth();

  const {
    control,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  const onSubmit = handleSubmit(async ({ name, email, password }) => {
    try {
      await registerUser({ name, email, password });
      router.push("/");
    } catch (err: unknown) {
      setError("root", {
        message: err instanceof Error ? err.message : "Registration failed. Try again.",
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
        name="name"
        control={control}
        render={({ field }) => (
          <Input
            {...field}
            label="Full name"
            type="text"
            placeholder="Jane Doe"
            autoComplete="name"
            autoFocus
            prefix={<UserOutlined className="text-gray-400" />}
            error={errors.name?.message}
            required
            size="large"
          />
        )}
      />

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
            prefix={<MailOutlined className="text-gray-400" />}
            error={errors.email?.message}
            required
            size="large"
          />
        )}
      />

      <Controller
        name="password"
        control={control}
        render={({ field }) => (
          <Input.Password
            {...field}
            label="Password"
            placeholder="••••••••"
            autoComplete="new-password"
            prefix={<LockOutlined className="text-gray-400" />}
            hint="Min 8 characters, uppercase, lowercase, and number"
            error={errors.password?.message}
            required
            size="large"
          />
        )}
      />

      <Controller
        name="confirmPassword"
        control={control}
        render={({ field }) => (
          <Input.Password
            {...field}
            label="Confirm password"
            placeholder="••••••••"
            autoComplete="new-password"
            prefix={<LockOutlined className="text-gray-400" />}
            error={errors.confirmPassword?.message}
            required
            size="large"
          />
        )}
      />

      <Button
        variant="primary"
        size="lg"
        htmlType="submit"
        block
        loading={registerLoading}
        className="mt-1"
      >
        Create account
      </Button>

      <p className="text-center text-sm text-gray-500">
        Already have an account?{" "}
        <Link href="/login" className="font-medium text-blue-600 hover:text-blue-700 transition-colors">
          Sign in
        </Link>
      </p>
    </form>
  );
}
