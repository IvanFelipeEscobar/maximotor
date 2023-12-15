import express from "express";
import { 
    getUser,
    createUser,
    login,
} from '../../../controllers/user'
import vehicleRoute from './vehicles'
import userInfoRoute from './info'
const router = express.Router()

router.use(`/vehicles`, vehicleRoute)
router.use('/user-info', userInfoRoute)
// -------> /api/users...
router.route(`/signup`).post(createUser)  
router.route('/login').post(login)
router.route(`/:userId`).get(getUser)

export default router

