import { NextApiRequest, NextApiResponse } from "next";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import cookie from "cookie";

import { prisma } from "app/lib";
import { LoginDataTypes } from "app/types";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "POST") {
    res.status(405).end();
  }

  const { username, password, rememberMe }: LoginDataTypes = req.body;

  const maxAgeDuration = rememberMe ? 60 * 60 * 24 : 60 * 60;

  try {
    const user = await prisma.user.findUnique({
      where: {
        username,
      },
    });

    if (!user) {
      throw new Error("FAILED");
    }

    const comparePassword =
      user?.password && (await bcrypt.compare(password, user.password));

    if (!comparePassword) {
      throw new Error("FAILED");
    }

    const token = jwt.sign(
      {
        sub: user.id,
        username: user.username,
        exp: Math.floor(Date.now() / 1000) + maxAgeDuration,
      },
      process.env.JWT_SECRET as string
    );

    res.setHeader(
      "Set-Cookie",
      cookie.serialize("auth", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV !== "development",
        maxAge: maxAgeDuration,
        path: "/",
      })
    );

    res.status(200).send({ status: "SUCCEED" });
  } catch (error: any) {
    res.status(401).json({ status: error });
  }
};

export default handler;
