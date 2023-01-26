import { MovieDatabase } from "../data/MovieDatabase"
import { Movie } from "../types/Movie"


export class MovieBusiness{
    createMovie = async (input: any) =>{
        try{
            if(!input.title || !input.description || !input.durationInMinutes || !input.yearOfRelease){
                throw new Error("Missing informations!")                
            }

            const newMovie = new Movie (
                Date.now().toString(),
                input.title,
                input.description,
                Number(input.durationInMinutes),
                Number(input.yearOfRelease)
            )
            
            const movieDatabase = new MovieDatabase()

            await movieDatabase.createMovie(newMovie)

        }catch(err: any){
            throw new Error(err.message)            
        }
    }
}