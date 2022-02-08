import { NextRequest, NextResponse } from "next/server";
import jwt, { GetPublicKeyOrSecret, Secret } from "jsonwebtoken";

const middleware = (req: NextRequest) => {
  const cookie = req.cookies.auth;

  if (!cookie) {
    return NextResponse.redirect("http://localhost:3000/auth/login");
  }

  try {
    jwt.verify(cookie, process.env.JWT_SECRET as Secret | GetPublicKeyOrSecret);
  } catch (err: any) {
    return NextResponse.redirect("http://localhost:3000/auth/login");
  }
};

export { middleware };
