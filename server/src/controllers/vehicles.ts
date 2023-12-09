import { Request, Response } from "express";
import { user } from "../models/user";
import { vehicle } from "../models/vehicles";
export const addVehicle = async (req: Request, res: Response) => {
  try {
    const addCar = await vehicle.create(req.body);
    if (!addCar)
      return res
        .status(400)
        .json({ message: "failed to create vehicle, check input" });
    const newVehicle = await user.findOneAndUpdate(
      { email: req.user.email },
      { $addToSet: { cars: addCar } },
      { new: true, runValidators: true }
    );
    if (!newVehicle)
      return res.status(400).json({ message: `Failed to add vehicle to user` });
    res.status(200).json(newVehicle);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: `whoops, Server issue. get it together!` });
  }
};
//edit veh
export const editVehicle = async (req: Request, res: Response) => {
  try {
    const { vehicleId } = req.params;
    const updatedVeh = await vehicle.findOneAndUpdate(
      { _id: vehicleId },
      { $set: req.body },
      { new: true, runValidators: true }
    );
    if (!updatedVeh)
      return res.status(404).json({ message: "vehicle not found" });
    res.status(200).json(updatedVeh);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "server error, unable to process request" });
  }
};

export const deleteVehicle = async (req: Request, res: Response) => {
  try {
    const { vehicleId } = req.params;
    const deletedVehicle = await vehicle.findOneAndRemove({ _id: vehicleId });
    if (!deletedVehicle)
      return res.status(404).json({ message: "vehicle not found" });
    const updateUser = await user.findOneAndUpdate(
      { email: req.user.email },
      { $pull: { cars: vehicleId } },
      { new: true }
    );
    if (!updateUser)
      return res
        .status(400)
        .json({ message: "failed to delete vehicle from user" });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "server error, unable to process request" });
  }
};
