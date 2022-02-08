import { NextApiRequest, NextApiResponse } from "next";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import cookie from "cookie";

import { prisma } from "app/lib";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "POST") {
    res.status(405).end();
  }

  const { username, password, rememberMe } = req.body;

  const maxAgeDuration = rememberMe ? 60 * 60 * 24 : 60 * 60;

  try {
    const user = await prisma.user.findUnique({
      where: {
        username,
      },
    });

    if (!user) {
      throw new Error("Username or Password doesn't match");
    }

    const comparePassword =
      user?.password && (await bcrypt.compare(password, user.password));

    if (!comparePassword) {
      throw new Error("Username or Password doesn't match");
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
        sameSite: "strict",
        secure: process.env.NODE_ENV !== "development",
        maxAge: maxAgeDuration,
        path: "/",
      })
    );

    res.status(200).json({ message: "You are authenticated" });
  } catch (error: any) {
    console.log(error);
    res.status(500).send({ error });
  }
};

export default handler;
