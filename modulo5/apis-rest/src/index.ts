import express, {Request, Response} from 'express'
import cors from 'cors'
import { users } from './data'
import { User, UserType } from './types'

const app = express()

app.use(express.json())
app.use(cors())

// Exerício 1
/* a. Qual método HTTP você deve utilizar para isso? Método GET.

b. Como você indicaria a entidade que está sendo manipulada? "/users" */

app.get('/users', (req: Request, res: Response ) => {

    let errorCode = 400

    try{
        if(users.length === 0){
            errorCode = 422
            throw new Error("Lista de usuários vazia.")
        } else {
            res.status(200).send(users)
        }
    }catch(e: any){
        res.status(errorCode).send(e.message)
    }
})

// Exercício 2
/* a. Como você passou os parâmetros de type para a requisição? Por quê? Via query, por ser uma busca.

b. Você consegue pensar em um jeito de garantir que apenas `types` válidos sejam utilizados? Sim, fiz uma verificação para garatir isso. */

app.get('/users/type', (req: Request, res: Response)=>{
    
    const { type } = req.query
    let errorCode = 400

    try{
        if(!type){
            errorCode = 422
            throw new Error("É necessário informar o tipo que você deseja buscar.")          
        } if(type !== UserType.ADMIN.toLowerCase() && type !== UserType.ADMIN.toUpperCase() && type !== UserType.NORMAL.toLowerCase() && type !== UserType.NORMAL.toUpperCase()){
            errorCode = 422
            throw new Error("Existem dois tipos existentes: ADMIN e NORMAL. Favor informar um deles.")
        } 

        const typeSearch = users.filter(user => user.type.toLowerCase() === type.toLowerCase())

        res.status(200).send(typeSearch)

    }catch(e: any){
        res.status(errorCode).send(e.message)
    }
})

// Exercício 3
/* a. Qual é o tipo de envio de parâmetro que costuma ser utilizado por aqui? Do tipo query, por ser uma busca. */

app.get('/users/user/name', (req: Request, res: Response)=>{
    
    const userName = req.query.username as string
    let errorCode = 400

    try{

        const userSearch = users.filter(user => user.name.toLowerCase().includes(userName.toLowerCase()))

        if(!userName){
            errorCode = 422
            throw new Error("É necessário enviar o nome do usuário que você deseja pesquisar.")            
        } if(userSearch.length === 0){
            errorCode = 422
            throw new Error("Nome de usuário não encontrado.")
        }

        res.status(200).send(userSearch)

    }catch(e: any){
        res.status(errorCode).send(e.message)
    }
})

// Exercício 4
/* a. Mude o método do endpoint para `PUT`. O que mudou? Nada.

b. Você considera o método `PUT` apropriado para esta transação? Por quê? Não, pois estou criando um novo usuário, então acho válido usar o método POST.*/

app.post('/users/add/user',(req: Request, res: Response)=>{
    
    const {name, email, type, age} = req.body
    let errorCode = 400

    try{

        const newUser: User = {
            id: Number(Date.now()),
            name,
            email,
            type,
            age
        }

        if(!name || !email || !type || !age){
            errorCode = 422
            throw new Error("Para adicionar um usuário é necessário informar: nome, email, tipo e idade.")            
        } if(type !== UserType.NORMAL && type !== UserType.ADMIN){
            errorCode = 422
            throw new Error("Existem dois tipos existentes: ADMIN e NORMAL. Favor informar um deles escritos exatamente desta maneira.")
        } 

        users.push(newUser)

        res.status(201).send(users)
        
    }catch(e: any){
        res.status(errorCode).send(e.message)
    }
})

app.listen(3003, ()=>{
    console.log('Server is running on port 3003.')
})