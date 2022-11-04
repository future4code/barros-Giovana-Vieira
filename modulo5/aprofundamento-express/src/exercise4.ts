import { Request, Response } from 'express'
import express from 'express'
import cors from 'cors'
import toDos from './exercise3'

const app = express()

app.use(express.json())
app.use(cors())

app.get('/toDos/complete',(req: Request, res: Response)=>{

    const complete = toDos.filter((toDo) => toDo.completed === true)

    res.status(200).send(complete)
})

app.listen('3003', ()=>{
    console.log('Exercício 4 - Servidor rodando na porta 3003.')
})