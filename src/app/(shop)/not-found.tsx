"use client";

import Link from "next/link";
import { Result } from "antd";
import { Button } from "@/shared/components/ui/Button";

export default function NotFound() {
  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", minHeight: "calc(100vh - 8rem)", padding: "48px 16px" }}>
      <Result
        status="404"
        title="Page not found"
        subTitle="Sorry, we couldn't find the page you're looking for."
        extra={[
          <Link key="home" href="/">
            <Button variant="primary">Go home</Button>
          </Link>,
          <Link key="products" href="/products">
            <Button variant="outline">Browse products</Button>
          </Link>,
        ]}
      />
    </div>
  );
}
