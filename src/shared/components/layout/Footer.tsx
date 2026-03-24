import Link from "next/link";
import { Container } from "./Container";
import { siteConfig } from "@/config/site";
import { CopyrightYear } from "./CopyrightYear";

const footerLinks = {
  "Cửa hàng": [
    { label: "Tất cả sản phẩm", href: "/products" },
    { label: "Hàng mới về", href: "/products?category=new" },
    { label: "Khuyến mãi", href: "/products?sale=true" },
  ],
  "Hỗ trợ": [
    { label: "Câu hỏi thường gặp", href: "/faq" },
    { label: "Vận chuyển", href: "/shipping" },
    { label: "Đổi trả", href: "/returns" },
    { label: "Liên hệ", href: "/contact" },
  ],
  "Pháp lý": [
    { label: "Chính sách bảo mật", href: "/privacy" },
    { label: "Điều khoản dịch vụ", href: "/terms" },
    { label: "Chính sách cookie", href: "/cookies" },
  ],
};

export function Footer() {
  return (
    <footer style={{ background: "#0f172a", borderTop: "1px solid #1e293b" }}>
      <Container style={{ paddingTop: 56, paddingBottom: 56 }}>

        {/* Grid — brand col + 3 link cols */}
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4">

          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link
              href="/"
              style={{
                fontSize: 20,
                fontWeight: 800,
                letterSpacing: "-0.04em",
                color: "#fff",
                textDecoration: "none",
              }}
            >
              {siteConfig.name}
            </Link>
            <p style={{ marginTop: 12, fontSize: 14, lineHeight: 1.7, color: "#94a3b8", maxWidth: 260 }}>
              {siteConfig.description}
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <p style={{
                margin: "0 0 14px 0",
                fontSize: 11,
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.12em",
                color: "#cbd5e1",
              }}>
                {section}
              </p>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      style={{
                        fontSize: 14,
                        color: "#64748b",
                        textDecoration: "none",
                        transition: "color 0.15s",
                      }}
                      className="footer-link"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div style={{
          marginTop: 48,
          paddingTop: 24,
          borderTop: "1px solid #1e293b",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 8,
          fontSize: 13,
          color: "#475569",
        }}>
          <span>© <CopyrightYear /> {siteConfig.name}. Bảo lưu mọi quyền.</span>
          <span style={{ color: "#334155" }}>Làm với ♥</span>
        </div>
      </Container>
    </footer>
  );
}
