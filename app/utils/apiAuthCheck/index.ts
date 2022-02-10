import jwt, { Secret, GetPublicKeyOrSecret } from "jsonwebtoken";
import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";

const apiAuthCheck =
  (handler: NextApiHandler) => (req: NextApiRequest, res: NextApiResponse) => {
    const cookie = req.cookies.auth;

    jwt.verify(
      cookie,
      process.env.JWT_SECRET as Secret | GetPublicKeyOrSecret,
      async (err, decoded) => {
        if (!err && decoded) {
          return await handler(req, res);
        }

        return res.status(401).json({ message: "You are not authenticated!" });
      }
    );
  };

export { apiAuthCheck };
