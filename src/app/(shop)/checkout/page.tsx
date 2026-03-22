import type { Metadata } from "next";
import { Typography } from "antd";
import { Container } from "@/shared/components/layout/Container";

export const metadata: Metadata = {
  title: "Checkout",
  robots: { index: false, follow: false },
};

export default function CheckoutPage() {
  return (
    <Container as="main" className="py-10">
      <Typography.Title level={3} style={{ margin: "0 0 16px 0" }}>Checkout</Typography.Title>
      <Typography.Text type="secondary">Checkout flow coming soon.</Typography.Text>
    </Container>
  );
}
