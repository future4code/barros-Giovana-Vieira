import { Movie } from "../model/Movie";
import { BaseDatabase } from "./BaseDatabase";

export class MovieDatabase extends BaseDatabase{
    TABLE_NAME = "LABEFLIX_MOVIE"

    createMovie = async (movie: Movie): Promise<void> =>{
        await MovieDatabase.connection(this.TABLE_NAME).insert(movie)
    }
}