import { user } from "../models/user";
import {Request, Response} from 'express'
import { signToken } from "../utils/auth";

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
    async createUser(req: Request, res: Response){
        try {
            const newUser = await user.create(req.body)
            if(!newUser) return res.json(400).json({message: `something went wrong!!!`});
            const token = signToken(newUser)
            res.json({token, newUser})
            
        } catch (error) {
            console.error(error)
            return res.status(500).json({ message: 'server error, review uesr info )' })
        }

    },
    async login(req: Request, res: Response) {
        try {
            const loggedUser = await user.findOne({
                $or: [
                    {username: req.body.username},
                    {email: req.body.email}
                ]
            })
            if(!loggedUser) return res.json(400).json({message: `something went wrong!!!`})
            //verify password LOGIC!?!?!??!?!??!?!?!?!!??!?!!?
        } catch (error) {
            
        }
    }

    // async editUser() { 

    // },
    // async deleteUser(){

    // }
}