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
    <Input.Search
      placeholder="Search products…"
      onSearch={handleSearch}
      style={{ width: 200 }}
      size="middle"
      className="hidden sm:block"
      aria-label="Search products"
    />
  );
}
