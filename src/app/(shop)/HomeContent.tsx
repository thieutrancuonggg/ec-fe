"use client";

import Link from "next/link";
import { Button } from "@/shared/components/ui/Button";
import { Container } from "@/shared/components/layout/Container";
import { ProductGrid } from "@/modules/product/components/ProductGrid";
import { type Product } from "@/modules/product/types";

interface HomeContentProps {
  featuredProducts: Product[];
}

export function HomeContent({ featuredProducts }: HomeContentProps) {
  return (
    <>
      {/* Hero */}
      <section style={{
        position: "relative",
        overflow: "hidden",
        background: "linear-gradient(135deg, #eff6ff 0%, #f8faff 40%, #fafafa 100%)",
        borderBottom: "1px solid #e2e8f0",
      }}>
        {/* Decorative blobs */}
        <div style={{
          position: "absolute", top: -120, right: -120,
          width: 480, height: 480, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(37,99,235,0.08) 0%, transparent 70%)",
          pointerEvents: "none",
        }} />
        <div style={{
          position: "absolute", bottom: -80, left: -80,
          width: 320, height: 320, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(59,130,246,0.06) 0%, transparent 70%)",
          pointerEvents: "none",
        }} />

        <Container style={{ paddingTop: 96, paddingBottom: 96, textAlign: "center", position: "relative" }}>
          {/* Badge */}
          <div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "#dbeafe", borderRadius: 20, padding: "4px 14px", marginBottom: 24 }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#2563EB", display: "inline-block" }} />
            <span style={{ fontSize: 12, fontWeight: 600, color: "#1d4ed8", letterSpacing: "0.04em" }}>HÀNG MỚI MỘT MỪA</span>
          </div>

          <h1 style={{
            fontSize: "clamp(2.25rem, 5vw, 3.75rem)",
            fontWeight: 800,
            letterSpacing: "-0.04em",
            color: "#0f172a",
            lineHeight: 1.1,
            margin: 0,
          }}>
            Khám phá<br />
            <span style={{ color: "#2563EB" }}>bộ sưu tập của chúng tôi</span>
          </h1>

          <p style={{
            marginTop: 20,
            fontSize: 18,
            color: "#64748b",
            maxWidth: 520,
            marginLeft: "auto",
            marginRight: "auto",
            lineHeight: 1.7,
          }}>
            Sản phẩm được chọn lọc, giao hàng tận tâm. Tìm mọi thứ bạn cần ở một nơi.
          </p>

          <div style={{ marginTop: 36, display: "flex", justifyContent: "center", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
            <Link href="/products">
              <Button variant="cta" size="lg" style={{ height: 50, fontSize: 15, padding: "0 28px", fontWeight: 600 }}>
                Mua sắm ngay
              </Button>
            </Link>
            <Link href="/products?sort=popular">
              <Button variant="outline" size="lg" style={{ height: 50, fontSize: 15, padding: "0 28px" }}>
                Bán chạy nhất
              </Button>
            </Link>
          </div>

          {/* Stats row */}
          <div style={{ marginTop: 56, display: "flex", justifyContent: "center", gap: 48, flexWrap: "wrap" }}>
            {[
              { value: "10K+", label: "Sản phẩm" },
              { value: "50K+", label: "Khách hàng" },
              { value: "4.9★", label: "Đánh giá" },
            ].map(({ value, label }) => (
              <div key={label} style={{ textAlign: "center" }}>
                <div style={{ fontSize: 24, fontWeight: 800, color: "#0f172a", letterSpacing: "-0.02em" }}>{value}</div>
                <div style={{ fontSize: 13, color: "#94a3b8", marginTop: 2 }}>{label}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Featured Products */}
      <Container as="section" className="py-16">
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: 32 }}>
          <div>
            <p style={{ margin: "0 0 6px 0", fontSize: 12, fontWeight: 700, color: "#2563EB", letterSpacing: "0.1em", textTransform: "uppercase" }}>
              Chọn lọc dành cho bạn
            </p>
            <h2 style={{ margin: 0, fontSize: 28, fontWeight: 800, color: "#0f172a", letterSpacing: "-0.03em" }}>
              Sản phẩm nổi bật
            </h2>
          </div>
          <Link
            href="/products"
            style={{
              fontSize: 14,
              fontWeight: 600,
              color: "#2563EB",
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              gap: 4,
              flexShrink: 0,
            }}
          >
            Xem tất cả →
          </Link>
        </div>
        <ProductGrid products={featuredProducts} />
      </Container>
    </>
  );
}
