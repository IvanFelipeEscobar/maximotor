import { user } from "../models/user";
import {Request, Response} from 'express'

module.exports = {
    async getUser(req: Request , res: Response){
        try {
        const activeUser = await user.findOne(
            {
                username: req.params.username
            }
        )
        return !activeUser 
                ? res.status(400).json({ message: 'Cannot find a user with this username' })
                : res.status(200).json(activeUser)
            
        } catch(error) {
            console.error(error)
            return res.status(500).json({ message: 'server error, skill issue likely ;)' });
        }
    },
    async createUser(){

    },
    async editUser() { 

    },
    async deleteUser(){

    }
}