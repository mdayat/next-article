import jwt, { Secret, GetPublicKeyOrSecret } from "jsonwebtoken";
import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";

const apiAuthCheck =
  (handler: NextApiHandler) => (req: NextApiRequest, res: NextApiResponse) => {
    const cookie = req.cookies.auth;

    const cookieHeader = req.headers.cookie!;

    jwt.verify(
      cookie || cookieHeader,
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
