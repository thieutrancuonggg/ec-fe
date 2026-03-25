"use client";

import { useState } from "react";
import Link from "next/link";
import { Drawer, Menu } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { Button } from "@/shared/components/ui/Button";

const navItems = [
  { key: "home", label: <Link href="/">Trang chủ</Link> },
  { key: "products", label: <Link href="/products">Sản phẩm</Link> },
  { key: "blog", label: <Link href="/blog">Blog</Link> },
  { key: "contact", label: <Link href="/contact">Liên hệ</Link> },
];

export function MobileMenuButton() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        variant="ghost"
        icon={<MenuOutlined />}
        onClick={() => setOpen(true)}
        className="md:hidden"
        aria-label="Mở menu"
      />

      <Drawer
        title={<span style={{ color: "#2563EB", fontWeight: 700 }}>Danh mục</span>}
        placement="left"
        onClose={() => setOpen(false)}
        open={open}
        size={280}
        styles={{ body: { padding: 0 } }}
      >
        <Menu
          mode="inline"
          items={navItems}
          onClick={() => setOpen(false)}
          style={{ border: "none" }}
        />
        <div style={{ padding: "12px 16px", borderTop: "1px solid #f0f0f0", color: "#9ca3af", fontSize: 12 }}>
          Miễn phí vận chuyển cho đơn hàng trên 500.000đ
        </div>
      </Drawer>
    </>
  );
}
