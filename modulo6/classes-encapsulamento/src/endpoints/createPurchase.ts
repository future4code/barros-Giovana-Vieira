import { Request, Response } from "express"
import { Product } from "../classes/Product"
import { PurchaseDatabase } from "../classes/PurchaseDatabase"
import { PurchaseDB } from "../classes/PurchaseDB"
import connection from "../database/connection"
import { TABLE_PRODUCTS, TABLE_PURCHASES, TABLE_USERS } from "../database/tableNames"

export const createPurchase = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const userId = req.body.userId
        const productId = req.body.productId
        const quantity = req.body.quantity

        if (!userId || !productId || !quantity) {
            throw new Error("Body inválido.")
        }

        const findUser = await connection(TABLE_USERS)
        .select()
        .where({ id: userId })

        if (findUser.length === 0) {
            errorCode = 404
            throw new Error("Usuário não encontrado.")
        }

        const findProduct = await connection(TABLE_PRODUCTS)
        .select()
        .where({ id: productId })

        if (findProduct.length === 0) {
            errorCode = 404
            throw new Error("Produto não encontrado.")
        }
        
        const product = new Product(
            findProduct[0].id,
            findProduct[0].name,
            findProduct[0].price
        )

        const id = Date.now().toString()
        const totalPrice = Number(product.getPrice()) * Number(quantity)

        const newPurchase = new PurchaseDB(
            id, 
            userId, 
            productId,
            quantity, 
            totalPrice
        )

        const purchaseDB = new PurchaseDatabase(connection)

        purchaseDB.createPurchase(newPurchase)

        res.status(201).send({ message: "Compra registrada", purchase: newPurchase })
    } catch (error) {
        res.status(errorCode).send({ message: error.message })
    }
}