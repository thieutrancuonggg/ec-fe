import { type NextRequest, NextResponse } from "next/server";

const ADMIN_SESSION_COOKIE = "admin_session";

/**
 * Protects /admin/* routes.
 * Replace the cookie check below with your real auth verification
 * (e.g. verify a JWT, check NextAuth session, call an auth service).
 */
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname.startsWith("/admin") && !pathname.startsWith("/admin/login")) {
    const session = request.cookies.get(ADMIN_SESSION_COOKIE);

    if (!session?.value) {
      const loginUrl = new URL("/admin/login", request.url);
      loginUrl.searchParams.set("callbackUrl", pathname);
      return NextResponse.redirect(loginUrl);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
