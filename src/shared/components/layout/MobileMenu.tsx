"use client";

import { useState } from "react";
import Link from "next/link";
import { Drawer, Menu } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { Button } from "@/shared/components/ui/Button";

const navItems = [
  { key: "products", label: <Link href="/products">Products</Link> },
  { key: "new", label: <Link href="/products?category=new">New Arrivals</Link> },
  { key: "sale", label: <Link href="/products?sale=true">Sale</Link> },
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
        aria-label="Open menu"
      />

      <Drawer
        title={<span style={{ color: "#2563EB", fontWeight: 700 }}>Menu</span>}
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
          Free shipping on orders over $50
        </div>
      </Drawer>
    </>
  );
}
