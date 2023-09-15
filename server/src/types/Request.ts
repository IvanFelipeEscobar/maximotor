declare namespace Express {
    export interface Request {
        user: {
            _id: string
            username: string
            phone: string
            email: string
            password: string
            address: string
            isAdmin: boolean
        }
    }
}