"use client";

import { useEffect } from "react";
import { Button } from "@/shared/components/ui/Button";

interface AdminErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function AdminError({ error, reset }: AdminErrorProps) {
  useEffect(() => {
    console.error("[Admin Error]", error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center py-24 text-center">
      <h1 className="text-xl font-bold text-neutral-900">Admin error</h1>
      <p className="mt-2 text-sm text-neutral-500">
        {error.message || "An unexpected error occurred in the admin panel."}
      </p>
      {error.digest && (
        <p className="mt-1 text-xs text-neutral-400">ID: {error.digest}</p>
      )}
      <Button onClick={reset} size="sm" className="mt-4">
        Try again
      </Button>
    </div>
  );
}
