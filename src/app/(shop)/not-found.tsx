import Link from "next/link";
import { Container } from "@/shared/components/layout/Container";
import { Button } from "@/shared/components/ui/Button";

export default function NotFound() {
  return (
    <Container className="flex flex-col items-center justify-center py-24 text-center">
      <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">404</p>
      <h1 className="mt-2 text-4xl font-bold text-neutral-900">Page not found</h1>
      <p className="mt-4 text-neutral-500 max-w-md">
        Sorry, we couldn&apos;t find the page you&apos;re looking for.
      </p>
      <div className="mt-8 flex gap-4">
        <Button asChild>
          <Link href="/">Go home</Link>
        </Button>
        <Button asChild variant="outline">
          <Link href="/products">Browse products</Link>
        </Button>
      </div>
    </Container>
  );
}
