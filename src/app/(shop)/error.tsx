"use client";

import { useEffect } from "react";
import { Result } from "antd";
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
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", minHeight: "calc(100vh - 8rem)", padding: "48px 16px" }}>
      <Result
        status="error"
        title="Đã xảy ra lỗi"
        subTitle={
          <>
            Đã xảy ra lỗi không mong muốn. Vui lòng thử lại.
            {error.digest && (
              <div style={{ marginTop: 4, fontSize: 12, color: "#9ca3af" }}>Mã lỗi: {error.digest}</div>
            )}
          </>
        }
        extra={[
          <Button key="retry" variant="primary" onClick={reset}>
            Thử lại
          </Button>,
        ]}
      />
    </div>
  );
}
