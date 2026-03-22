import Link from "next/link";
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
    <footer className="mt-auto bg-slate-900">
      <Container className="py-12">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="text-lg font-bold tracking-tight text-white">
              {siteConfig.name}
            </Link>
            <p className="mt-2 text-sm text-slate-400 max-w-xs">
              {siteConfig.description}
            </p>
          </div>

          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-white">
                {section}
              </h3>
              <ul className="mt-3 space-y-2">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-slate-400 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-8 border-t border-slate-700 pt-8 text-center text-xs text-slate-500">
          © <CopyrightYear /> {siteConfig.name}. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}
