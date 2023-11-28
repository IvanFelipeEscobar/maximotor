import jwt from "jsonwebtoken";
import { NextFunction, Request, Response } from "express";
import { User } from "../models/user";

const secret = process.env.JWT_SECRET || `yo!I'maSecret`;
const expiration = "1h";

export const signToken = (user: User) => {
  return jwt.sign(
    {
      _id: user._id,
      email: user.email,
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
  let token = req.headers.authorization?.replace(/^Bearer\s/, '')
  if (!token) {
    return res.status(401).json({ message: "Unauthorized, please sign in" });
  }
  try {
    const data = jwt.verify(token as string, secret);
    req.user = data as {
        _id: string
        email: string
        password: string
    }
  } catch (error) {
    console.error(error);
    return res
      .status(401)
      .json({ message: "Unauthorized, please verify auth" });
  }
  next();
};
