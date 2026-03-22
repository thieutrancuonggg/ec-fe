import { Container } from "@/shared/components/layout/Container";
import { ProductCardSkeleton } from "@/modules/product/components/ProductCardSkeleton";

export default function RootLoading() {
  return (
    <Container className="py-16">
      <div className="mb-8 h-8 w-48 animate-pulse rounded-md bg-neutral-200" />
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {Array.from({ length: 8 }).map((_, i) => (
          <ProductCardSkeleton key={i} />
        ))}
      </div>
    </Container>
  );
}
