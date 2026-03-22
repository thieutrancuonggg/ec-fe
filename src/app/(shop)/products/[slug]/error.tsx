"use client";

import { useEffect } from "react";
import Link from "next/link";
import { Container } from "@/shared/components/layout/Container";
import { Button } from "@/shared/components/ui/Button";

interface ProductErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function ProductDetailError({ error, reset }: ProductErrorProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <Container className="flex flex-col items-center justify-center py-24 text-center">
      <h1 className="text-2xl font-bold text-neutral-900">Failed to load product</h1>
      <p className="mt-2 text-neutral-500">
        We couldn&apos;t load this product. Please try again.
      </p>
      <div className="mt-6 flex gap-4">
        <Button onClick={reset}>Try again</Button>
        <Button asChild variant="outline">
          <Link href="/products">Back to Products</Link>
        </Button>
      </div>
    </Container>
  );
}
