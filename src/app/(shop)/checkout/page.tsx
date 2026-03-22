import type { Metadata } from "next";
import { Container } from "@/shared/components/layout/Container";

export const metadata: Metadata = {
  title: "Checkout",
  robots: { index: false, follow: false },
};

export default function CheckoutPage() {
  return (
    <Container as="main" className="py-10">
      <h1 className="text-2xl font-bold tracking-tight text-neutral-900">Checkout</h1>
      <p className="mt-4 text-neutral-500">Checkout flow coming soon.</p>
    </Container>
  );
}
