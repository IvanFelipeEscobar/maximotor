import express from "express";
const { getShopItems } = require(`../../controllers/shopItems`)
const router = express.Router()
router.route(`/`).get(getShopItems)
module.exports = router