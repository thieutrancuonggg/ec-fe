"use client";

import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Form, Input, Button, Alert, Typography } from "antd";
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
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
  });

  const onSubmit = handleSubmit(async ({ name, email, password }) => {
    try {
      await registerUser({ name, email, password });
      router.push("/");
    } catch (err: unknown) {
      const message =
        err instanceof Error ? err.message : "Registration failed. Try again.";
      setError("root", { message });
    }
  });

  return (
    <form onSubmit={onSubmit} noValidate style={{ marginTop: 24 }}>
      <Form layout="vertical" component="div">
        <Form.Item
          label="Full name"
          validateStatus={errors.name ? "error" : ""}
          help={errors.name?.message}
        >
          <Controller
            name="name"
            control={control}
            render={({ field }) => (
              <Input {...field} type="text" placeholder="Jane Doe" autoComplete="name" autoFocus size="large" />
            )}
          />
        </Form.Item>

        <Form.Item
          label="Email"
          validateStatus={errors.email ? "error" : ""}
          help={errors.email?.message}
        >
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <Input {...field} type="email" placeholder="you@example.com" autoComplete="email" size="large" />
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
              <Input.Password {...field} placeholder="••••••••" autoComplete="new-password" size="large" />
            )}
          />
        </Form.Item>

        <Form.Item
          label="Confirm password"
          validateStatus={errors.confirmPassword ? "error" : ""}
          help={errors.confirmPassword?.message}
        >
          <Controller
            name="confirmPassword"
            control={control}
            render={({ field }) => (
              <Input.Password {...field} placeholder="••••••••" autoComplete="new-password" size="large" />
            )}
          />
        </Form.Item>

        {errors.root && (
          <Alert message={errors.root.message} type="error" showIcon style={{ marginBottom: 16 }} />
        )}

        <Button type="primary" htmlType="submit" block size="large" loading={registerLoading}>
          Create account
        </Button>

        <Typography.Paragraph style={{ textAlign: "center", marginTop: 12, fontSize: 14, color: "#6b7280" }}>
          Already have an account?{" "}
          <Link href="/login" style={{ color: "#2563EB", fontWeight: 500 }}>
            Sign in
          </Link>
        </Typography.Paragraph>
      </Form>
    </form>
  );
}
