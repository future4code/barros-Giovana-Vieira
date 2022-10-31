import { Request, Response } from "express";
import express from 'express'
import cors from 'cors'
import toDos from './exercise3'
import { ToDo } from "./exercise2";

const app = express()

app.use(express.json())
app.use(cors())

app.post('/create/toDos', (req: Request, res: Response) =>{

    const {userId, id, title, completed} = req.body
    const sameId = toDos.find((toDo)=> toDo.id === id)
    const sameUserId = toDos.find((toDo) => toDo.userId === userId)

    const newToDo: ToDo = {
        userId,
        id,
        title,
        completed
    }

    if((userId && id && title && completed) && (sameId === undefined) && (sameUserId !== undefined)){
        toDos.push(newToDo)
    } else if(!userId || !id || !title || !completed){
        res.status(400).send("É necessário informar todos os dados: userId, id, title e completed.")
    } else if(sameId !== undefined && sameUserId === undefined){
        res.status(400).send("Este id de afazer já existe e este usuário não existe.")
    } else if(sameId !== undefined){
        res.status(400).send("Este id de afazer já existe.")
    } else if(sameUserId === undefined){
        res.status(400).send("Este usuário não existe.")
    } 
    
    res.status(200).send(toDos)
})

app.listen('3003',()=>{
    console.log('Exercício 5 - Servidor rodando na porta 3003.')
})