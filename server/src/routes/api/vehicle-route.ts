import express from "express";
import { authMiddleware } from "../../utils/auth";
const {
    addVehicle
} = require('../../controllers/vehicles')


const router = express.Router()

router.route('/').post(authMiddleware, addVehicle)

module.exports = router

