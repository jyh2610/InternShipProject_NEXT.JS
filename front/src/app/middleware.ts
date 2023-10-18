import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

import type { NextFetchEvent, NextRequest } from "next/server";

const secret = process.env.SECRET;

export async function middleware(req: NextRequest, event: NextFetchEvent) {
  // 로그인 했을 경우에만 존재함 ( "next-auth.session-token" 쿠키가 존재할 때 )
  const session = await getToken({ req, secret, raw: true });
  const { pathname } = req.nextUrl;

  // 2022/08/13 - 로그인/회원가입 접근 제한 - by 1-blue
  if (pathname.startsWith("/signin") || pathname.startsWith("/signup")) {
    if (session) {
      return NextResponse.redirect(new URL("/", req.url));
    }
  }
}

export const config = {
  matcher: ["/signin", "/signup"],
};
