import { NextApiRequest, NextApiResponse } from "next";
import cookie from "cookie";

import { apiAuthCheck } from "app/utils";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "POST") {
    res.status(405).end();
  }

  const token = req.cookies.auth;

  res.setHeader(
    "Set-Cookie",
    cookie.serialize("auth", token, {
      httpOnly: true,
      maxAge: -1,
      path: "/",
    })
  );

  res.status(204).end();
};

export default apiAuthCheck(handler);
