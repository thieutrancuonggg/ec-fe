import { cn } from "@/shared/lib/cn";
import { cva, type VariantProps } from "class-variance-authority";
import { type HTMLAttributes } from "react";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors",
  {
    variants: {
      variant: {
        default: "border-transparent bg-blue-600 text-white",
        secondary: "border-neutral-200 bg-neutral-100 text-neutral-600",
        destructive: "border-red-200 bg-red-50 text-red-600",
        outline: "border-blue-200 text-blue-700 bg-blue-50",
        success: "border-emerald-200 bg-emerald-50 text-emerald-700",
        warning: "border-orange-200 bg-orange-50 text-orange-600",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

export function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}
