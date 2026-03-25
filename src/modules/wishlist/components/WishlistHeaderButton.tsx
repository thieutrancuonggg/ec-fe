"use client";

import Link from "next/link";
import { Badge } from "antd";
import { HeartOutlined } from "@ant-design/icons";
import { Button } from "@/shared/components/ui/Button";
import { useWishlist } from "../hooks/useWishlist";

export function WishlistHeaderButton() {
  const { items } = useWishlist();

  return (
    <Link href="/wishlist">
      <Badge count={items.length} size="small" color="#F97316" overflowCount={99}>
        <Button
          variant="ghost"
          icon={<HeartOutlined style={{ fontSize: 20 }} />}
          aria-label={`Danh sách yêu thích (${items.length} sản phẩm)`}
        />
      </Badge>
    </Link>
  );
}
