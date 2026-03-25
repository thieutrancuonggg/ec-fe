import type { Metadata } from "next";
import Link from "next/link";
import { Card, Tag } from "antd";
import { CalendarOutlined, ClockCircleOutlined, ArrowRightOutlined } from "@ant-design/icons";
import { Container } from "@/shared/components/layout/Container";

export const metadata: Metadata = {
  title: "Blog",
  description: "Xu hướng thời trang, mẹo phối đồ và tin tức mới nhất từ LR STORE.",
};

interface Post {
  slug: string;
  category: string;
  categoryColor: string;
  coverBg: string;
  title: string;
  excerpt: string;
  author: string;
  authorInitials: string;
  date: string;
  readTime: string;
  featured?: boolean;
}

const posts: Post[] = [
  {
    slug: "xu-huong-thoi-trang-he-2025",
    category: "Xu hướng",
    categoryColor: "orange",
    coverBg: "#fef9ee",
    title: "5 xu hướng thời trang hè 2025 bạn không thể bỏ qua",
    excerpt: "Mùa hè 2025 mang đến làn gió mới với tông màu pastel rực rỡ, chất liệu linen thoáng mát và phong cách Y2K hồi sinh.",
    author: "Minh Anh",
    authorInitials: "MA",
    date: "20 thg 3, 2025",
    readTime: "5 phút",
    featured: true,
  },
  {
    slug: "phoi-do-cong-so",
    category: "Phong cách",
    categoryColor: "blue",
    coverBg: "#eff6ff",
    title: "Cách phối đồ công sở thanh lịch và năng động",
    excerpt: "Không cần tủ đồ đắt tiền để mặc đẹp đến văn phòng — chỉ cần vài bí quyết phối màu và chọn form dáng phù hợp.",
    author: "Thu Hà",
    authorInitials: "TH",
    date: "15 thg 3, 2025",
    readTime: "4 phút",
  },
  {
    slug: "chon-size-quan-ao-online",
    category: "Mẹo mua sắm",
    categoryColor: "green",
    coverBg: "#f0fdf4",
    title: "Hướng dẫn chọn size quần áo chuẩn khi mua online",
    excerpt: "Mua quần áo online không còn là rủi ro nếu bạn biết cách đo số đo cơ thể và đọc bảng size chuẩn xác.",
    author: "Gia Huy",
    authorInitials: "GH",
    date: "10 thg 3, 2025",
    readTime: "3 phút",
  },
  {
    slug: "mau-sac-hot-thu-dong-2025",
    category: "Xu hướng",
    categoryColor: "orange",
    coverBg: "#fff1f2",
    title: "Top 10 màu sắc hot nhất mùa thu đông 2025",
    excerpt: "Từ burgundy ấm áp đến olive trầm mặc, mùa thu đông 2025 mang bảng màu phong phú và cực kỳ dễ phối.",
    author: "Minh Anh",
    authorInitials: "MA",
    date: "5 thg 3, 2025",
    readTime: "4 phút",
  },
  {
    slug: "bao-quan-quan-ao",
    category: "Chăm sóc",
    categoryColor: "purple",
    coverBg: "#faf5ff",
    title: "Bí quyết bảo quản quần áo giữ màu bền đẹp",
    excerpt: "Giặt đúng cách, phơi đúng chiều, bảo quản đúng chỗ — những thói quen nhỏ giúp tủ đồ của bạn luôn như mới.",
    author: "Thu Hà",
    authorInitials: "TH",
    date: "28 thg 2, 2025",
    readTime: "5 phút",
  },
  {
    slug: "streetwear-viet-nam",
    category: "Streetwear",
    categoryColor: "default",
    coverBg: "#f8fafc",
    title: "Xu hướng streetwear Việt Nam đang bùng nổ",
    excerpt: "Các thương hiệu nội địa đang định hình lại cách giới trẻ Việt thể hiện bản thân qua thời trang đường phố.",
    author: "Gia Huy",
    authorInitials: "GH",
    date: "22 thg 2, 2025",
    readTime: "6 phút",
  },
];

