import { Request, Response } from 'express'
import * as express from 'express'
import * as cors from 'cors'
import users from './exercise3'

const app = express()

app.use(express.json())
app.use(cors())

app.delete('/delete/user', (req: Request, res: Response)=>{

    const userId = Number(req.headers.iduser)
    const userNotExisting = users.find((user) => user.id === userId)
    const deleteUser = users.filter((user) => user.id !== userId)
    const userDeleted = deleteUser.find((user) => user.id === userId)

    !userId && res.status(400).send("É obrigatório informar o id de um usário para deletá-lo.")

    userNotExisting === undefined && res.status(400).send("Usuário não encontrado.")

    userDeleted === undefined && res.status(200).send("Usuário excluído com sucesso.")

})

app.listen('3003',()=>{
    console.log('Exercício 10 - Servidor rodando na porta 3003.')
})