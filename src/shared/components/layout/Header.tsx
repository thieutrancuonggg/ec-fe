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
      <div style={{ background: "#2563EB", padding: "8px 0", textAlign: "center", fontSize: 12, fontWeight: 500, color: "#fff", letterSpacing: "0.05em" }}>
        Free shipping on orders over $50 ·{" "}
        <Link href="/products?sale=true" style={{ color: "#fff", textDecoration: "underline" }}>
          Shop the sale
        </Link>
      </div>

      <header style={{
        position: "sticky",
        top: 0,
        zIndex: 40,
        background: "rgba(255,255,255,0.97)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid #e5e7eb",
        boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
        height: 64,
      }}>
        <Container>
          <div style={{ display: "flex", alignItems: "center", height: 64, gap: 16 }}>
            <MobileMenuButton />
            <Link href="/" style={{ flexShrink: 0, fontSize: 20, fontWeight: 700, letterSpacing: "-0.025em", color: "#2563EB", textDecoration: "none" }}>
              {siteConfig.name}
            </Link>
            <nav className="hidden md:flex" style={{ display: "flex", alignItems: "center", gap: 4, marginLeft: 24 }}>
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} className="header-nav-link" style={{ fontSize: 14, fontWeight: 500, color: "#475569", textDecoration: "none", padding: "6px 12px", borderRadius: 6, transition: "color 0.2s" }}>
                  {link.label}
                </Link>
              ))}
            </nav>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginLeft: "auto" }}>
              <SearchBar />
              <div style={{ width: 1, height: 24, background: "#e5e7eb" }} className="hidden sm:block" />
              <UserMenu />
              <div style={{ width: 1, height: 24, background: "#e5e7eb" }} className="hidden sm:block" />
              <CartHeaderButton />
            </div>
          </div>
        </Container>
      </header>
    </>
  );
}
