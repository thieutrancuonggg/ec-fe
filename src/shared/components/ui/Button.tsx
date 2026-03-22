"use client";

import AntButton, { type ButtonProps as AntButtonProps } from "antd/es/button";
import type { ReactNode, CSSProperties } from "react";

export interface ButtonProps extends Omit<AntButtonProps, "type" | "size" | "variant"> {
  variant?: "default" | "cta" | "outline" | "secondary" | "ghost" | "link" | "destructive";
  asChild?: boolean;
  size?: "default" | "sm" | "lg" | "icon" | "small" | "middle" | "large";
  children?: ReactNode;
}

function getAntProps(variant: ButtonProps["variant"]): { type?: AntButtonProps["type"]; danger?: boolean; style?: CSSProperties } {
  switch (variant) {
    case "cta":
      return { type: "primary", style: { backgroundColor: "#F97316", borderColor: "#F97316" } };
    case "outline":
      return { type: "default" };
    case "secondary":
      return { type: "default" };
    case "ghost":
      return { type: "text" };
    case "link":
      return { type: "link" };
    case "destructive":
      return { type: "primary", danger: true };
    default:
      return { type: "primary" };
  }
}

function getAntSize(size: ButtonProps["size"]): AntButtonProps["size"] {
  if (size === "sm" || size === "small") return "small";
  if (size === "lg" || size === "large") return "large";
  return "middle";
}

export function Button({
  variant = "default",
  asChild,
  size,
  className,
  style,
  children,
  disabled,
  loading,
  onClick,
  htmlType,
  ...props
}: ButtonProps) {
  const { type: antType, danger, style: variantStyle } = getAntProps(variant);

  return (
    <AntButton
      type={antType}
      danger={danger}
      size={getAntSize(size)}
      className={className}
      style={{ ...variantStyle, ...style }}
      disabled={disabled}
      loading={loading}
      onClick={onClick}
      htmlType={htmlType}
      {...props}
    >
      {children}
    </AntButton>
  );
}

export { Button as default };
