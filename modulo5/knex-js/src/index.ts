import {Request, Response} from 'express'
import express from 'express'
import cors from 'cors'
import { connection } from './dataBase/connection'

const app = express()

app.use(express.json())
app.use(cors())

app.get('/artists', async (req: Request, res: Response): Promise<void> =>{

    let artistName = req.query.artist as string
    let result;
    let statusCode = 400

    try{

        /* if(!artistName){
            result = await connection.raw(`
            SELECT * FROM Artists;
            `)
        } else {
            result = await connection.raw(`
            SELECT * FROM Artists WHERE name = '${artistName}';
            `)
        } */

        if(artistName){
            result = await connection("Artists").select('*')
            .where('name', 'like', `${artistName}`)
        } else {
            result = await connection("Artists").select('*')
        }

        if(result.length < 1){
            statusCode = 422
            throw new Error("Artista não encontrado.")                
        }
  
        res.status(200).send(result)

    }catch(err: any){
        res.status(statusCode).send(err.message)
    }

})

app.get('/artists/gender', async (req: Request, res: Response): Promise<void>=>{
    
    let gender = req.query.gender as string
    let result;
    let statusCode = 400

    try{

        result = await connection('Artists').count('gender', {as: `count`}).where('gender', gender)

        /* const result = await connection.raw(`
            SELECT COUNT(*) as count FROM Artists WHERE gender = "${gender}"
        `);

        const count = result[0][0].count */

        // let count = result[0].count

        res.status(200).send(`${result[0].count}`)
    
    }catch(err: any){
        res.status(statusCode).send(err.message)
    }

})

// Uma função que receba um salário e um id e realiza a atualização do salário do ator em questão

app.patch('/artists/set/:id', async (req: Request, res: Response): Promise<void>=>{

    let id = req.params.id
    let salary = Number(req.body.salary)
    let allArtists;
    let statusCode = 400

    try{
        allArtists = await connection("Artists").select('*')

        const artistExisting = allArtists.filter(artist => artist.id === id)

        if(!salary){
            statusCode = 422
            throw new Error("É obrigatório informar o salário.")
        } if(artistExisting.length < 1){
            statusCode = 422
            throw new Error('Este ID de usuário não foi encontrado.')
        }
        
        await connection("Artists").where('id', `${id}`).update('salary', `${salary}`)

        const updateArtist = allArtists.find(artist => artist.id === id)

        res.status(200).send(updateArtist)

    }catch(err: any){
        res.status(statusCode).send(err.message)
    }

})


app.listen(3003,()=>{
    console.log('Server running in port 3003.')
})

