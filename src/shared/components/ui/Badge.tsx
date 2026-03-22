import { Tag } from "antd";
import type { ReactNode } from "react";

export interface BadgeProps {
  variant?: "default" | "secondary" | "destructive" | "outline" | "success" | "warning";
  children?: ReactNode;
  className?: string;
}

const variantColors: Record<string, { color: string }> = {
  default: { color: "blue" },
  secondary: { color: "default" },
  destructive: { color: "red" },
  outline: { color: "geekblue" },
  success: { color: "green" },
  warning: { color: "orange" },
};

export function Badge({ variant = "default", children, className }: BadgeProps) {
  const { color } = variantColors[variant] ?? variantColors.default;
  return (
    <Tag color={color} className={className} style={{ margin: 0, fontSize: 12, fontWeight: 600 }}>
      {children}
    </Tag>
  );
}
