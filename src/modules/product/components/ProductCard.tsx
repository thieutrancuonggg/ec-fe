import Image from "next/image";
import Link from "next/link";
import { formatPrice } from "@/shared/lib/utils";
import { Badge } from "@/shared/components/ui/Badge";
import { type Product } from "../types";

interface ProductCardProps {
  product: Product;
  priority?: boolean;
}

export function ProductCard({ product, priority = false }: ProductCardProps) {
  const isOnSale =
    product.compareAtPrice !== undefined &&
    product.compareAtPrice > product.price;

  const discountPercent = isOnSale
    ? Math.round(
        ((product.compareAtPrice! - product.price) / product.compareAtPrice!) * 100
      )
    : 0;

  const thumbnail = product.images[0];

  return (
    <article className="group relative flex flex-col overflow-hidden rounded-xl border border-neutral-200 bg-white transition-all duration-200 hover:shadow-lg hover:shadow-blue-100/60 hover:-translate-y-0.5">
      <Link
        href={`/products/${product.slug}`}
        className="relative aspect-square overflow-hidden bg-neutral-50"
        tabIndex={-1}
        aria-hidden="true"
      >
        {thumbnail ? (
          <Image
            src={thumbnail.url}
            alt={thumbnail.alt}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            priority={priority}
          />
        ) : (
          <div className="flex h-full items-center justify-center bg-neutral-100 text-neutral-300 text-sm">
            No image
          </div>
        )}

        <div className="absolute left-2 top-2 flex flex-col gap-1">
          {isOnSale && <Badge variant="destructive">-{discountPercent}%</Badge>}
          {!product.inStock && <Badge variant="secondary">Out of stock</Badge>}
          {product.featured && <Badge>Featured</Badge>}
        </div>
      </Link>

      <div className="flex flex-1 flex-col gap-2 p-4">
        <Link href={`/products/${product.slug}`} className="flex-1">
          <h2 className="line-clamp-2 text-sm font-medium text-neutral-900 hover:underline">
            {product.name}
          </h2>
        </Link>

        <p className="text-xs text-neutral-500">{product.category.name}</p>

        <div className="flex items-baseline gap-2">
          <span className="text-base font-semibold text-neutral-900">
            {formatPrice(product.price)}
          </span>
          {isOnSale && (
            <span className="text-sm text-neutral-400 line-through">
              {formatPrice(product.compareAtPrice!)}
            </span>
          )}
        </div>

        {product.rating > 0 && (
          <div
            className="flex items-center gap-1"
            aria-label={`Rating: ${product.rating} out of 5`}
          >
            <span className="text-amber-400 text-xs">
              {"★".repeat(Math.round(product.rating))}
            </span>
            <span className="text-xs text-neutral-400">({product.reviewCount})</span>
          </div>
        )}
      </div>
    </article>
  );
}
