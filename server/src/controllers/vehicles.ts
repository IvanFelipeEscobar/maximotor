import {Request, Response} from 'express'
import { user } from '../models/user'
import { vehicle } from '../models/vehicles'


module.exports = {
    async addVehicle( req: Request, res: Response){
        try {
            const addCar = await vehicle.create(req.body)
            if(!addCar)return res.status(400).json({message: 'failed to create vehicle, check input'})
            const newVehicle = await user.findOneAndUpdate(
                {email: req.user.email},
                {$addToSet: { cars: addCar}},
                {new: true, runValidators: true}
            )
            if(!newVehicle) return res.status(400).json({message: `Failed to add vehicle to user`})
            res.status(200).json(newVehicle)
        } catch (err) {
            console.error(err)
            res.status(500).json({message: `whoops, Server issue. get it together!`})           
        }
    }
}