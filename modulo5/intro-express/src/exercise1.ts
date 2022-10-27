import { Request, Response } from 'express'
import * as express from 'express'
import * as cors from 'cors'

const app = express()

app.use(express.json())
app.use(cors())

app.get("/",(req: Request, res: Response)=>{
    res.status(200).send("Deu certo.")
})

app.listen('3003',()=>{
    console.log("Servidor rodando na porta 3003.")
})

