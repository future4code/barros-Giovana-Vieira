import { Request, Response } from 'express'
import express from 'express'
import cors from 'cors'
import toDos from './exercise3'

const app = express()

app.use(express.json())
app.use(cors())

app.put('/edit/:idToDo/status',(req: Request, res: Response)=>{

    const toDoId = Number(req.params.idToDo)
    const toDoNotExisting = toDos.find((toDo)=> toDo.id === toDoId)
    let itenToDo;

    if(toDoId){
        for(let i = 0; i < toDos.length; i++){
            toDos[i].id === toDoId ? toDos[i].completed = !toDos[i].completed : null
        }
    } else {
        res.status(400).send("É obrigatório informar o id do afazer.")
    }

    for(let toDo of toDos){
        toDo.id === toDoId ? itenToDo = toDo : null
    }

    toDoNotExisting === undefined && res.status(400).send("Este afazer não foi encontrado.")

    res.status(200).send(`O status do afazer: ${itenToDo?.title} foi alterado para ${itenToDo?.completed}.`)

})

app.listen('3003',()=>{
    console.log('Exercício 6 - Servidor rodando na porta 3003.')
})