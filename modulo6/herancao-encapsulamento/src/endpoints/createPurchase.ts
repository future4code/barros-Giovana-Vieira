import { Request, Response } from "express"
import { Product } from "../classes/Product"
import { PurchaseDB } from "../classes/PurchaseDB"
import { BaseDatabase } from "../database/BaseDatabase"
import { TABLE_USERS, TABLE_PRODUCTS, TABLE_PURCHASES } from "../database/tableNames"
import { PurchaseDatabase } from "../classes/PurchaseDatabase"

export const createPurchase = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const userId = req.body.userId
        const productId = req.body.productId
        const quantity = req.body.quantity

        if (!userId || !productId || !quantity) {
            throw new Error("Body inválido.")
        }

        const findUser = await BaseDatabase.connection(TABLE_USERS)
        .select()
        .where({ id: userId })

        console.log(findUser)        

        if (findUser.length === 0) {
            errorCode = 404
            throw new Error("Usuário não encontrado.")
        }

        const findProduct = await BaseDatabase.connection(TABLE_PRODUCTS)
        .select()
        .where({ id: productId })

        if (findProduct.length === 0) {
            errorCode = 404
            throw new Error("Produto não encontrado.")
        }
        
        // const product: Product = {
        //     id: findProduct[0].id,
        //     name: findProduct[0].name,
        //     price: findProduct[0].price
        // }

        const product = new Product(
            findProduct[0].id,
            findProduct[0].name,
            findProduct[0].price
        )

        // const newPurchase: Purchase = {
        //     id: Date.now().toString(),
        //     userId,
        //     productId,
        //     quantity,
        //     totalPrice: product.getPrice() * quantity
        // }

        const purchase = new PurchaseDB(
            Date.now().toString(),
            userId,
            productId,
            quantity,
            product.getPrice() * quantity
        )

        const purchaseDB = new PurchaseDatabase(BaseDatabase.connection)

        purchaseDB.createPurchase(purchase)

        res.status(201).send({ message: "Compra registrada", purchase: purchase })
    } catch (error) {
        res.status(errorCode).send({ message: error.message })
    }
}