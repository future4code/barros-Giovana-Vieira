import { Request, Response } from "express";
import express from 'express'
import cors from 'cors'
import toDos from "./exercise3";
import { ToDo } from "./exercise2";

const app = express()

app.use(express.json())
app.use(cors())

app.delete('/delete/:idToDo', (req: Request, res: Response)=>{

    const toDoId = Number(req.params.idToDo)
    let itenToDo;    
    let toDoNotExisting = toDos.find((toDo)=> toDo.id === toDoId)    
    
    for(let toDo of toDos){
        if(toDo.id === toDoId){
            itenToDo = toDo
        } 
    }    
    
    let deleteToDo: ToDo[] = toDos.filter((toDo)=>{
        return toDo.id !== toDoId
    })    
    
    !toDoId && res.status(400).send('É obrigatório informar o id do afazer.')

    toDoNotExisting === undefined && res.status(400).send('O afazer não foi encontrado.')

    const toDoDeleted = deleteToDo.find((toDo)=> toDo.id === toDoId)

    toDoDeleted === undefined && res.status(200).send(`O afazer: ${itenToDo?.title} foi deletado com sucesso.`) 

})

app.listen('3003',()=>{
    console.log('Exercício 7 - Servidor rodando na porta 3003.')
})