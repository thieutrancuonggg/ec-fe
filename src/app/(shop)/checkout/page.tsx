import type { Metadata } from "next";
import { Container } from "@/shared/components/layout/Container";

export const metadata: Metadata = {
  title: "Checkout",
  robots: { index: false, follow: false },
};

export default function CheckoutPage() {
  return (
    <Container as="main" className="py-10">
      <h3 style={{ margin: "0 0 16px 0", fontSize: 24, fontWeight: 600, color: "#111827" }}>Checkout</h3>
      <span style={{ color: "#6b7280", fontSize: 14 }}>Checkout flow coming soon.</span>
    </Container>
  );
}
