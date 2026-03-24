"use cache";

import { cacheLife } from "next/dist/server/use-cache/cache-life";

export async function CopyrightYear() {
  cacheLife("max");
  return <>{new Date().getFullYear()}</>;
}
