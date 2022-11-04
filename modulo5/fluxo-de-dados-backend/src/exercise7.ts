import express, {Request, Response} from 'express'
import cors from 'cors'
import { products } from './data'

const app = express()

app.use(express.json())
app.use(cors())

app.delete('/delete/product/:id',(req: Request, res: Response)=>{
    
    const productId = req.params.id
    const productNotFound = products.find(product => product.id === productId)
    
    try{
        if(productNotFound === undefined){
            const err = new Error('Produto não encontrado.')
            err.name = 'productIdMissing'
            throw err
        } else {
            const deleteProduct = products.filter(product => product.id !== productId)
            res.status(200).send(deleteProduct)
        }    
    }catch(e: any){
        if(e.name === 'productIdMissing'){
            res.status(422).send(e.message)
        } else {
            res.status(500).send(e.message)
        }
    }
})

app.listen('3003', ()=>{
    console.log('Exercício 7 - Servidor rodando na porta 3003.')
})