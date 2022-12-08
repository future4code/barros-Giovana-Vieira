import { Knex } from "knex";
import { Product } from "./Product";

export class ProductDatabase{
    constructor(private connection: Knex){
        this.connection = connection        
    }

    public createProduct = async (newProduct: Product) =>{
        await this.connection("Labe_Products").insert(newProduct)
    }

    public getProducts = async () =>{
        const result = await this.connection("Labe_Products").select("*")
        return result
    }
}