import express from "express";
const {
    addVehicle
} = require('../../controllers/vehicles')

const router = express.Router()

router.route('/:userId/:vehicle').post(addVehicle)

module.exports = router

