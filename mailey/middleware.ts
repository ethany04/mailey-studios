import { NextRequest, NextResponse } from "next/server";

const PUBLIC_FILE = /\.(.*)$/i;
const PASSWORD = process.env.SITE_PASSWORD || "my-secret-password";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (PUBLIC_FILE.test(pathname) || pathname.startsWith("/api")) {
    return NextResponse.next();
  }

  if (pathname === "/unlock") {
    return NextResponse.next();
  }

  const passwordCookie = request.cookies.get("site-auth")?.value;

  if (passwordCookie === PASSWORD) {
    return NextResponse.next();
  }

  const url = request.nextUrl.clone();
  url.pathname = "/unlock";
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/", "/((?!_next).*)"],
};
