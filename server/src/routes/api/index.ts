import express from 'express'
const itemRouter = require(`./itemsRouter`)
const router = express.Router()

router.use(`/items`, itemRouter)

module.exports = router


