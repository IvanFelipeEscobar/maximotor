import {Request, Response} from 'express'
import { shopItems } from '../models/shopItems'
import { Items } from '../types/Items'

module.exports = {
    async getShopItems(req: Request, res: Response){
        const allItems = await shopItems.find()
        res.json(allItems)
    },
    async addShopItem(req: Request, res: Response){
        const newItem = await shopItems.create( req.body )
        !newItem
            ? res.status(404).json({message: `no item to add :( `})
            : res.json(newItem)
    }
}