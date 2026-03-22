export function formatPrice(
  price: number,
  options: Intl.NumberFormatOptions = {}
): string {
  return new Intl.NumberFormat(
    process.env.NEXT_PUBLIC_LOCALE ?? "en-US",
    {
      style: "currency",
      currency: process.env.NEXT_PUBLIC_CURRENCY ?? "USD",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
      ...options,
    }
  ).format(price);
}
