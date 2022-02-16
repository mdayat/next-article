import { NextApiRequest, NextApiResponse } from "next";

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "GET") {
    return res.status(405).end();
  }

  const cookie = req.cookies.auth;

  cookie ? res.status(200).send("SUCCEED") : res.status(204).end();
};

export default handler;
