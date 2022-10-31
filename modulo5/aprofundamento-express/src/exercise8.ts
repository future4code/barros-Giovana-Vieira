import { Request, Response } from "express";
import express from 'express'
import cors from 'cors'
import toDos from "./exercise3";
import { ToDo } from "./exercise2";


const app = express()

app.use(express.json())
app.use(cors())

app.get('/toDos/:idUser',(req: Request, res: Response)=>{

    const idUser = Number(req.params.idUser)
    let userToDos;
    let othersToDos;
    
    if(idUser){
        userToDos = toDos.filter((toDo: ToDo)=> toDo.userId === idUser && toDo)
        othersToDos = toDos.filter((toDo: ToDo)=> toDo.userId !== idUser && toDo)
    } else{
        res.status(400).send('É obrigatório informar o id do usuário.')
    }
    const userNotExisting = toDos.find((toDo)=> toDo.userId === idUser)
    
    userNotExisting === undefined && res.status(400).send('Usuário não encontrado.')
    
    let allToDos = {
        userToDos,
        othersToDos
    }    

    res.status(200).send(allToDos)

})

app.listen('3003',()=>{
    console.log('Exercício 8 - Servidor rodando na porta 3003.')
})