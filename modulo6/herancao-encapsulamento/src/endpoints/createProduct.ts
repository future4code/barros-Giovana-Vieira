import { Request, Response } from "express"
import { Product } from "../classes/Product"
import { ProductDatabase } from "../classes/ProductDatabase"
import { BaseDatabase } from "../database/BaseDatabase"

export const createProduct = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const name = req.body.name
        const price = req.body.price

        if (!name || !price) {
            throw new Error("Body inválido.")
        }

        // const newProduct: Product = {
        //     id: Date.now().toString(),
        //     name,
        //     price
        // }

        const product = new Product(
            Date.now().toString(),
            name,
            price
        )

        const productDB = new ProductDatabase(BaseDatabase.connection)

        productDB.createProduct(product)
        
        res.status(201).send({ message: "Produto criado", product: product })
    } catch (error) {
        res.status(errorCode).send({ message: error.message })
    }
}