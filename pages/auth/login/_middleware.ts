import { NextRequest, NextResponse } from "next/server";

const middleware = (req: NextRequest) => {
  const cookie = req.cookies.auth;

  if (cookie) {
    return NextResponse.redirect("http://localhost:3000", 302);
  }
};

export { middleware };
