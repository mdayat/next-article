import { NextRequest, NextResponse } from "next/server";
import jwt, { GetPublicKeyOrSecret, Secret } from "jsonwebtoken";

const middleware = (req: NextRequest) => {
  // const cookie = req.cookies.auth;

  // if (!cookie) {
  //   return NextResponse.redirect("http://localhost:3000/auth/login", 302);
  // }

  // try {
  //   jwt.verify(cookie, process.env.JWT_SECRET as Secret | GetPublicKeyOrSecret);

  //   return NextResponse.next();
  // } catch (err: any) {
  //   return NextResponse.redirect("http://localhost:3000/auth/login", 302);
  // }
};

export default middleware;
