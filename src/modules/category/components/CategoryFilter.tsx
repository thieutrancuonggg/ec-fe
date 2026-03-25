"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";
import { Skeleton } from "antd";
import { useCategories } from "../hooks/useCategories";

export function CategoryFilter() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const activeCategory = searchParams.get("category");

  const { categories, loading } = useCategories();

  const handleSelect = useCallback(
    (categoryName: string | null) => {
      const params = new URLSearchParams(searchParams.toString());
      if (categoryName) {
        params.set("category", categoryName);
      } else {
        params.delete("category");
      }
      params.delete("page");
      router.push(`/products?${params.toString()}`);
    },
    [router, searchParams]
  );

  if (loading) {
    return (
      <div style={{ display: "flex", gap: 8, marginBottom: 24, flexWrap: "wrap" }}>
        {Array.from({ length: 6 }).map((_, i) => (
          <Skeleton.Button key={i} active size="small" style={{ width: 80, borderRadius: 20 }} />
        ))}
      </div>
    );
  }

  if (!categories.length) return null;

  return (
    <div
      style={{
        display: "flex",
        gap: 8,
        marginBottom: 24,
        overflowX: "auto",
        paddingBottom: 4,
        scrollbarWidth: "none",
      }}
    >
      {/* Chip "Tất cả" */}
      <button
        onClick={() => handleSelect(null)}
        style={chipStyle(activeCategory === null)}
      >
        Tất cả
      </button>

      {categories.map((cat) => (
        <button
          key={cat.id}
          onClick={() => handleSelect(cat.name)}
          style={chipStyle(activeCategory === cat.name)}
        >
          {cat.name}
        </button>
      ))}
    </div>
  );
}

function chipStyle(active: boolean): React.CSSProperties {
  return {
    flexShrink: 0,
    padding: "6px 16px",
    borderRadius: 20,
    border: active ? "1.5px solid #2563EB" : "1.5px solid #e2e8f0",
    background: active ? "#2563EB" : "#fff",
    color: active ? "#fff" : "#475569",
    fontSize: 13,
    fontWeight: active ? 600 : 400,
    cursor: "pointer",
    transition: "all 0.15s",
    whiteSpace: "nowrap",
  };
}
