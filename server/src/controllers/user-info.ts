import { user } from "../models/user";
import { userInfo } from "../models/user-info";
import { Request, Response } from "express";

export const addUserInfo = async (req: Request, res: Response) => {
  try {
    const newInfo = await userInfo.create(req.body);
    if (!newInfo)
      return res
        .status(400)
        .json({ message: "user info missing, check required fields" });
    const addInfo = await user.findOneAndUpdate(
      { email: req.user.email },
      { $set: { userInformation: newInfo } },
      { new: true, runValidators: true }
    );
    if(!addInfo)return res.status(404).json({message: 'unable to add info to user, check if user exists or something, idk'})
    res.status(200).json(addInfo) // make sure you need to send this data here!!!
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: `whoops, Server issue. get it together!` });
  }
};
export const editUserInfo = async (req: Request, res: Response) => {
   try {
      const userId = req.user._id
      const editedInfo = await userInfo.findOneAndUpdate(
         {_id: userId},
         {$set: req.body},
         {new: true, runValidators: true}
      )
      if(!editedInfo)return res.status(400).json({message: 'cant edit info, chenck input'})
      res.status(200).json(editedInfo)   // make sure you need to send this data here!!!
   } catch (error) {
      console.error(error);
      res.status(500).json({ message: `whoops, Server issue. get it together!` });
   }
}
