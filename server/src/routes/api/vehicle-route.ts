import express from "express";
import { authMiddleware } from "../../utils/auth";
import {
    addVehicle
} from '../../controllers/vehicles'


const router = express.Router()

router.route('/').post(authMiddleware, addVehicle)
export default router

