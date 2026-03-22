"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronRight } from "lucide-react";
import { cn } from "@/shared/lib/cn";

const navLinks = [
  { label: "Products", href: "/products" },
  { label: "New Arrivals", href: "/products?category=new" },
  { label: "Sale", href: "/products?sale=true" },
];

export function MobileMenuButton() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="flex items-center justify-center rounded-md p-2 text-slate-600 hover:bg-blue-50 hover:text-blue-600 transition-colors md:hidden"
        aria-label="Open menu"
      >
        <Menu className="h-5 w-5" />
      </button>

      {/* Overlay */}
      <div
        className={cn(
          "fixed inset-0 z-50 bg-black/40 backdrop-blur-sm transition-opacity duration-300 md:hidden",
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        onClick={() => setOpen(false)}
      />

      {/* Drawer */}
      <div
        className={cn(
          "fixed inset-y-0 left-0 z-50 w-72 bg-white shadow-2xl transition-transform duration-300 ease-in-out md:hidden flex flex-col",
          open ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex items-center justify-between border-b border-neutral-100 px-5 py-4">
          <span className="text-lg font-bold tracking-tight text-blue-600">Menu</span>
          <button
            onClick={() => setOpen(false)}
            className="rounded-md p-1.5 text-neutral-500 hover:bg-blue-50 hover:text-blue-600 transition-colors"
            aria-label="Close menu"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto px-3 py-4">
          <ul className="space-y-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between rounded-lg px-3 py-3 text-sm font-medium text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition-colors group"
                >
                  {link.label}
                  <ChevronRight className="h-4 w-4 text-neutral-400 group-hover:text-blue-500 transition-colors" />
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="border-t border-neutral-100 px-5 py-4">
          <p className="text-xs text-neutral-400">Free shipping on orders over $50</p>
        </div>
      </div>
    </>
  );
}
