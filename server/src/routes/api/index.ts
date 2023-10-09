import express from 'express'
const userRoute = require(`./user-route`)
const vehRoute = require('./vehicle-route')
const router = express.Router()

router.use(`/users`, userRoute)
router.use('/vehicle', vehRoute)

module.exports = router


