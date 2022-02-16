import { GetServerSidePropsContext } from "next";
import jwt, { GetPublicKeyOrSecret, Secret } from "jsonwebtoken";

const pageAuthCheck = (context: GetServerSidePropsContext) => {
  const cookie = context.req.cookies.auth;

  if (!cookie) {
    return false;
  }

  try {
    jwt.verify(cookie, process.env.JWT_SECRET as Secret | GetPublicKeyOrSecret);
  } catch (err) {
    return false;
  }

  return cookie;
};

export { pageAuthCheck };
