"use client";

import Image from "next/image";
import { Minus, Plus, Trash2 } from "lucide-react";
import { Button } from "@/shared/components/ui/Button";
import { formatPrice } from "@/shared/lib/utils";
import { useCart } from "../hooks/useCart";
import { type CartItem as CartItemType } from "../types";

interface CartItemProps {
  item: CartItemType;
}

export function CartItem({ item }: CartItemProps) {
  const { updateQuantity, removeItem } = useCart();
  const thumbnail = item.product.images[0];

  return (
    <li className="flex gap-4 py-4">
      <div className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-md border border-neutral-200">
        {thumbnail ? (
          <Image
            src={thumbnail.url}
            alt={thumbnail.alt}
            fill
            sizes="80px"
            className="object-cover"
          />
        ) : (
          <div className="h-full w-full bg-neutral-100" />
        )}
      </div>

      <div className="flex flex-1 flex-col gap-1">
        <div className="flex items-start justify-between gap-2">
          <p className="text-sm font-medium text-neutral-900 line-clamp-2">
            {item.product.name}
          </p>
          <Button
            variant="ghost"
            size="icon"
            className="h-7 w-7 flex-shrink-0 text-neutral-400 hover:text-red-500"
            onClick={() => removeItem(item.product.id)}
            aria-label={`Remove ${item.product.name}`}
          >
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>

        <p className="text-sm font-semibold text-neutral-900">
          {formatPrice(item.product.price)}
        </p>

        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="icon"
            className="h-7 w-7"
            onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
            aria-label="Decrease quantity"
          >
            <Minus className="h-3 w-3" />
          </Button>
          <span className="w-8 text-center text-sm font-medium">{item.quantity}</span>
          <Button
            variant="outline"
            size="icon"
            className="h-7 w-7"
            onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
            aria-label="Increase quantity"
          >
            <Plus className="h-3 w-3" />
          </Button>
        </div>
      </div>
    </li>
  );
}
