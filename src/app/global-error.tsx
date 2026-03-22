"use client";

import { useEffect } from "react";
import { Button } from "@/shared/components/ui/Button";

interface GlobalErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function GlobalError({ error, reset }: GlobalErrorProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col items-center justify-center p-8 text-center font-sans">
        <h1 className="text-3xl font-bold">Something went wrong</h1>
        <p className="mt-2 text-neutral-500 max-w-md">
          A critical error occurred. Please refresh the page or contact support.
        </p>
        {error.digest && (
          <p className="mt-1 text-xs text-neutral-400">Error ID: {error.digest}</p>
        )}
        <Button onClick={reset} className="mt-6">
          Refresh
        </Button>
      </body>
    </html>
  );
}
