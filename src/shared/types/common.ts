// Typed search params for Next.js App Router pages
export type SearchParams = Promise<{
  [key: string]: string | string[] | undefined;
}>;
