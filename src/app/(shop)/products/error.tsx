"use client";

import { useEffect } from "react";
import { Container } from "@/shared/components/layout/Container";
import { Button } from "@/shared/components/ui/Button";

interface ProductsErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function ProductsError({ error, reset }: ProductsErrorProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <Container className="flex flex-col items-center justify-center py-24 text-center">
      <h1 className="text-2xl font-bold text-neutral-900">Failed to load products</h1>
      <p className="mt-2 text-neutral-500">
        We couldn&apos;t load the products. Please try again.
      </p>
      <Button onClick={reset} className="mt-6">
        Try again
      </Button>
    </Container>
  );
}
