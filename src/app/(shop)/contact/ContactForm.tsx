"use client";

import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CheckCircleFilled } from "@ant-design/icons";
import { Input } from "@/shared/components/ui/Input";
import { Button } from "@/shared/components/ui/Button";

const schema = z.object({
  name: z
    .string({ error: "Họ tên là bắt buộc" })
    .trim()
    .min(1, "Họ tên là bắt buộc"),
  email: z
    .string({ error: "Email là bắt buộc" })
    .trim()
    .min(1, "Email là bắt buộc")
    .email("Email không hợp lệ"),
  subject: z
    .string({ error: "Chủ đề là bắt buộc" })
    .trim()
    .min(1, "Chủ đề là bắt buộc"),
  message: z
    .string({ error: "Nội dung là bắt buộc" })
    .trim()
    .min(10, "Nội dung phải có ít nhất 10 ký tự"),
});

type FormValues = z.infer<typeof schema>;

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  const onSubmit = handleSubmit(async () => {
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1000));
    setLoading(false);
    setSent(true);
    reset();
  });

  if (sent) {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 16,
          padding: "48px 24px",
          textAlign: "center",
        }}
      >
        <CheckCircleFilled style={{ fontSize: 56, color: "#10b981" }} />
        <h3 style={{ margin: 0, fontSize: 20, fontWeight: 700, color: "#111827" }}>
          Gửi thành công!
        </h3>
        <p style={{ margin: 0, color: "#6b7280", fontSize: 14, maxWidth: 320 }}>
          Cảm ơn bạn đã liên hệ. Chúng tôi sẽ phản hồi trong vòng 24 giờ làm việc.
        </p>
        <Button variant="outline" onClick={() => setSent(false)}>
          Gửi tin nhắn khác
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="flex flex-col gap-4">
      <div className="flex flex-col gap-4 sm:flex-row">
        <div style={{ flex: 1 }}>
          <Controller
            name="name"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                label="Họ và tên"
                placeholder="Nguyễn Văn A"
                error={errors.name?.message}
                required
                size="large"
              />
            )}
          />
        </div>
        <div style={{ flex: 1 }}>
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                label="Email"
                type="email"
                placeholder="ban@example.com"
                error={errors.email?.message}
                required
                size="large"
              />
            )}
          />
        </div>
      </div>

      <Controller
        name="subject"
        control={control}
        render={({ field }) => (
          <Input
            {...field}
            label="Chủ đề"
            placeholder="Tôi muốn hỏi về đơn hàng..."
            error={errors.subject?.message}
            required
            size="large"
          />
        )}
      />

      <Controller
        name="message"
        control={control}
        render={({ field }) => (
          <Input.TextArea
            {...field}
            label="Nội dung"
            placeholder="Nhập nội dung tin nhắn của bạn..."
            error={errors.message?.message}
            required
            rows={5}
            size="large"
          />
        )}
      />

      <Button
        variant="primary"
        size="lg"
        htmlType="submit"
        block
        loading={loading}
        className="mt-2"
      >
        Gửi tin nhắn
      </Button>
    </form>
  );
}
