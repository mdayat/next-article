import { NextApiRequest, NextApiResponse } from "next";

import { apiAuthCheck } from "app/utils";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "GET") {
    res.status(405).end();
  }

  res.status(200).json({ msg: "THIS IS YOUR DATA" });
};

export default apiAuthCheck(handler);
