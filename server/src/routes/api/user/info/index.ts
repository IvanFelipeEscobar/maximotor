import express from "express";
import {
    addUserInfo,
    editUserInfo
} from '../../../../controllers/user-info'
import { authMiddleware } from "../../../../utils/auth";
// /api/
const router = express.Router()
router.route('/').post(authMiddleware, addUserInfo)
export default router