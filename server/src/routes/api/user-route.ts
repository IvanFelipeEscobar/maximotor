import express from "express";
import { 
    getUser,
    createUser,
    login,
} from '../../controllers/user'

const router = express.Router()

router.route(`/signup`).post(createUser)  
router.route('/login').post(login)
router.route(`/:userId`).get(getUser)
 
export default router