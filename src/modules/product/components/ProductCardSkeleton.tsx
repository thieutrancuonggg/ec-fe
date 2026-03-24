import { Card, Skeleton } from "antd";

export function ProductCardSkeleton() {
  return (
    <Card
      styles={{ body: { padding: "14px 16px 16px" } }}
      style={{ borderRadius: 12, border: "1px solid #f1f5f9" }}
      cover={
        <div style={{ aspectRatio: "1/1", background: "#f1f5f9" }}>
          <Skeleton.Image active style={{ width: "100%", height: "100%" }} />
        </div>
      }
    >
      <Skeleton active paragraph={{ rows: 2 }} title={{ width: "60%" }} />
    </Card>
  );
}
