import { Request, Response } from 'express'
import * as express from 'express'
import * as cors from 'cors'
import users from './exercise3'

const app = express()

app.use(express.json())
app.use(cors())

app.get("/users",(req: Request, res: Response)=>{

    let allUsers = users.map((user)=>{
        return user
    })

    res.status(200).send(allUsers)
})

app.listen('3003',()=>{
    console.log("Servidor rodando na porta 3003.")
})