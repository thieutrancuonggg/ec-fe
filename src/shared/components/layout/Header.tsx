import Link from "next/link";
import { Container } from "./Container";
import { siteConfig } from "@/config/site";
import { CartHeaderButton } from "@/modules/cart/components/CartHeaderButton";
import { SearchBar } from "./SearchBar";
import { MobileMenuButton } from "./MobileMenu";
import { UserMenu } from "./UserMenu";

const navLinks = [
  { label: "Tất cả sản phẩm", href: "/products" },
  { label: "Hàng mới về", href: "/products?category=new" },
  { label: "Bán chạy nhất", href: "/products?sort=popular" },
  { label: "Khuyến mãi", href: "/products?sale=true" },
];

export function Header() {
  return (
    <>
      {/* Announcement bar */}
      <div style={{
        background: "linear-gradient(90deg, #1d4ed8 0%, #2563EB 50%, #3b82f6 100%)",
        padding: "9px 0",
        textAlign: "center",
        fontSize: 12,
        fontWeight: 500,
        color: "#fff",
        letterSpacing: "0.04em",
      }}>
        Miễn phí vận chuyển cho đơn hàng trên 500.000đ &nbsp;·&nbsp;{" "}
        <Link href="/products?sale=true" style={{ color: "#bfdbfe", textDecoration: "underline", textUnderlineOffset: 2 }}>
          Mua hàng giảm giá →
        </Link>
      </div>

      {/* Main header */}
      <header style={{
        position: "sticky",
        top: 0,
        zIndex: 40,
        background: "rgba(255,255,255,0.95)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        borderBottom: "1px solid #f1f5f9",
        boxShadow: "0 1px 8px rgba(0,0,0,0.06)",
      }}>
        <Container>
          <div style={{ display: "flex", alignItems: "center", height: 64, gap: 8 }}>
            {/* Mobile menu */}
            <MobileMenuButton />

            {/* Logo */}
            <Link
              href="/"
              style={{
                flexShrink: 0,
                fontSize: 20,
                fontWeight: 800,
                letterSpacing: "-0.04em",
                color: "#2563EB",
                textDecoration: "none",
                marginRight: 8,
              }}
            >
              {siteConfig.name}
            </Link>

            {/* Desktop nav */}
            <nav className="hidden md:flex" style={{ alignItems: "center", gap: 2 }}>
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="header-nav-link"
                  style={{
                    fontSize: 14,
                    fontWeight: 500,
                    color: "#475569",
                    textDecoration: "none",
                    padding: "6px 12px",
                    borderRadius: 8,
                    transition: "color 0.15s",
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Right actions */}
            <div style={{ display: "flex", alignItems: "center", gap: 6, marginLeft: "auto" }}>
              <SearchBar />
              <div style={{ width: 1, height: 22, background: "#e2e8f0", margin: "0 2px" }} className="hidden sm:block" />
              <UserMenu />
              <div style={{ width: 1, height: 22, background: "#e2e8f0", margin: "0 2px" }} className="hidden sm:block" />
              <CartHeaderButton />
            </div>
          </div>
        </Container>
      </header>
    </>
  );
}
