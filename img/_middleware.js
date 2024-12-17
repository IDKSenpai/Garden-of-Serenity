import { NextResponse } from "next/server";

export function middleware(req) {
  const url = req.nextUrl;
  if (url.pathname.startsWith("/img")) {
    return NextResponse.rewrite(new URL("/404", req.url)); // Redirect to 404
  }
  return NextResponse.next();
}
