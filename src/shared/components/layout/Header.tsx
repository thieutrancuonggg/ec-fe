import Link from "next/link";
import { Container } from "./Container";
import { siteConfig } from "@/config/site";
import { CartHeaderButton } from "@/modules/cart/components/CartHeaderButton";
import { SearchBar } from "./SearchBar";
import { MobileMenuButton } from "./MobileMenu";
import { UserMenu } from "./UserMenu";

const navLinks = [
  { label: "Products", href: "/products" },
  { label: "New Arrivals", href: "/products?category=new" },
  { label: "Sale", href: "/products?sale=true" },
];

export function Header() {
  return (
    <>
      {/* Announcement bar */}
      <div className="bg-blue-600 py-2 text-center text-xs font-medium text-white tracking-wide">
        Free shipping on orders over $50 &middot;{" "}
        <Link href="/products?sale=true" className="underline underline-offset-2 hover:no-underline transition-all">
          Shop the sale
        </Link>
      </div>

      {/* Main header */}
      <header className="sticky top-0 z-40 w-full border-b border-neutral-200/80 bg-white/95 backdrop-blur-md supports-[backdrop-filter]:bg-white/80 shadow-sm">
        <Container>
          <div className="flex h-16 items-center gap-4">
            {/* Mobile menu */}
            <MobileMenuButton />

            {/* Logo */}
            <Link
              href="/"
              className="flex-shrink-0 text-xl font-bold tracking-tight text-blue-600 hover:text-blue-700 transition-colors"
            >
              {siteConfig.name}
            </Link>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-1 ml-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative px-3 py-2 text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors rounded-md hover:bg-blue-50 group"
                >
                  {link.label}
                  <span className="absolute inset-x-3 -bottom-px h-px bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-200" />
                </Link>
              ))}
            </nav>

            {/* Right actions */}
            <div className="flex items-center gap-2 ml-auto">
              <SearchBar />
              <div className="h-6 w-px bg-neutral-200 hidden sm:block" />
              <UserMenu />
              <div className="h-6 w-px bg-neutral-200 hidden sm:block" />
              <CartHeaderButton />
            </div>
          </div>
        </Container>
      </header>
    </>
  );
}
