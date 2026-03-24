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
      <body style={{ display: "flex", minHeight: "100vh", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: 32, textAlign: "center", fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }}>
        <h1 style={{ fontSize: 28, fontWeight: 700, margin: "0 0 8px" }}>Something went wrong</h1>
        <p style={{ color: "#6b7280", maxWidth: 448, margin: "0 0 4px" }}>
          A critical error occurred. Please refresh the page or contact support.
        </p>
        {error.digest && (
          <p style={{ fontSize: 12, color: "#9ca3af", margin: "0 0 24px" }}>Error ID: {error.digest}</p>
        )}
        <Button variant="primary" onClick={reset} style={{ marginTop: 24 }}>
          Refresh
        </Button>
      </body>
    </html>
  );
}
