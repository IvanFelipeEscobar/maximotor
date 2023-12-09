import express from "express";
import { authMiddleware } from "../../../../utils/auth";
import repairRoute from './repairs'
import {
    addVehicle
} from '../../../../controllers/vehicles'


const router = express.Router()

router.use('/repairs', repairRoute)
// ------> /api/users/vehicles...
router.route('/').post(authMiddleware, addVehicle)
export default router