const categories = ["Tất cả", "Xu hướng", "Phong cách", "Mẹo mua sắm", "Streetwear", "Chăm sóc"];
const featured = posts.find((p) => p.featured)!;
const rest = posts.filter((p) => !p.featured);

const authorStyle = (size: number): React.CSSProperties => ({
  width: size, height: size, borderRadius: "50%",
  background: "linear-gradient(135deg, #2563EB, #3b82f6)",
  display: "flex", alignItems: "center", justifyContent: "center",
  fontSize: size * 0.38, fontWeight: 700, color: "#fff", flexShrink: 0,
});

export default function BlogPage() {
  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section style={{
        position: "relative", overflow: "hidden",
        background: "linear-gradient(135deg, #eff6ff 0%, #f8faff 40%, #fafafa 100%)",
        borderBottom: "1px solid #e2e8f0",
        padding: "72px 0 56px", textAlign: "center",
      }}>
        <div style={{ position: "absolute", top: -100, right: -80, width: 360, height: 360, borderRadius: "50%", background: "radial-gradient(circle, rgba(37,99,235,0.07) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: -60, left: -60, width: 260, height: 260, borderRadius: "50%", background: "radial-gradient(circle, rgba(249,115,22,0.05) 0%, transparent 70%)", pointerEvents: "none" }} />

        <Container style={{ position: "relative" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "#dbeafe", color: "#2563EB", fontSize: 12, fontWeight: 600, letterSpacing: "0.06em", padding: "4px 14px", borderRadius: 20, marginBottom: 20, textTransform: "uppercase" }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#2563EB", display: "inline-block" }} />
            Cẩm nang thời trang
          </div>
          <h1 style={{ margin: "0 0 16px", fontSize: "clamp(28px, 5vw, 42px)", fontWeight: 800, color: "#0f172a", letterSpacing: "-0.03em", lineHeight: 1.15 }}>
            Blog <span style={{ color: "#2563EB" }}>LR STORE</span>
          </h1>
          <p style={{ margin: "0 auto", fontSize: 17, color: "#64748b", maxWidth: 480, lineHeight: 1.75 }}>
            Xu hướng thời trang mới nhất, mẹo phối đồ và bí quyết mua sắm thông minh.
          </p>
        </Container>
      </section>

      <Container as="main" className="py-12">
        {/* ── Category tabs ─────────────────────────────────────────────── */}
        <div style={{ display: "flex", gap: 8, marginBottom: 40, overflowX: "auto", paddingBottom: 2, scrollbarWidth: "none" }}>
          {categories.map((cat, i) => (
            <button key={cat} style={{
              flexShrink: 0, padding: "7px 18px", borderRadius: 20,
              border: i === 0 ? "1.5px solid #2563EB" : "1.5px solid #e2e8f0",
              background: i === 0 ? "#2563EB" : "#fff",
              color: i === 0 ? "#fff" : "#64748b",
              fontSize: 13, fontWeight: i === 0 ? 600 : 400,
              cursor: "pointer", whiteSpace: "nowrap",
            }}>
              {cat}
            </button>
          ))}
        </div>

        {/* ── Featured post ─────────────────────────────────────────────── */}
        <div style={{ marginBottom: 52 }}>
          <p style={{ margin: "0 0 4px", fontSize: 12, fontWeight: 700, color: "#2563EB", letterSpacing: "0.1em", textTransform: "uppercase" }}>Nổi bật</p>
          <h2 style={{ margin: "0 0 20px", fontSize: 22, fontWeight: 800, color: "#0f172a", letterSpacing: "-0.02em" }}>Đáng đọc nhất</h2>

          <Link href={`/blog/${featured.slug}`} style={{ textDecoration: "none" }}>
            <Card hoverable style={{ borderRadius: 16, overflow: "hidden", border: "1px solid #f1f5f9" }} styles={{ body: { padding: 0 } }}>
              <div className="flex flex-col lg:flex-row">
                {/* Cover */}
                <div
                  style={{ background: featured.coverBg, minHeight: 280, flex: "0 0 auto", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 12, position: "relative", overflow: "hidden" }}
                  className="lg:w-[460px]"
                >
                  <div style={{ position: "absolute", bottom: -40, right: -40, width: 160, height: 160, borderRadius: "50%", background: "rgba(37,99,235,0.06)" }} />
                  <div style={{ position: "absolute", top: -30, left: -30, width: 120, height: 120, borderRadius: "50%", background: "rgba(37,99,235,0.04)" }} />
                  <div style={{ width: 64, height: 64, borderRadius: 16, background: "rgba(37,99,235,0.1)", display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
                    <span style={{ fontSize: 28 }}>📰</span>
                  </div>
                  <span style={{ fontSize: 11, fontWeight: 700, color: "#94a3b8", letterSpacing: "0.1em", textTransform: "uppercase", position: "relative" }}>
                    {featured.category}
                  </span>
                </div>

                {/* Content */}
                <div style={{ padding: "36px 40px", display: "flex", flexDirection: "column", justifyContent: "center", flex: 1 }}>
                  <Tag color={featured.categoryColor} style={{ marginBottom: 16, width: "fit-content", fontWeight: 600, fontSize: 11 }}>
                    {featured.category.toUpperCase()}
                  </Tag>
                  <h3 style={{ margin: "0 0 12px", fontSize: 22, fontWeight: 800, color: "#0f172a", letterSpacing: "-0.02em", lineHeight: 1.35 }}>
                    {featured.title}
                  </h3>
                  <p style={{ margin: "0 0 28px", fontSize: 14, color: "#64748b", lineHeight: 1.75 }}>
                    {featured.excerpt}
                  </p>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                      <div style={authorStyle(36)}>{featured.authorInitials}</div>
                      <div>
                        <p style={{ margin: 0, fontSize: 13, fontWeight: 600, color: "#1e293b" }}>{featured.author}</p>
                        <p style={{ margin: 0, fontSize: 12, color: "#94a3b8" }}>
                          {featured.date} · {featured.readTime}
                        </p>
                      </div>
                    </div>
                    <span style={{ fontSize: 13, fontWeight: 600, color: "#2563EB", display: "flex", alignItems: "center", gap: 6 }}>
                      Đọc ngay <ArrowRightOutlined />
                    </span>
                  </div>
                </div>
              </div>
            </Card>
          </Link>
        </div>

        {/* ── Posts grid ────────────────────────────────────────────────── */}
        <p style={{ margin: "0 0 4px", fontSize: 12, fontWeight: 700, color: "#2563EB", letterSpacing: "0.1em", textTransform: "uppercase" }}>Khám phá thêm</p>
        <h2 style={{ margin: "0 0 24px", fontSize: 22, fontWeight: 800, color: "#0f172a", letterSpacing: "-0.02em" }}>Bài viết mới nhất</h2>

        <div style={{ display: "grid", gap: 20 }} className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} style={{ textDecoration: "none", display: "block" }}>
              <Card
                hoverable
                style={{ borderRadius: 12, overflow: "hidden", border: "1px solid #f1f5f9", height: "100%" }}
                styles={{ body: { padding: "14px 16px 18px" } }}
                cover={
                  <div style={{ background: post.coverBg, height: 180, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 8, position: "relative", overflow: "hidden" }}>
                    <div style={{ position: "absolute", bottom: -24, right: -24, width: 90, height: 90, borderRadius: "50%", background: "rgba(37,99,235,0.05)" }} />
                    <div style={{ position: "absolute", top: -16, left: -16, width: 64, height: 64, borderRadius: "50%", background: "rgba(37,99,235,0.04)" }} />
                    <div style={{ width: 48, height: 48, borderRadius: 12, background: "rgba(37,99,235,0.08)", display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
                      <span style={{ fontSize: 22 }}>📝</span>
                    </div>
                    <span style={{ fontSize: 10, fontWeight: 700, color: "#94a3b8", letterSpacing: "0.08em", textTransform: "uppercase", position: "relative" }}>
                      {post.category}
                    </span>
                  </div>
                }
              >
                <Tag color={post.categoryColor} style={{ marginBottom: 10, fontWeight: 600, fontSize: 11 }}>
                  {post.category.toUpperCase()}
                </Tag>

                <p style={{ margin: "0 0 8px", fontSize: 14, fontWeight: 700, color: "#0f172a", lineHeight: 1.45, display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden", minHeight: 40 } as React.CSSProperties}>
                  {post.title}
                </p>

                <p style={{ margin: "0 0 16px", fontSize: 13, color: "#64748b", lineHeight: 1.65, display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" } as React.CSSProperties}>
                  {post.excerpt}
                </p>

                <div style={{ paddingTop: 14, borderTop: "1px solid #f1f5f9", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <div style={authorStyle(26)}>{post.authorInitials}</div>
                    <span style={{ fontSize: 12, fontWeight: 500, color: "#475569" }}>{post.author}</span>
                  </div>
                  <span style={{ fontSize: 12, color: "#94a3b8", display: "flex", alignItems: "center", gap: 4 }}>
                    <ClockCircleOutlined style={{ fontSize: 11 }} /> {post.readTime}
                  </span>
                </div>
              </Card>
            </Link>
          ))}
        </div>

        {/* ── Load more ─────────────────────────────────────────────────── */}
        <div style={{ textAlign: "center", marginTop: 48 }}>
          <button style={{ padding: "11px 36px", borderRadius: 10, border: "1.5px solid #e2e8f0", background: "#fff", fontSize: 14, fontWeight: 600, color: "#475569", cursor: "pointer", boxShadow: "0 1px 4px rgba(0,0,0,0.04)" }}>
            Xem thêm bài viết
          </button>
        </div>
      </Container>

      {/* ── Newsletter ────────────────────────────────────────────────────── */}
      <section style={{ background: "linear-gradient(135deg, #1d4ed8 0%, #2563EB 60%, #3b82f6 100%)", padding: "64px 0", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: -80, right: -80, width: 320, height: 320, borderRadius: "50%", background: "rgba(255,255,255,0.05)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: -60, left: -60, width: 240, height: 240, borderRadius: "50%", background: "rgba(255,255,255,0.04)", pointerEvents: "none" }} />

        <Container style={{ textAlign: "center", position: "relative" }}>
          <h2 style={{ margin: "0 0 12px", fontSize: "clamp(22px, 4vw, 32px)", fontWeight: 800, color: "#fff", letterSpacing: "-0.02em" }}>
            Đừng bỏ lỡ bài viết mới
          </h2>
          <p style={{ margin: "0 0 32px", fontSize: 15, color: "#bfdbfe", lineHeight: 1.75 }}>
            Đăng ký để nhận xu hướng thời trang và ưu đãi độc quyền mỗi tuần.
          </p>
          <div style={{ display: "flex", gap: 10, justifyContent: "center", flexWrap: "wrap", maxWidth: 460, marginInline: "auto" }}>
            <input type="email" placeholder="Nhập email của bạn..." style={{ flex: 1, minWidth: 220, padding: "12px 18px", borderRadius: 10, border: "1px solid rgba(255,255,255,0.25)", background: "rgba(255,255,255,0.12)", fontSize: 14, outline: "none", color: "#fff" }} />
            <button style={{ padding: "12px 24px", borderRadius: 10, border: "none", background: "#F97316", color: "#fff", fontSize: 14, fontWeight: 700, cursor: "pointer", whiteSpace: "nowrap", boxShadow: "0 4px 16px rgba(249,115,22,0.45)" }}>
              Đăng ký
            </button>
          </div>
        </Container>
      </section>
    </>
  );
}
