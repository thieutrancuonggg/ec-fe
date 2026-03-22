import Link from "next/link";
import { Container } from "./Container";
import { siteConfig } from "@/config/site";
import { CartHeaderButton } from "@/modules/cart/components/CartHeaderButton";
import { SearchBar } from "./SearchBar";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-neutral-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <Container>
        <div className="flex h-16 items-center justify-between gap-4">
          <Link
            href="/"
            className="flex-shrink-0 text-xl font-bold tracking-tight text-neutral-900"
          >
            {siteConfig.name}
          </Link>

          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-neutral-600">
            <Link href="/products" className="hover:text-neutral-900 transition-colors">
              Products
            </Link>
            <Link href="/products?category=new" className="hover:text-neutral-900 transition-colors">
              New Arrivals
            </Link>
            <Link href="/products?sale=true" className="hover:text-neutral-900 transition-colors">
              Sale
            </Link>
          </nav>

          <div className="flex items-center gap-3">
            <SearchBar />
            <CartHeaderButton />
          </div>
        </div>
      </Container>
    </header>
  );
}
