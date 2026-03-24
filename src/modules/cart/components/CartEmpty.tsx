import Link from "next/link";
import { Typography } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { Button } from "@/shared/components/ui/Button";

export function CartEmpty() {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "96px 0", textAlign: "center" }}>
      <ShoppingCartOutlined style={{ fontSize: 64, color: "#d1d5db" }} />
      <Typography.Title level={4} style={{ marginTop: 16 }}>Your cart is empty</Typography.Title>
      <Typography.Text type="secondary" style={{ marginTop: 8, display: "block" }}>
        Looks like you haven&apos;t added anything to your cart yet.
      </Typography.Text>
      <Link href="/products">
        <Button variant="primary" size="lg" style={{ marginTop: 24 }}>
          Start Shopping
        </Button>
      </Link>
    </div>
  );
}
