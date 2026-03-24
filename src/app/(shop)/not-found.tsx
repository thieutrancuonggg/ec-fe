"use client";

import Link from "next/link";
import { Result } from "antd";
import { Button } from "@/shared/components/ui/Button";

export default function NotFound() {
  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", minHeight: "calc(100vh - 8rem)", padding: "48px 16px" }}>
      <Result
        status="404"
        title="Trang không tìm thấy"
        subTitle="Xin lỗi, chúng tôi không tìm thấy trang bạn đang tìm kiếm."
        extra={[
          <Link key="home" href="/">
            <Button variant="primary">Về trang chủ</Button>
          </Link>,
          <Link key="products" href="/products">
            <Button variant="outline">Xem sản phẩm</Button>
          </Link>,
        ]}
      />
    </div>
  );
}
