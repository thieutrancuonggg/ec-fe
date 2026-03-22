"use client";

import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import { Search } from "lucide-react";
import { cn } from "@/shared/lib/cn";

export function SearchBar() {
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);
  const [focused, setFocused] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const q = inputRef.current?.value.trim();
    if (q) router.push(`/products?q=${encodeURIComponent(q)}`);
  }

  return (
    <form onSubmit={handleSubmit} role="search" className="hidden sm:flex">
      <div className="relative">
        <Search
          className={cn(
            "absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 transition-colors duration-200",
            focused ? "text-blue-600" : "text-neutral-400"
          )}
        />
        <input
          ref={inputRef}
          type="search"
          placeholder="Search products…"
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className={cn(
            "h-9 w-44 rounded-full border bg-neutral-50 pl-9 pr-3 text-sm transition-all duration-200",
            "placeholder:text-neutral-400 text-neutral-900",
            focused
              ? "w-56 border-blue-600 bg-white ring-2 ring-blue-600/10 outline-none"
              : "border-neutral-200 hover:border-neutral-300"
          )}
          aria-label="Search products"
        />
      </div>
    </form>
  );
}
