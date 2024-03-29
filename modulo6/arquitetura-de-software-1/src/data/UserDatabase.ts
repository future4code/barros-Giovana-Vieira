import { BaseDatabase } from "./BaseDatabase"
import { User } from "../class/User"

export class UserDatabase extends BaseDatabase {

    createUser = async (user: User): Promise<void> =>{
        await UserDatabase.connection("User_Arq").insert(user)
    }

    getAllUsers = async () =>{
        return await UserDatabase.connection("User_Arq").select("*")
    }

    deleteUser = async (userId: string) =>{
        await UserDatabase.connection("User_Arq").whereLike("id", userId).del()
    }
}