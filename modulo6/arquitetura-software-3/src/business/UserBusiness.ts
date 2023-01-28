import { UserDatabase } from "../data/UserDatabase"
import { UserInputCreateDTO } from "../model/UserDTO"
import { User } from "../model/User"
import { generateId } from "../services/generateId"
import { MissingInfos } from "../error/UserErrors"
import { CustomError } from "../error/CustomError"

export class UserBusiness {
  async create(input: UserInputCreateDTO): Promise<void> {
    if (!input.email || !input.name || !input.password) {
      throw new MissingInfos()
    }

    const id = generateId()

    const userDatabase = new UserDatabase()

    const newUser = new User (
      id, 
      input.name,
      input.email,
      input.password
    )

    await userDatabase.create(newUser)
  }

  getAllUsers = async (): Promise<User[]> =>{
    try{
      const userDatabase = new UserDatabase()

      return await userDatabase.getAllUsers()
    }catch(err: any){
      throw new CustomError(err.statusCode, err.message)
    }
  }

}
