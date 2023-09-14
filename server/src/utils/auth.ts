import jwt from "jsonwebtoken";
import {NextFunction, Request, Response} from 'express'

const secret = `yo!I'maSecret`
const expiration = '1h'

module.exports = {
    authMiddleware: (req: Request, res: Response, next: NextFunction) => {
        let token = req.query.token || req.headers.authorization;

        if (req.headers.authorization) {
            token = (token as string).split(' ').pop()?.trim()
        }
        if (!token) {
            return res.status(401).json({ message: 'Unauthorized, please sign in' })
        }
        try {
            const data = jwt.verify((token as string), secret, {maxAge: expiration})
            req.user = data
            next()
        } catch (error) {
            
        }
    }
}