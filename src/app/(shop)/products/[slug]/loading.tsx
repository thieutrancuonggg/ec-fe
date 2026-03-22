"use client";

import { Container } from "@/shared/components/layout/Container";
import { Skeleton } from "antd";

export default function ProductDetailLoading() {
  return (
    <Container className="py-10">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
        <Skeleton.Image active style={{ width: "100%", height: 400, borderRadius: 12 }} />
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <Skeleton.Input active style={{ width: 96, height: 16 }} />
            <Skeleton.Input active style={{ width: "75%", height: 32 }} />
            <Skeleton.Input active style={{ width: 128, height: 16 }} />
          </div>
          <Skeleton.Input active style={{ width: 160, height: 40 }} />
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <Skeleton.Input active block style={{ height: 16 }} />
            <Skeleton.Input active block style={{ height: 16 }} />
            <Skeleton.Input active style={{ width: "75%", height: 16 }} />
          </div>
          <Skeleton.Button active block style={{ height: 48 }} />
        </div>
      </div>
    </Container>
  );
}
