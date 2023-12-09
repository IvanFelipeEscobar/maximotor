import { Request, Response } from "express";
import { vehicle } from "../models/vehicles";
import { repairs } from "../models/repairs";

export const addRepair = async (req: Request, res: Response) => {
  try {
    const { vehicleId } = req.params;
    if (!vehicleId)
      return res.status(400).json({ message: "no vehicle found" });
    const newRepair = await repairs.create(req.body);
    const addRepairToVehicle = await vehicle.findOneAndUpdate(
      { _id: vehicleId },
      { $push: { repairs: newRepair } },
      { new: true, runValidators: true }
    );
    if(!addRepairToVehicle)return res.status(404).json({message: 'unable to add repair to vehicle'})
    
  } catch (error) {}
};
