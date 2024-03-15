import express from "express";
import { authMiddleware } from "../../../../utils/auth";
import repairRoute from './repairs'
import {
    addVehicle,
    editVehicle,
    deleteVehicle,
    getVehicle
} from '../../../../controllers/vehicles'


const router = express.Router()

router.use('/repairs', repairRoute)
// ------> /api/users/vehicles...
router.route('/').post(authMiddleware, addVehicle)
router.route('/:vehicleId').get(authMiddleware, getVehicle).put(authMiddleware, editVehicle).delete(authMiddleware, deleteVehicle)
export default router

 