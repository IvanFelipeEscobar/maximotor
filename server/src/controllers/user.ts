import { User, user } from "../models/user";
import { Request, Response } from "express";
import { signToken } from "../utils/auth";

export const getUser = async (req: Request, res: Response) => {
  try {
    const activeUser = await user.findOne({
      _id: req.user._id
    });
    return !activeUser
      ? res
          .status(400)
          .json({ message: "Cannot find a user with this username" })
      : res.status(200).json(activeUser);
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ message: "server error, skill issue likely ;)" });
  }
};

export const createUser = async (req: Request, res: Response) => {
  const existingUser = await user.findOne({email: req.body.email})
  if(existingUser) {
    return res.status(400).json({message: 'email is already in use'})
  }
  try {
    const newUser = await user.create(req.body);
    if (!newUser)
      return res
        .status(400)
        .json({
          message: `something went wrong!!! User authentication failed`,
        });

    res.json({
      _id: newUser._id,
      email: newUser.email,
      token: signToken(newUser),
    });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ message: "server error, review user info )" });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const loggedUser = await user.findOne({ email: req.body.email });
    if (!loggedUser)
      return res
        .status(400)
        .json({
          message: `sorry, user not found`,
        });
    const pWord = await loggedUser.verifyPassword(req.body.password);
    if (!pWord)
      return res
        .status(400)
        .json({ message: "incorrect password!" });

    res.status(200).json({
      _id: loggedUser._id,
      email: loggedUser.email,
      token: signToken(loggedUser),
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: `Server error` });
  }

  // async editUser() {},
  // async deleteUser(){}
};
