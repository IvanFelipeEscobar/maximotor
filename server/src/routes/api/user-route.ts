import express from "express";
const { 
    getUser,
    createUser,
    login,
} = require(`../../controllers/user`)

const router = express.Router()

router.route(`/signup`).post(createUser)  
router.route('/login').post(login)
router.route(`/:userId`).get(getUser)
 
module.exports = router