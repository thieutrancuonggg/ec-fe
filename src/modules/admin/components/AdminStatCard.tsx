import { Card, Statistic } from "antd";
import { type LucideIcon } from "lucide-react";

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
    <Card className={className} style={{ borderRadius: 8 }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 12 }}>
        <span style={{ fontSize: 14, fontWeight: 500, color: "#6b7280" }}>{title}</span>
        <div style={{ borderRadius: 8, background: "#eff6ff", padding: 8, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <Icon size={16} style={{ color: "#2563EB" }} />
        </div>
      </div>
      <Statistic value={value} valueStyle={{ fontSize: 24, fontWeight: 700, color: "#111827" }} />
      {trend && <p style={{ marginTop: 8, fontSize: 12, color: "#9ca3af" }}>{trend}</p>}
    </Card>
  );
}
