import { NextResponse } from "next/server";

export { auth } from "./auth";

export async function middleware() {
  const session = await auth();
  if (!session) {
    return NextResponse.redirect("http://localhost:3000/i/flow/login");
  }
}

export const config = {
  matcher: ["/compose/tweet", "/home", "/explore", "/message", "/search"],
};
