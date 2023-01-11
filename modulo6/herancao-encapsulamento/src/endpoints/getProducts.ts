import { Request, Response } from "express"
import { ProductDatabase } from "../classes/ProductDatabase"
import { BaseDatabase } from "../database/BaseDatabase"
import { TABLE_PRODUCTS } from "../database/tableNames"

export const getProducts = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const productDB = new ProductDatabase(BaseDatabase.connection)
        const result = await productDB.getProducts()
        res.status(200).send({ products: result })
    } catch (error) {
        res.status(errorCode).send({ message: error.message })
    }
}