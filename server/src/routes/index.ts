import express, {Request, Response} from 'express'
const apiRoutes = require(`./api`)
const router = express.Router()

router.use(`/api`, apiRoutes)
router.use((req: Request, res: Response) => res.send(`Whoops, that's the wrong route`))
module.exports = router