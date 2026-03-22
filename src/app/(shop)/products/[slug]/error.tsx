"use client";

import { useEffect } from "react";
import Link from "next/link";
import { Result, Button } from "antd";

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
        title="Failed to load product"
        subTitle="We couldn't load this product. Please try again."
        extra={[
          <Button key="retry" type="primary" onClick={reset}>
            Try again
          </Button>,
          <Link key="back" href="/products">
            <Button>Back to Products</Button>
          </Link>,
        ]}
      />
    </div>
  );
}
