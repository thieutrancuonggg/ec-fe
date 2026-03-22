"use client";

import Link from "next/link";
import { Button, Typography } from "antd";
import { Container } from "@/shared/components/layout/Container";
import { ProductGrid } from "@/modules/product/components/ProductGrid";
import { type Product } from "@/modules/product/types";

interface HomeContentProps {
  featuredProducts: Product[];
}

export function HomeContent({ featuredProducts }: HomeContentProps) {
  return (
    <>
      <section style={{ background: "linear-gradient(to bottom, #eff6ff, #fff)", borderBottom: "1px solid #dbeafe" }}>
        <Container style={{ paddingTop: 80, paddingBottom: 80, textAlign: "center" }}>
          <Typography.Title level={1} style={{ fontSize: "clamp(2rem, 5vw, 3.75rem)", fontWeight: 700, letterSpacing: "-0.025em", color: "#111827", margin: 0 }}>
            Discover our collection
          </Typography.Title>
          <Typography.Paragraph style={{ marginTop: 16, fontSize: 18, color: "#6b7280", maxWidth: 672, margin: "16px auto 0" }}>
            Curated products, delivered with care. Find everything you need in one place.
          </Typography.Paragraph>
          <div style={{ marginTop: 32, display: "flex", justifyContent: "center", gap: 16 }}>
            <Link href="/products">
              <Button
                size="large"
                style={{ backgroundColor: "#F97316", borderColor: "#F97316", color: "#fff", height: 48, fontSize: 16, padding: "0 32px" }}
              >
                Shop Now
              </Button>
            </Link>
            <Link href="/products?category=new">
              <Button size="large" style={{ height: 48, fontSize: 16, padding: "0 32px" }}>
                New Arrivals
              </Button>
            </Link>
          </div>
        </Container>
      </section>

      <Container as="section" className="py-16">
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 32 }}>
          <Typography.Title level={3} style={{ margin: 0 }}>
            Featured Products
          </Typography.Title>
          <Link href="/products" style={{ fontSize: 14, fontWeight: 500, color: "#2563EB", textDecoration: "none" }}>
            View all →
          </Link>
        </div>
        <ProductGrid products={featuredProducts} />
      </Container>
    </>
  );
}
