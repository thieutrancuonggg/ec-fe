"use client";

import { useState } from "react";
import Link from "next/link";
import { Drawer, Menu } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { Button } from "@/shared/components/ui/Button";

const navItems = [
  { key: "shop", label: <Link href="/products">Tất cả sản phẩm</Link> },
  { key: "new", label: <Link href="/products?category=new">Hàng mới về</Link> },
  { key: "bestsellers", label: <Link href="/products?sort=popular">Bán chạy nhất</Link> },
  { key: "sale", label: <Link href="/products?sale=true">Khuyến mãi</Link> },
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
