import { Knex } from "knex";
import { PurchaseDB } from "./PurchaseDB";
import { TABLE_PRODUCTS, TABLE_USERS, TABLE_PURCHASES } from "../database/tableNames";

export class PurchaseDatabase{
    constructor(private connection: Knex){
        this.connection = connection
    }

    public createPurchase = async (newPurchase: PurchaseDB) => {
        await this.connection("Labe_Purchases").insert(newPurchase)
    }

    public getUserPurchases = async (id: string) => {
        const [result] = await this.connection.raw(`
        SELECT
            ${TABLE_USERS}.email,
            ${TABLE_PRODUCTS}.name AS product_name,
            ${TABLE_PRODUCTS}.price AS product_price,
            ${TABLE_PURCHASES}.quantity AS product_quantity,
            ${TABLE_PURCHASES}.total_price
        FROM ${TABLE_PURCHASES}
        JOIN ${TABLE_USERS}
        ON ${TABLE_PURCHASES}.user_id = ${TABLE_USERS}.id
        JOIN ${TABLE_PRODUCTS}
        ON ${TABLE_PURCHASES}.product_id = ${TABLE_PRODUCTS}.id
        WHERE ${TABLE_PURCHASES}.user_id = ${id};
        `)

        return result
    }
}