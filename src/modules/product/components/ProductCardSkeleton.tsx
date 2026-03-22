import { Card, Skeleton } from "antd";

export function ProductCardSkeleton() {
  return (
    <Card styles={{ body: { padding: 16 } }} cover={<Skeleton.Image active style={{ width: "100%", height: 200 }} />}>
      <Skeleton active paragraph={{ rows: 3 }} title={false} />
    </Card>
  );
}
