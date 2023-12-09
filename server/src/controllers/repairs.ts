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
    if (!addRepairToVehicle)
      return res
        .status(404)
        .json({ message: "unable to add repair to vehicle" });
    res.status(200).json(addRepairToVehicle);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "server error - :(" });
  }
};
export const editRepair = async (req: Request, res: Response) => {
  try {
    const { repairId } = req.params;
    const alteredRepair = await repairs.findOneAndUpdate(
      { _id: repairId },
      { $set: req.body },
      { new: true, runValidators: true }
    );
    if (!alteredRepair)
      return res
        .status(404)
        .json({ message: "can not edit repair check input" });
    res.status(200).json(alteredRepair);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "server error - >:|" });
  }
};

export const deleteRepair = async (req: Request, res: Response) => {
  try {
    const { vehicleId, repairId } = req.params;
    const removedRepair = await repairs.findOneAndDelete({ _id: repairId });
    if (!removedRepair)
      return res.status(404).json({ message: "can't find that repair" });
    const removeRepairFromVeh = await vehicle.findOneAndUpdate(
        {_id: vehicleId},
        {$pull: {repairs: repairId}},
        {new: true}
        );
    if(!removeRepairFromVeh)return res.status(404).json({message: 'vehicle not found - '})
    res.status(200)
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "server error - :/" });
  }
};
