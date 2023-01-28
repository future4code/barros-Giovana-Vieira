import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { UserInputCreateDTO } from "../model/UserDTO";

export class UserController {
  async create(req: Request, res: Response): Promise<void> {
    try {
      const input: UserInputCreateDTO = {
        email: req.body.email, 
        name: req.body.name,
        password: req.body.password
      }

      const userBusiness = new UserBusiness();
      await userBusiness.create(input);

      res.status(201).send({ message: "Usuário cadastrado com sucesso" });
    } catch (err: any) {
      res.status(err.statusCode || 400).send(err.message || err.sqlMessage)
    }
  }

  getAllUsers = async (req: Request, res: Response): Promise<void> =>{
    try{

      const userBusiness = new UserBusiness()

      const users = await userBusiness.getAllUsers()

      res.status(200).send(users)
    }catch(err: any){
      res.status(err.statusCode || 400).send(err.message || err.sqlMessage)
    }
  }
}
