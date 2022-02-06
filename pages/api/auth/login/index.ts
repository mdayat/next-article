import { NextApiRequest, NextApiResponse } from "next";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import { prisma } from "app/lib";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "POST") {
    res.status(405).end();
  }

  const { username, password } = req.body.loginData;

  try {
    const user = await prisma.user.findUnique({
      where: {
        username,
      },
    });

    const comparePassword =
      user?.password && (await bcrypt.compare(password, user.password));

    if (!user || !comparePassword) {
      throw new Error("Username or Password doesn't match");
    }

    const token = jwt.sign(
      {
        sub: user.id,
        username: user.username,
        exp: Math.floor(Date.now() / 1000) + 60 * 120,
      },
      process.env.JWT_SECRET as string
    );

    res.status(200).send({ token });
  } catch (error: any) {
    console.log(error);
    res.status(500).send({ error });
  }
};

export default handler;
