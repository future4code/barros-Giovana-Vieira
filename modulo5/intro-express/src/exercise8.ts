import { Request, Response } from 'express'
import * as express from 'express'
import * as cors from 'cors'
import posts from './exercise6'

const app = express()

app.use(express.json())
app.use(cors())

app.get('/user/:id/posts', (req: Request, res: Response)=>{

    const userId = Number(req.params.id)

    !userId && res.status(400).send("É obrigatório informar o id do usuário.")
    
    let userPosts = posts.filter((post) => post.userId === userId && post)

    res.status(200).send(userPosts)

})


app.listen('3003', ()=>{
    console.log('Servidor está rodando na porta 3003.')
})