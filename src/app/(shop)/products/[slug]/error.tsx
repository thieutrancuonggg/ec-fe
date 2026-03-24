"use client";

import { useEffect } from "react";
import Link from "next/link";
import { Result } from "antd";
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
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", minHeight: "calc(100vh - 8rem)", padding: "48px 16px" }}>
      <Result
        status="error"
        title="Không thể tải sản phẩm"
        subTitle="Đã xảy ra lỗi khi tải sản phẩm này. Vui lòng thử lại."
        extra={[
          <Button key="retry" variant="primary" onClick={reset}>
            Thử lại
          </Button>,
          <Link key="back" href="/products">
            <Button variant="outline">Quay lại sản phẩm</Button>
          </Link>,
        ]}
      />
    </div>
  );
}
