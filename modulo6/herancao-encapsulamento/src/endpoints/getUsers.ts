import { Request, Response } from "express"
import { UserDatabase } from "../classes/UserDatabase"
import { BaseDatabase } from "../database/BaseDatabase"


export const getUsers = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const userDB = new UserDatabase(BaseDatabase.connection)
        const result = await userDB.getUsers()
        res.status(200).send({ users: result })
    } catch (error) {
        res.status(errorCode).send({ message: error.message })
    }
}