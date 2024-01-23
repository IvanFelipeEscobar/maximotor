
import express from 'express';
import userRoute from './user';
const router = express.Router()

router.use(`/users`, userRoute) // -----> /api/users

export default router


