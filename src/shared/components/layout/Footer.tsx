import Link from "next/link";
import Paragraph from "antd/es/typography/Paragraph";
import Title from "antd/es/typography/Title";
import { Container } from "./Container";
import { siteConfig } from "@/config/site";
import { CopyrightYear } from "./CopyrightYear";

const footerLinks = {
  shop: [
    { label: "All Products", href: "/products" },
    { label: "New Arrivals", href: "/products?category=new" },
    { label: "Sale", href: "/products?sale=true" },
  ],
  support: [
    { label: "FAQ", href: "/faq" },
    { label: "Shipping", href: "/shipping" },
    { label: "Returns", href: "/returns" },
    { label: "Contact", href: "/contact" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Cookie Policy", href: "/cookies" },
  ],
};

export function Footer() {
  return (
    <footer style={{ background: "#0f172a", marginTop: "auto" }}>
      <Container style={{ paddingTop: 48, paddingBottom: 48 }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 32 }} className="md:grid-cols-4">
          <div style={{ gridColumn: "span 2 / span 2" }} className="md:col-span-1">
            <Link href="/" style={{ fontSize: 18, fontWeight: 700, letterSpacing: "-0.025em", color: "#fff", textDecoration: "none" }}>
              {siteConfig.name}
            </Link>
            <Paragraph style={{ marginTop: 8, fontSize: 14, color: "#94a3b8", maxWidth: 280 }}>
              {siteConfig.description}
            </Paragraph>
          </div>

          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <Title level={5} style={{ textTransform: "uppercase", letterSpacing: "0.1em", fontSize: 12, color: "#fff", marginBottom: 12 }}>
                {section}
              </Title>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 8 }}>
                {links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} style={{ fontSize: 14, color: "#94a3b8", textDecoration: "none" }}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 32, paddingTop: 32, borderTop: "1px solid #1e293b", textAlign: "center", fontSize: 12, color: "#64748b" }}>
          © <CopyrightYear /> {siteConfig.name}. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}
