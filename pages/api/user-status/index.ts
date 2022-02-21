import { NextApiRequest, NextApiResponse } from "next";
import jwt, { GetPublicKeyOrSecret, Secret } from "jsonwebtoken";

function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "GET") {
    res.status(405).end();
  }

  const cookie = req.cookies.auth;

  try {
    jwt.verify(cookie, process.env.JWT_SECRET as Secret | GetPublicKeyOrSecret);

    res.status(200).send("SUCCEED");
  } catch {
    res.status(200).send("FAILED");
  }
}

export default handler;
