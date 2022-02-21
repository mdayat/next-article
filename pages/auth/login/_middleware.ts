import { NextRequest, NextResponse } from "next/server";

const middleware = (req: NextRequest) => {
  const cookie = req.cookies.auth;

  if (cookie) {
    return NextResponse.redirect("https://next-article-plum.vercel.app", 302);
  }
};

export { middleware };
