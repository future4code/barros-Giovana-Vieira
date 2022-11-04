import { Request, Response } from 'express'
import * as express from 'express'
import * as cors from 'cors'
import posts from './exercise6'

const app = express()

app.use(express.json())
app.use(cors())

app.delete('/delete/post', (req: Request, res: Response)=>{

    const postId = Number(req.query.idPost)
    const postNotExisting = posts.find((post)=> post.id === postId)
    const deletePost = posts.filter((post)=> post.id !== postId)
    const postDeleted = deletePost.find((post)=> post.id === postId)

    !postId && res.status(400).send("É obrigatório informar o id de um post para deletá-lo.")

    postNotExisting === undefined && res.status(400).send("Post não encontrado.")

    postDeleted === undefined && res.status(200).send("Post deletado com sucesso.")   
    
})

app.listen('3003',()=>{
    console.log('Exercício 9 - Servidor rodando na porta 3003.')
})