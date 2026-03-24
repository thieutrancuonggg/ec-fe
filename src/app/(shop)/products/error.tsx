"use client";

import { useEffect } from "react";
import { Result } from "antd";
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
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", minHeight: "calc(100vh - 8rem)", padding: "48px 16px" }}>
      <Result
        status="error"
        title="Không thể tải sản phẩm"
        subTitle="Đã xảy ra lỗi khi tải danh sách sản phẩm. Vui lòng thử lại."
        extra={[
          <Button key="retry" variant="primary" onClick={reset}>
            Thử lại
          </Button>,
        ]}
      />
    </div>
  );
}
