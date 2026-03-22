"use client";

import { useEffect } from "react";
import { Container } from "@/shared/components/layout/Container";
import { Button } from "@/shared/components/ui/Button";

interface ErrorPageProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function RootError({ error, reset }: ErrorPageProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <Container className="flex flex-col items-center justify-center py-24 text-center">
      <h1 className="text-3xl font-bold text-neutral-900">Something went wrong</h1>
      <p className="mt-2 text-neutral-500 max-w-md">
        An unexpected error occurred. Please try again.
      </p>
      {error.digest && (
        <p className="mt-1 text-xs text-neutral-400">Error ID: {error.digest}</p>
      )}
      <Button onClick={reset} className="mt-6">
        Try again
      </Button>
    </Container>
  );
}
