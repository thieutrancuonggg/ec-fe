import type { Metadata } from "next";
import {
  EnvironmentOutlined,
  PhoneOutlined,
  MailOutlined,
  ClockCircleOutlined,
  ThunderboltOutlined,
  SafetyCertificateOutlined,
  CustomerServiceOutlined,
} from "@ant-design/icons";
import { Container } from "@/shared/components/layout/Container";
import { ContactForm } from "./ContactForm";

export const metadata: Metadata = {
  title: "Liên hệ",
  description: "Liên hệ với LR STORE — chúng tôi luôn sẵn sàng hỗ trợ bạn.",
};

const contactInfo = [
  {
    icon: <EnvironmentOutlined style={{ fontSize: 22, color: "#2563EB" }} />,
    label: "Địa chỉ",
    value: "123 Đường Lê Lợi, Quận 1, TP. Hồ Chí Minh",
  },
  {
    icon: <PhoneOutlined style={{ fontSize: 22, color: "#2563EB" }} />,
    label: "Điện thoại",
    value: "0901 234 567",
  },
  {
    icon: <MailOutlined style={{ fontSize: 22, color: "#2563EB" }} />,
    label: "Email",
    value: "hello@lrstore.vn",
  },
  {
    icon: <ClockCircleOutlined style={{ fontSize: 22, color: "#2563EB" }} />,
    label: "Giờ làm việc",
    value: "Thứ 2 – Thứ 7 · 8:00 – 20:00",
  },
];

const trustStats = [
  {
    icon: <ThunderboltOutlined style={{ fontSize: 20, color: "#F97316" }} />,
    value: "< 2h",
    label: "Thời gian phản hồi",
  },
  {
    icon: <SafetyCertificateOutlined style={{ fontSize: 20, color: "#10b981" }} />,
    value: "98%",
    label: "Khách hàng hài lòng",
  },
  {
    icon: <CustomerServiceOutlined style={{ fontSize: 20, color: "#2563EB" }} />,
    value: "24/7",
    label: "Hỗ trợ trực tuyến",
  },
];

