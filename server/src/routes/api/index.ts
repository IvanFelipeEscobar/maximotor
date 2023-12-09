
import express from 'express';
import userRoute from './user-route';
import vehRoute from './vehicle-route';
const router = express.Router()

router.use(`/users`, userRoute)
router.use('/vehicle', vehRoute)

export default router


