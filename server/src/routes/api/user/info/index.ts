import express from "express";
import {
    addUserInfo,
    editUserInfo
} from '../../../../controllers/user-info'
import { authMiddleware } from "../../../../utils/auth";
// /api/users/user-info...
const router = express.Router()
router.route('/').post(authMiddleware, addUserInfo)
router.route('/userInfoId').put(editUserInfo)
export default router