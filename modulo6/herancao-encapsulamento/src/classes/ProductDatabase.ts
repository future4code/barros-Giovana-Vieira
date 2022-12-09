import { Knex } from "knex";
import { BaseDatabase } from "../database/BaseDatabase";
import { Product } from "./Product";

export class ProductDatabase extends BaseDatabase{
    constructor(protected connection: Knex){
        super(connection)   
    }

    public createProduct = async (newProduct: Product) =>{
        await this.connection("Labe_Products").insert(newProduct)
    }

    public getProducts = async () =>{
        const result = await this.connection("Labe_Products").select("*")
        return result
    }
}