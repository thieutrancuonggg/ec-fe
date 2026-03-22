import { Container } from "@/shared/components/layout/Container";
import { ProductCardSkeleton } from "@/modules/product/components/ProductCardSkeleton";
import { Skeleton } from "@/shared/components/ui/Skeleton";

export default function ProductsLoading() {
  return (
    <Container className="py-10">
      <div className="flex items-center justify-between mb-8">
        <Skeleton className="h-8 w-40" />
        <Skeleton className="h-5 w-24" />
      </div>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {Array.from({ length: 12 }).map((_, i) => (
          <ProductCardSkeleton key={i} />
        ))}
      </div>
    </Container>
  );
}
