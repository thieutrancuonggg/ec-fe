import { Container } from "@/shared/components/layout/Container";
import { ProductCardSkeleton } from "@/modules/product/components/ProductCardSkeleton";
import { Skeleton } from "antd";

export default function RootLoading() {
  return (
    <Container className="py-16">
      <div style={{ marginBottom: 32 }}>
        <Skeleton.Input active style={{ width: 192, height: 32 }} />
      </div>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {Array.from({ length: 8 }).map((_, i) => (
          <ProductCardSkeleton key={i} />
        ))}
      </div>
    </Container>
  );
}
