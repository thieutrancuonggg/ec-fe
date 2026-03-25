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
      .string({ error: "Họ tên là bắt buộc" })
      .trim()
      .min(1, "Họ tên là bắt buộc")
      .max(100, "Họ tên không được vượt quá 100 ký tự"),
    email: z
      .string({ error: "Email là bắt buộc" })
      .trim()
      .min(1, "Email là bắt buộc")
      .email("Email không hợp lệ"),
    password: z
      .string({ error: "Mật khẩu là bắt buộc" })
      .min(8, "Mật khẩu phải có ít nhất 8 ký tự")
      .max(128, "Mật khẩu không được vượt quá 128 ký tự")
      .regex(/[A-Z]/, "Phải chứa ít nhất một chữ hoa")
      .regex(/[a-z]/, "Phải chứa ít nhất một chữ thường")
      .regex(/[0-9]/, "Phải chứa ít nhất một chữ số"),
    confirmPassword: z
      .string({ error: "Vui lòng xác nhận mật khẩu" })
      .min(1, "Vui lòng xác nhận mật khẩu"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Mật khẩu không khớp",
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
        message: err instanceof Error ? err.message : "Đăng ký không thành công. Vui lòng thử lại.",
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
            label="Họ và tên"
            type="text"
            placeholder="Nguyễn Văn A"
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
            placeholder="ban@example.com"
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
            label="Mật khẩu"
            placeholder="••••••••"
            autoComplete="new-password"
            prefix={<LockOutlined className="text-gray-400" />}
            hint="Tối thiểu 8 ký tự, có chữ hoa, chữ thường và số"
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
            label="Xác nhận mật khẩu"
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
        Tạo tài khoản
      </Button>

      <p className="text-center text-sm text-gray-500">
        Đã có tài khoản?{" "}
        <Link href="/login" className="font-medium text-blue-600 hover:text-blue-700 transition-colors">
          Đăng nhập
        </Link>
      </p>
    </form>
  );
}
