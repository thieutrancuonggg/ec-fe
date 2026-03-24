"use client";

import { useRouter } from "next/navigation";
import { Input } from "@/shared/components/ui/Input";

export function SearchBar() {
  const router = useRouter();

  function handleSearch(value: string) {
    const q = value.trim();
    if (q) router.push(`/products?q=${encodeURIComponent(q)}`);
  }

  return (
    <div
      className="hidden sm:block"
      style={{ width: 260, flexShrink: 0 }}
    >
      <Input.Search
        placeholder="Tìm kiếm sản phẩm…"
        onSearch={handleSearch}
        size="large"
        aria-label="Tìm kiếm sản phẩm"
        className="header-search"
      />
    </div>
  );
}
