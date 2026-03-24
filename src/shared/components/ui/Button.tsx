"use client";

import { forwardRef, memo } from "react";
import { Button as AntButton } from "antd";
import type { GetProps } from "antd";

// ─── Types ────────────────────────────────────────────────────────────────────

type AntButtonProps = GetProps<typeof AntButton>;

export type ButtonVariant =
  | "primary"
  | "cta"
  | "outline"
  | "secondary"
  | "ghost"
  | "link"
  | "destructive";

export type ButtonSize = "sm" | "md" | "lg" | "icon";

export interface ButtonProps
  extends Omit<AntButtonProps, "type" | "size" | "danger" | "variant"> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

// ─── Variant → antd prop map ──────────────────────────────────────────────────

type AntVariantProps = Pick<AntButtonProps, "type" | "danger"> & {
  style?: React.CSSProperties;
};

const VARIANT_MAP: Record<ButtonVariant, AntVariantProps> = {
  primary:     { type: "primary" },
  cta:         { type: "primary", style: { backgroundColor: "#F97316", borderColor: "#F97316" } },
  outline:     { type: "default" },
  secondary:   { type: "default", style: { backgroundColor: "#eff6ff", borderColor: "#bfdbfe", color: "#1d4ed8" } },
  ghost:       { type: "text" },
  link:        { type: "link" },
  destructive: { type: "primary", danger: true },
};

// ─── Size → antd size map ─────────────────────────────────────────────────────

const SIZE_MAP: Record<ButtonSize, AntButtonProps["size"]> = {
  sm:   "small",
  md:   "middle",
  lg:   "large",
  icon: "middle",
};

// ─── Button ───────────────────────────────────────────────────────────────────

const ButtonInner = forwardRef<
  React.ElementRef<typeof AntButton>,
  ButtonProps
>(({ variant = "primary", size = "md", style, ...rest }, ref) => {
  const { style: variantStyle, ...variantProps } = VARIANT_MAP[variant];

  return (
    <AntButton
      ref={ref}
      size={SIZE_MAP[size]}
      style={{
        ...variantStyle,
        ...(size === "icon" ? { padding: 0, aspectRatio: "1 / 1" } : undefined),
        ...style,
      }}
      {...variantProps}
      {...rest}
    />
  );
});

ButtonInner.displayName = "Button";

export const Button = memo(ButtonInner);
export default Button;
