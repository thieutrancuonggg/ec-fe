import { type LucideIcon } from "lucide-react";
import { cn } from "@/shared/lib/cn";

interface AdminStatCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  trend?: string;
  className?: string;
}

export function AdminStatCard({
  title,
  value,
  icon: Icon,
  trend,
  className,
}: AdminStatCardProps) {
  return (
    <div
      className={cn(
        "rounded-lg border border-neutral-200 bg-white p-5 space-y-3",
        className
      )}
    >
      <div className="flex items-center justify-between">
        <p className="text-sm font-medium text-neutral-500">{title}</p>
        <div className="rounded-md bg-neutral-100 p-2">
          <Icon className="h-4 w-4 text-neutral-700" />
        </div>
      </div>
      <p className="text-2xl font-bold text-neutral-900">{value}</p>
      {trend && <p className="text-xs text-neutral-400">{trend}</p>}
    </div>
  );
}
