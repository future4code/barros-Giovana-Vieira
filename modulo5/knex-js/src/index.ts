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

    }catch(er: any){
        res.status(statusCode).send(er.message)
    }

})

// Faça uma função que receba um gender retorne a quantidade de itens na tabela Actor com esse gender. Para atrizes, female e para atores male.

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
    
    }catch(er: any){
        res.status(statusCode).send(er.message)
    }

})

app.listen(3003,()=>{
    console.log('Server running in port 3003.')
})

