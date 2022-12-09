import { BaseDatabase } from "../database/BaseDatabase";
import { Knex } from "knex";
import { User } from "./User";

export class UserDatabase extends BaseDatabase{
    constructor (protected connection: Knex){
        super(connection)
    }

    public createUser = async (newUser: User) =>{
        await this.connection("Labe_Users").insert(newUser)
    }

    public getUsers = async () =>{
        const result = await this.connection("Labe_Users").select("*")
        return result
    }

    public getUserById = async (id: string) =>{
        const user = await this.connection("Labe_Users").select("*").where({id})
        return user        
    }
}