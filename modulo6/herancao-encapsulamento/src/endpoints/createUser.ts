import { Request, Response } from "express"
import { UserDatabase } from "../classes/UserDatabase"
import { User } from "../classes/User"
import { BaseDatabase } from "../database/BaseDatabase"

export const createUser = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const email = req.body.email
        const password = req.body.password

        if (!email || !password) {
            throw new Error("Body inválido.")
        }

        // const newUser: User = {
        //     id: Date.now().toString(),
        //     email,
        //     password
        // }

        const user = new User(
            Date.now().toString(),
            email,
            password
        )

        const userDB = new UserDatabase(BaseDatabase.connection)

        userDB.createUser(user)
        
        res.status(201).send({ message: "Usuário criado", user: user })
    } catch (error) {
        res.status(errorCode).send({ message: error.message })
    }
}