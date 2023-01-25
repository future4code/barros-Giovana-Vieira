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

    getAllUsers = async () =>{
        try{
            const userDatabase = new UserDatabase()
    
            return await userDatabase.getAllUsers()
        }catch(err: any){
            throw new Error(err.message)            
        }

    }

    deleteUser = async (userId: string) =>{
        try{
            if(!userId){
                throw new Error("User id required.")                
            }

            const userDatabase = new UserDatabase()
    
            await userDatabase.deleteUser(userId)
        }catch(err: any){
            throw new Error(err.message)            
        }

    }
}