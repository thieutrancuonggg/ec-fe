"use client";

import { useRouter } from "next/navigation";
import { useRef } from "react";
import { Search } from "lucide-react";
import { cn } from "@/shared/lib/cn";

export function SearchBar() {
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const q = inputRef.current?.value.trim();
    if (q) router.push(`/products?q=${encodeURIComponent(q)}`);
  }

  return (
    <form onSubmit={handleSubmit} role="search" className="hidden sm:flex">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-400" />
        <input
          ref={inputRef}
          type="search"
          placeholder="Search products…"
          className={cn(
            "h-9 w-48 rounded-md border border-neutral-200 bg-white pl-9 pr-3 text-sm",
            "focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:ring-offset-2",
            "placeholder:text-neutral-400"
          )}
          aria-label="Search products"
        />
      </div>
    </form>
  );
}
