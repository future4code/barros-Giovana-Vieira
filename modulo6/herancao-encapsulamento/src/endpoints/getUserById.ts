import { Request, Response } from "express"
import { UserDatabase } from "../classes/UserDatabase"
import { BaseDatabase } from "../database/BaseDatabase"

export const getUserById = async (req: Request, res: Response) =>{

    let errorCode = 400
    let id = req.params.id

    try {
        const userDB = new UserDatabase(BaseDatabase.connection)
        
        const user = await userDB.getUserById(id)

        res.status(200).send(user)
    } catch (err: any) {
        res.status(errorCode).send(err.message)
    }
}