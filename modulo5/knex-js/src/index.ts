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

app.patch('/artists/set/:id', async (req: Request, res: Response): Promise<void>=>{

    let id = req.params.id
    let salary = Number(req.body.salary)
    let statusCode = 400

    try{
        const allArtistsArray = await connection("Artists").select('*')

        const artistExisting = allArtistsArray.filter(artist => artist.id === id)

        if(id === ':id'){
            statusCode = 422
            throw new Error("É obrigatório informar o ID.")
        } if(!salary){
            statusCode = 422
            throw new Error("É obrigatório informar o salário.")
        } if(artistExisting.length < 1){
            statusCode = 422
            throw new Error('Este ID de usuário não foi encontrado.')
        } 
        
        await connection("Artists").update('salary', `${salary}`).where('id', `${id}`)

        const updatedArtistsArray = await connection("Artists").select('*')

        const updatedArtist = updatedArtistsArray.filter(artist => artist.id === id)

        res.status(200).send(updatedArtist)

    }catch(err: any){
        res.status(statusCode).send(err.message)
    }

})

app.delete('/artists/delete/:id', async (req: Request, res: Response): Promise<void>=>{

    let id = req.params.id
    let statusCode = 400

    try{
        const allArtistsArray = await connection("Artists").select('*')

        const artistExisting = allArtistsArray.filter(artist => artist.id === id)

        if(id === ':id'){
            statusCode = 422
            throw new Error("É obrigatório informar o ID do artista que você deseja deletar.")            
        } if(artistExisting.length < 1){
            statusCode = 422
            throw new Error('Este ID de usuário não foi encontrado.')
        } 

        await connection("Artists").where("id", `${id}`).del()

        const updatedArtistsArray = await connection("Artists").select('*')

        res.status(200).send(updatedArtistsArray)

    }catch(err: any){
        res.status(statusCode).send(err.message)
    }
})

app.get('/artists/salary_avg', async (req: Request, res: Response)=>{

    let gender = req.query.gender as string
    let salaryAvg;
    let statusCode = 400

    try {

        if(!gender){
            statusCode = 422
            throw new Error("É obrigatório escolher o gênero.")            
        }

        salaryAvg = await connection("Artists").where("gender", gender).avg("salary", {as: 'avg'})

        res.status(200).send(`${salaryAvg[0].avg}`)
        
    }catch(err: any){
        res.status(statusCode).send(err.message)
    }
})

const createArtist = async (id: string, name: string, birthDate: Date, gender: string, favoriteFlavorOfIceCream: string, type: string, salary: number) =>{
    await connection("Artists").insert(
        {
            id, 
            name, 
            birth_date: birthDate, 
            gender, 
            favorite_ice_cream_flavor: favoriteFlavorOfIceCream, 
            type, 
            salary
        }
    )
} 

app.post('/artists/new_artist', async (req: Request, res: Response)=>{
    
    let statusCode = 400

    try {
        await createArtist(
            req.body.id,
            req.body.name,
            req.body.birthDate,
            req.body.gender,
            req.body.favoriteFlavorOfIceCream,
            req.body.type,
            req.body.salary
        )
        
        const allArtists = await connection("Artists").select("*")

        res.status(200).send(allArtists)
        
    }catch(err: any){
        res.status(statusCode).send(err.message)    
    }
})

const createMovie = async (nome: string, sinopse: string, dataDeLancamento: Date, avaliacao: number, playingLimitDate: Date) => {
    await connection("Movies").insert({
        nome,
        sinopse,
        data_de_lançamento: dataDeLancamento,
        avaliação: avaliacao,
        playing_limit_date: playingLimitDate,
      })
}

app.post('/movies', async(req: Request, res: Response): Promise<void> =>{
    
    let statusCode = 400

    try {
        await createMovie(
            req.body.nome, 
            req.body.sinopse,
            req.body.dataDeLancamento,
            req.body.avaliacao,
            req.body.playingLimitDate
        )

        const movies = await connection("Movies").select("*")

        res.status(200).send(movies)
        
    } catch (err: any) {
        res.status(statusCode).send(err.message)
    }
})


app.delete('/movies/delete/:id', async (req: Request, res: Response): Promise<void> =>{
    
    const id = req.params.id
    let statusCode = 400

    try {

        if(id === ":id"){
            statusCode = 422
            throw new Error("É obrigatório informar o ID.")            
        }

        await connection("Movies").where("id", id).del()

        const movies = await connection("Movies").select("*")

        res.status(200).send(movies)     

    } catch (err: any) {
        res.status(statusCode).send(err.message)
    }
    
})

app.get('/movies/all', async (req: Request, res: Response): Promise<void> =>{
    
    let statusCode = 400

    try {
        const movies = await connection("Movies").select("*").limit(15)

        res.status(200).send(movies)
        
    } catch (err: any) {
        res.status(statusCode).send(err.message)
    }
})

app.get('/movies/search', async (req: Request, res: Response): Promise<void>=>{

    const search = req.query.search
    let statusCode = 400

    try {

        const result = await connection("Movies").select("*").whereLike("nome", `%${search}%`).orWhereLike("sinopse", `%${search}%`).orderBy("data_de_lançamento")

        res.status(statusCode).send(result)

    } catch (err: any) {
        res.status(statusCode).send(err.message)
    }
})

app.listen(3003,()=>{
    console.log('Server running in port 3003.')
})



