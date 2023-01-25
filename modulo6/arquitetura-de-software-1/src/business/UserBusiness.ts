import { User } from "../class/User"
import { UserDatabase } from "../data/UserDatabase"

export class UserBusiness {
    createUser = async (input: any): Promise<void> =>{
        try{
            const userDatabase = new UserDatabase()
    
            if(!input.name){
               throw new Error("Name required.")
            } if(!input.email){
                throw new Error("Email required.")
            } if(!input.password){
                throw new Error("Password required.")
            }
    
            const newUser = {
                id: Date.now().toString(),
                name: input.name,
                email: input.email,
                password: input.password
            }
    
            await userDatabase.createUser(newUser)
        }catch(err: any){
            throw new Error(err.message)            
        }

    }
}