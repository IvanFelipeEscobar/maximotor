import express from "express";
import {
    addRepair,
    editRepair,
    deleteRepair
} from '../../../../../controllers/repairs'
 const router = express.Router()
// --------> /api/users/vehicles/repairs
router.route('/:vehicleId').post(addRepair)
router.route('/:vehicleId/:repairId').put(editRepair).delete(deleteRepair)
 export default router

