"use client";

import { useEffect } from "react";
import { Result, Button } from "antd";

interface ErrorPageProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function RootError({ error, reset }: ErrorPageProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", minHeight: "calc(100vh - 8rem)", padding: "48px 16px" }}>
      <Result
        status="error"
        title="Something went wrong"
        subTitle={
          <>
            An unexpected error occurred. Please try again.
            {error.digest && (
              <div style={{ marginTop: 4, fontSize: 12, color: "#9ca3af" }}>Error ID: {error.digest}</div>
            )}
          </>
        }
        extra={[
          <Button key="retry" type="primary" onClick={reset}>
            Try again
          </Button>,
        ]}
      />
    </div>
  );
}
