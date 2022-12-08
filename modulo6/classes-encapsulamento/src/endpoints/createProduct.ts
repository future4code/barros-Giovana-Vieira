import { Request, Response } from "express"
import { Product } from "../classes/Product"
import { ProductDatabase } from "../classes/ProductDatabase"
import connection from "../database/connection"
import { TABLE_PRODUCTS } from "../database/tableNames"

export const createProduct = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const name = req.body.name
        const price = req.body.price

        if (!name || !price) {
            throw new Error("Body inválido.")
        }

        let id = Date.now().toString()

        const newProduct = new Product(
            id,
            name,
            price
        )
        
        const productDB = new ProductDatabase(connection)

        productDB.createProduct(newProduct)
         
        res.status(201).send({ message: "Produto criado", product: newProduct })
    } catch (error) {
        res.status(errorCode).send({ message: error.message })
    }
}