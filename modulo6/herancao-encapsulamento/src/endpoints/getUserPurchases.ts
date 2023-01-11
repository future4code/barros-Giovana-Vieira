import { Request, Response } from "express"
import { PurchaseDatabase } from "../classes/PurchaseDatabase"
import { BaseDatabase } from "../database/BaseDatabase"

export const getUserPurchases = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const id = req.params.id

        const purchaseDB = new PurchaseDatabase(BaseDatabase.connection)

        const result = await purchaseDB.getUserPurchases(id)

        res.status(200).send({ purchases: result })
    } catch (error) {
        res.status(errorCode).send({ message: error.message })
    }
}