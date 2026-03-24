"use client";

import { useEffect } from "react";
import { Result } from "antd";
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
    <Result
      status="error"
      title="Admin error"
      subTitle={error.message || "An unexpected error occurred in the admin panel."}
      extra={[
        <Button key="retry" variant="primary" size="sm" onClick={reset}>
          Try again
        </Button>,
      ]}
    >
      {error.digest && (
        <p style={{ textAlign: "center", fontSize: 12, color: "#9ca3af" }}>ID: {error.digest}</p>
      )}
    </Result>
  );
}
