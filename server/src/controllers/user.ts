import { user } from "../models/user";
import {Request, Response} from 'express'
import { signToken } from "../utils/auth";

module.exports = {
    
    async getUser(req: Request , res: Response){
        try {
        const activeUser = await user.findOne(
            {
                email: req.params.email
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
        console.log(req.body);
        try {
            const newUser = await user.create(req.body)
            if(!newUser) return res.status(400).json({message: `something went wrong!!! User authentication failed`});

            res.json({
                _id: newUser._id,
                email: newUser.email,
                token: signToken(newUser)
            })
            
        } catch (error) {
            console.error(error)
            return res.status(500).json({ message: 'server error, review user info )' })
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
            if(!loggedUser) return res.json(400).json({message: `something went wrong!!! user not found, review input data`})
            const pWord = await loggedUser.verifyPassword(req.body.password)
            if (!pWord) return res.status(400).json({ message: 'failed to authneticate user, Wrong password!' })
            
            res.status(200).json({
                _id: loggedUser._id,
                email: loggedUser.email,
                token: signToken(loggedUser)
            })

        } catch (error) {
            console.error(error)
            res.status(500).json( { message: `Server error`})
        }
    }

    // async editUser() {},
    // async deleteUser(){}

}