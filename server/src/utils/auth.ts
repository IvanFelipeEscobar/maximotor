import jwt from "jsonwebtoken";
import { NextFunction, Request, Response } from "express";
import { User } from "../models/user";

const secret = process.env.JWT_SECRET || `yo!I'maSecret`;
const expiration = "1h";

export const signToken = (user: User) => {
  return jwt.sign(
    {
      _id: user._id,
      username: user.username,
      email: user.email,
      // isAdmin: user.isAdmin,
    },
    secret,
    {
      expiresIn: expiration,
    }
  );
};

export const authMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let token = req.query.token || req.headers.authorization;

  if (req.headers.authorization) {
    token = (token as string).split(" ").pop()?.trim();
  }
  if (!token) {
    return res.status(401).json({ message: "Unauthorized, please sign in" });
  }
  try {
    const data = jwt.verify(token as string, secret, { maxAge: expiration });
    req.user = data as {
        _id: string
        username: string
        phone: string
        email: string
        password: string
        address: string
        isAdmin: boolean
    }
  } catch (error) {
    console.error(error);
    return res
      .status(401)
      .json({ message: "Unauthorized, please verify auth" });
  }
  next();
};
