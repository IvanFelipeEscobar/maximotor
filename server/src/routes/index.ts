import express
//  {Request, Response}
  from 'express'
import apiRoutes from './api'
const router = express.Router()

router.use(`/api`, apiRoutes) // ---- this is /api...
// router.use((req: Request, res: Response) => res.json(`Whoops, that's the wrong route`))
export default router