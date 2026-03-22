"use client";

import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { Form, Input, Button, Alert, Typography } from "antd";
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
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
  });

  const onSubmit = handleSubmit(async (values) => {
    try {
      await login(values);
      router.push(callbackUrl);
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Invalid email or password.";
      setError("root", { message });
    }
  });

  return (
    <form onSubmit={onSubmit} noValidate style={{ marginTop: 24 }}>
      <Form layout="vertical" component="div">
        <Form.Item
          label="Email"
          validateStatus={errors.email ? "error" : ""}
          help={errors.email?.message}
        >
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <Input {...field} type="email" placeholder="you@example.com" autoComplete="email" autoFocus size="large" />
            )}
          />
        </Form.Item>

        <Form.Item
          label="Password"
          validateStatus={errors.password ? "error" : ""}
          help={errors.password?.message}
        >
          <Controller
            name="password"
            control={control}
            render={({ field }) => (
              <Input.Password {...field} placeholder="••••••••" autoComplete="current-password" size="large" />
            )}
          />
        </Form.Item>

        {errors.root && (
          <Alert message={errors.root.message} type="error" showIcon style={{ marginBottom: 16 }} />
        )}

        <Button type="primary" htmlType="submit" block size="large" loading={loginLoading}>
          Sign in
        </Button>

        <Typography.Paragraph style={{ textAlign: "center", marginTop: 12, fontSize: 14, color: "#6b7280" }}>
          Don&apos;t have an account?{" "}
          <Link href="/register" style={{ color: "#2563EB", fontWeight: 500 }}>
            Create one
          </Link>
        </Typography.Paragraph>
      </Form>
    </form>
  );
}
