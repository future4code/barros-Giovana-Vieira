import { Request, Response } from "express"
import { MovieBusiness } from "../business/MovieBusiness"

export class MovieController {

    createMovie = async (req: Request, res: Response) =>{

        try{
            const input = {
                title: req.body.title,
                description: req.body.title,
                durationInMinutes: req.body.durationInMinutes,
                yearOfRelease: req.body.yearOfRelease
            }
    
            const movieBussiness = new MovieBusiness()
            await movieBussiness.createMovie(input)
    
            res.status(201).send({message: "Movie created."})
        }catch(err: any){
            res.status(400).send(err.message)
        }
    }
}