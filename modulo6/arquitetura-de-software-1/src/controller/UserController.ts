import { Request, Response } from "express"
import { UserBusiness } from "../business/UserBusiness"

export class UserController {
    createUser = async (req: Request, res: Response) =>{
        try{
            const input = {
                name: req.body.name,
                email: req.body.email,
                password: req.body.password
            }

            const userBusiness = new UserBusiness()

            await userBusiness.createUser(input)

            res.status(201).send({message: "User created."})
        }catch(err: any){
            res.status(400).send(err.message)
        }
    }

    getAllUsers = async (req: Request, res: Response) =>{
        try{
            
            const userBusiness = new UserBusiness()

            const allUsers = await userBusiness.getAllUsers()

            res.status(201).send(allUsers)
        }catch(err: any){
            res.status(400).send(err.message)
        }
    }

    deleteUser = async (req: Request, res: Response) =>{
        try{

            const userId = req.params.userId as string
            
            const userBusiness = new UserBusiness()

            await userBusiness.deleteUser(userId)

            res.status(201).send({message: "User deleted."})
        }catch(err: any){
            res.status(400).send(err.message)
        }
    }
}