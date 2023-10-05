import {Request, Response} from 'express'
import { user } from '../models/user'


module.exports = {
    async addVehicle( req: Request, res: Response){
        try {
            const newVehicle = await user.findOneAndUpdate(
                {_id: req.user._id},
                {$addToSet: { cars: req.body}},
                {new: true, runValidators: true}
            )
            if(!newVehicle) return res.status(401).json({message: `Failed to add vehicle, check vehicle input`})
            res.status(200).json(newVehicle)
        } catch (err) {
            console.error(err)
            res.status(500).json({message: `whoops, Server issue. get it together!`})           
        }
    }
}