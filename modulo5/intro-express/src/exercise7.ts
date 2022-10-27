import { Request, Response } from 'express'
import * as express from 'express'
import * as cors from 'cors'
import posts from './exercise6'

const app = express()

app.use(express.json())
app.use(cors())

app.get("/posts", (req: Request, res: Response)=>{

    let allPosts = posts.map((post)=>{
        return post
    })

    res.status(200).send(allPosts)
})

app.listen('3003',()=>{
    console.log("Servidor rodando na porta 3003.")
})