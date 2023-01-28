import { MovieDatabase } from "../data/MovieDatabase"
import { CustomError } from "../error/CustomError"
import { MissingInfos } from "../error/UserErrors"
import { Movie } from "../model/Movie"
import { generateId } from "../services/generateId"


export class MovieBusiness{
    createMovie = async (input: any) =>{
        try{
            if(!input.title || !input.description || !input.durationInMinutes || !input.yearOfRelease){
                throw new MissingInfos()            
            }

            const newMovie = new Movie (
                generateId(),
                input.title,
                input.description,
                Number(input.durationInMinutes),
                Number(input.yearOfRelease)
            )
            
            const movieDatabase = new MovieDatabase()

            await movieDatabase.createMovie(newMovie)

        }catch(err: any){
            throw new CustomError(err.statusCode, err.message)    
        }
    }
}