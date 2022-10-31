import { Request, Response } from 'express'
import express from 'express'
import cors from 'cors'

const app = express()

app.use(express.json())
app.use(cors())

app.get('/ping', (req: Request, res: Response)=>{
    res.status(200).send("pong")
})

app.listen('3003', ()=>{
    console.log("Exercício 1 - Servidor rodando na porta 3003.")
})