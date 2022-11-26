import {Request, Response} from 'express'
import express from 'express'
import cors from 'cors'
import connection from './dataBase/connection'

const app = express()

app.use(express.json())
app.use(cors())

// Crie uma cópia do endpoint acima, e altere-o para que ele possa receber um parâmetro de filtragem por **nome**. Este nome deve ser enviado por query params.

app.get('/users/user/name', async (req: Request, res: Response): Promise<void>=>{

    let searchName = req.query.searchName as string
    let errorCode = 400

    try {
        if(!searchName){
            errorCode = 422
            throw new Error("É necessário informar o nome do usuário que você deseja buscar.")            
        }

        let result = await connection("aula48_exercicio").select("*").whereLike("name", `%${searchName}%`)

        res.status(200).send(result)
    } catch (err: any) {
        res.status(errorCode).send(err.message)
    }
})

// Crie mais uma cópia do endpoint acima, e agora permita que haja filtragem por **tipo** de user. O tipo de user deve ser passado por path params. 

app.get('/users/user/:type', async (req: Request, res: Response): Promise<void>=>{

    let searchType = req.params.type as string
    let errorCode = 400

    try {
        if(searchType === ":type"){
            errorCode = 422
            throw new Error("É necessário informar o tipo do usuário que você deseja buscar.")            
        }

        let result = await connection("aula48_exercicio").select("*").whereLike("type", `%${searchType}%`)

        res.status(200).send(result)
    } catch (err: any) {
        res.status(errorCode).send(err.message)
    }
})

/* Faça uma cópia do endpoint original, e adicione a ele a funcionalidade de ordenação que possa receber nome ou tipo de user. 
A ordenação padrão deve ser crescente, e caso o usuário não passe nenhum parâmetro, a ordenação deve ser por email. */

app.get('/users', async (req: Request, res: Response): Promise<void>=>{

    let ordenacao = req.query.ordenacao
    let errorCode = 400
    let allUsers;

    try {

        allUsers = await connection("aula48_exercicio").select("*").orderBy("email")

        if(ordenacao === "name" || ordenacao === "NAME" || ordenacao === "Name"){
            allUsers = await connection("aula48_exercicio").select("*").orderBy("name")
        } if(ordenacao === "type" || ordenacao === "TYPE" || ordenacao === "Type"){
            allUsers = await connection("aula48_exercicio").select("*").orderBy("type")
        }

        res.status(200).send(allUsers)
        
    } catch (err: any) {
        res.status(errorCode).send(err.message)
    }
})

/* Gere uma cópia do endpoint original, e faça com que ele exiba apenas 5 users por vez, e permita que o usuário possa passar a página que deseja ver.
 O número da página deve ser passado por query params. */

 app.get('/users/page', async (req: Request, res: Response): Promise<void>=>{

    let page = Number(req.query.page)
    let errorCode = 400
    
    try {
        const allUsers = await connection("aula48_exercicio").select("*").limit(5).offset(5 * (page - 1))

        res.status(200).send(allUsers)
        
    } catch (err: any) {
        res.status(errorCode).send(err.message)
    }
})

/* Crie um último endpoint que possua todas as funcionalidades acima (as duas filtragens, a ordenação e a paginação). 
Atribua valores padrão para filtragem, ordenação e paginação para que:

- Caso o usuário não forneça parâmetro de filtragem, o endpoint busque todos os users;
- Caso o usuário não forneça parâmetro de ordenação, o endpoint ordene por **nome** em ordem **decrescente;**
- Caso o usuário não forneça número de página, deve começar na página 1 */

app.get('/users/all', async (req: Request, res: Response): Promise<void> =>{
    
    let searchName = req.query.searchName as string
    let searchType = req.query.searchType as string
    let ordenacao = req.query.ordenacao as string
    let page = Number(req.query.page)
    let allUsers;
    let errorCode = 400

    try {

        allUsers = await connection("aula48_exercicio").select("*").orderBy("name", "DESC").limit(5).offset(0)

        if(searchName && !ordenacao && !page && !searchType){
            allUsers = await connection("aula48_exercicio").select("*").whereLike("name", `%${searchName}%`).orderBy("name", "DESC").limit(5).offset(0)
        } if(searchType && !ordenacao && !page && !searchType){
            allUsers = await connection("aula48_exercicio").select("*").whereLike("type", `%${searchType}%`).orderBy("name", "DESC").limit(5).offset(0)
        } if(searchName && searchType && ordenacao){
            allUsers = await connection("aula48_exercicio").select("*").whereLike("type", `%${searchType}%`).andWhereLike("name", `%${searchName}%`).orderBy(ordenacao, "DESC").limit(5).offset(0)
        }
        
    } catch (err: any) {
        res.status(errorCode).send(err.message)
    }
})

app.listen(3003, ()=>{
    console.log('Server running at port 3003.')
}) 