export default function ContactPage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section
        style={{
          position: "relative",
          overflow: "hidden",
          background: "linear-gradient(135deg, #eff6ff 0%, #f8faff 40%, #fafafa 100%)",
          borderBottom: "1px solid #e2e8f0",
          padding: "80px 0 64px",
          textAlign: "center",
        }}
      >
        {/* Decorative blobs */}
        <div style={{
          position: "absolute", top: -100, right: -100,
          width: 400, height: 400, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(37,99,235,0.08) 0%, transparent 70%)",
          pointerEvents: "none",
        }} />
        <div style={{
          position: "absolute", bottom: -60, left: -60,
          width: 280, height: 280, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(249,115,22,0.06) 0%, transparent 70%)",
          pointerEvents: "none",
        }} />

        <Container style={{ position: "relative" }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 6,
            background: "#dbeafe", color: "#2563EB",
            fontSize: 12, fontWeight: 600, letterSpacing: "0.06em",
            padding: "4px 14px", borderRadius: 20, marginBottom: 20,
            textTransform: "uppercase",
          }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#2563EB", display: "inline-block" }} />
            Hỗ trợ khách hàng
          </div>

          <h1 style={{
            margin: "0 0 16px",
            fontSize: "clamp(28px, 5vw, 42px)",
            fontWeight: 800,
            color: "#0f172a",
            letterSpacing: "-0.03em",
            lineHeight: 1.15,
          }}>
            Liên hệ với{" "}
            <span style={{ color: "#2563EB" }}>LR STORE</span>
          </h1>

          <p style={{
            margin: "0 auto",
            fontSize: 17,
            color: "#64748b",
            maxWidth: 500,
            lineHeight: 1.75,
          }}>
            Có câu hỏi về đơn hàng, sản phẩm hay cần tư vấn phong cách?
            Chúng tôi luôn sẵn sàng lắng nghe bạn.
          </p>
        </Container>
      </section>

      {/* ── Trust stats ──────────────────────────────────────────────────── */}
      <div style={{ background: "#fff", borderBottom: "1px solid #f1f5f9" }}>
        <Container>
          <div style={{
            display: "flex",
            justifyContent: "center",
            gap: 0,
            flexWrap: "wrap",
          }}>
            {trustStats.map((s, i) => (
              <div
                key={s.label}
                style={{
                  flex: "1 1 200px",
                  display: "flex",
                  alignItems: "center",
                  gap: 14,
                  padding: "24px 32px",
                  borderRight: i < trustStats.length - 1 ? "1px solid #f1f5f9" : "none",
                }}
              >
                <div style={{
                  width: 48, height: 48, borderRadius: 14,
                  background: "#f8fafc",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  flexShrink: 0,
                }}>
                  {s.icon}
                </div>
                <div>
                  <div style={{ fontSize: 22, fontWeight: 800, color: "#0f172a", letterSpacing: "-0.02em" }}>
                    {s.value}
                  </div>
                  <div style={{ fontSize: 13, color: "#94a3b8", marginTop: 1 }}>
                    {s.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </div>

      {/* ── Main content ─────────────────────────────────────────────────── */}
      <Container as="main" className="py-14">
        <div
          style={{ display: "grid", gridTemplateColumns: "1fr", gap: 28 }}
          className="lg:grid-cols-[360px_1fr]"
        >
          {/* ── Left: info ───────────────────────────────────────────────── */}
          <aside style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {contactInfo.map((item) => (
              <div
                key={item.label}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 16,
                  background: "#fff",
                  border: "1px solid #f1f5f9",
                  borderRadius: 14,
                  padding: "18px 20px",
                  boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
                  transition: "box-shadow 0.2s",
                }}
              >
                <div style={{
                  flexShrink: 0,
                  width: 48, height: 48, borderRadius: 12,
                  background: "linear-gradient(135deg, #eff6ff, #dbeafe)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  {item.icon}
                </div>
                <div>
                  <p style={{
                    margin: "0 0 3px",
                    fontSize: 11, fontWeight: 700,
                    color: "#94a3b8", textTransform: "uppercase", letterSpacing: "0.06em",
                  }}>
                    {item.label}
                  </p>
                  <p style={{ margin: 0, fontSize: 14, color: "#1e293b", fontWeight: 500 }}>
                    {item.value}
                  </p>
                </div>
              </div>
            ))}

            {/* CTA card */}
            <div style={{
              background: "linear-gradient(135deg, #1d4ed8 0%, #2563EB 50%, #3b82f6 100%)",
              borderRadius: 16,
              padding: "28px 24px",
              color: "#fff",
              marginTop: 4,
              position: "relative",
              overflow: "hidden",
            }}>
              <div style={{
                position: "absolute", top: -30, right: -30,
                width: 120, height: 120, borderRadius: "50%",
                background: "rgba(255,255,255,0.07)",
              }} />
              <p style={{ margin: "0 0 6px", fontWeight: 700, fontSize: 16, position: "relative" }}>
                Phản hồi nhanh hơn?
              </p>
              <p style={{ margin: "0 0 20px", fontSize: 13, color: "#bfdbfe", lineHeight: 1.65, position: "relative" }}>
                Nhắn tin qua Facebook hoặc Zalo để được hỗ trợ ngay lập tức trong giờ làm việc.
              </p>
              <div style={{ display: "flex", gap: 10, position: "relative" }}>
                <a
                  href="#"
                  style={{
                    flex: 1, textAlign: "center",
                    background: "rgba(255,255,255,0.15)",
                    border: "1px solid rgba(255,255,255,0.25)",
                    borderRadius: 8, padding: "8px 0",
                    fontSize: 13, fontWeight: 600, color: "#fff",
                    textDecoration: "none",
                    backdropFilter: "blur(4px)",
                  }}
                >
                  Facebook
                </a>
                <a
                  href="#"
                  style={{
                    flex: 1, textAlign: "center",
                    background: "rgba(255,255,255,0.15)",
                    border: "1px solid rgba(255,255,255,0.25)",
                    borderRadius: 8, padding: "8px 0",
                    fontSize: 13, fontWeight: 600, color: "#fff",
                    textDecoration: "none",
                    backdropFilter: "blur(4px)",
                  }}
                >
                  Zalo
                </a>
              </div>
            </div>
          </aside>

          {/* ── Right: form ──────────────────────────────────────────────── */}
          <div style={{
            background: "#fff",
            border: "1px solid #f1f5f9",
            borderRadius: 20,
            overflow: "hidden",
            boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
          }}>
            {/* Form header accent */}
            <div style={{
              height: 5,
              background: "linear-gradient(90deg, #2563EB 0%, #3b82f6 50%, #F97316 100%)",
            }} />
            <div style={{ padding: "36px 40px" }}>
              <h2 style={{ margin: "0 0 6px", fontSize: 22, fontWeight: 800, color: "#0f172a", letterSpacing: "-0.02em" }}>
                Gửi tin nhắn cho chúng tôi
              </h2>
              <p style={{ margin: "0 0 32px", fontSize: 14, color: "#94a3b8" }}>
                Điền thông tin bên dưới — chúng tôi sẽ phản hồi trong vòng 24 giờ.
              </p>
              <ContactForm />
            </div>
          </div>
        </div>
      </Container>

      {/* ── Map placeholder ───────────────────────────────────────────────── */}
      <div style={{ background: "#f8fafc", borderTop: "1px solid #f1f5f9", padding: "56px 0" }}>
        <Container>
          <div style={{ textAlign: "center", marginBottom: 32 }}>
            <p style={{ margin: "0 0 6px", fontSize: 12, fontWeight: 700, color: "#2563EB", letterSpacing: "0.1em", textTransform: "uppercase" }}>
              Tìm chúng tôi
            </p>
            <h2 style={{ margin: 0, fontSize: 26, fontWeight: 800, color: "#0f172a", letterSpacing: "-0.02em" }}>
              Cửa hàng của chúng tôi
            </h2>
          </div>

          <div style={{
            borderRadius: 20,
            overflow: "hidden",
            height: 300,
            background: "linear-gradient(135deg, #e0e7ff 0%, #dbeafe 50%, #e0f2fe 100%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 12,
            border: "1px solid #e2e8f0",
            boxShadow: "0 2px 12px rgba(0,0,0,0.05)",
          }}>
            <EnvironmentOutlined style={{ fontSize: 40, color: "#2563EB" }} />
            <p style={{ margin: 0, fontWeight: 600, color: "#1e293b", fontSize: 15 }}>
              123 Đường Lê Lợi, Quận 1, TP. Hồ Chí Minh
            </p>
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                marginTop: 4,
                fontSize: 13, fontWeight: 600, color: "#2563EB",
                textDecoration: "none",
                background: "#fff",
                padding: "8px 20px",
                borderRadius: 8,
                boxShadow: "0 1px 4px rgba(0,0,0,0.08)",
              }}
            >
              Xem trên Google Maps →
            </a>
          </div>
        </Container>
      </div>
    </>
  );
}
