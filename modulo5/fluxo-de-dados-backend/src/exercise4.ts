import express, {Request, Response} from 'express'
import cors from 'cors'
import { products } from './data'
import { Product } from './type'

/* Desenvolva um endpoint que cria um novo produto e retorna a lista de produtos atualizada. A id do produto deve ser gerada automaticamente pela API. */
/* - erro caso um ou nenhum deles forem recebidos
- erro caso `name` seja diferente de `string`
- erro caso `price` seja diferente de `number`
- erro caso `price` seja igual ou menor que `0`
- erro caso algo inesperado aconteça */

const app = express()

app.use(express.json())
app.use(cors())

app.post('/add/product', (req: Request, res: Response)=>{

    const {name, price} = req.body
    const newProduct: Product = {
        id: Date.now().toString(),
        name,
        price 
    }

    try{

        if(!name && !price){
            const err = new Error('É obrigatório informar o nome e o preço.')
            err.name = 'nameAndPriceMissing'
            throw err
        }if(!name){
            const err = new Error('É obrigatório informar o nome.')
            err.name = 'nameMissing'
            throw err
        }if(!price){
            const err = new Error('É obrigatório informar o preço.')
            err.name = 'priceMissing'
            throw err
        }if(typeof name !== 'string'){
            const err = new Error('O nome precisa ter o valor de string.')
            err.name = 'nameIsNotAString'
        }if(isNaN(price)){
            const err = new Error('O preço precisa ter o valor de number.')
            err.name = 'priceIsNaN'
        }if(price <= 0){
            const err = new Error('O preço precisa ser maior que 0')
            err.name = 'invalidPrice'
        } else {
            products.push(newProduct)
            res.status(201).send(products)
        }

    }catch(e: any){
        if(e.name === 'nameAndPriceMissing'){
            res.status(422).send(e.message)
        } else if(e.name === 'nameMissing'){
            res.status(422).send(e.message)
        } else if(e.name === 'priceMissing'){
            res.status(422).send(e.message)
        } else if(e.name === 'nameIsNotAString'){
            res.status(422).send(e.message)
        } else if(e.name === 'priceIsNaN'){
            res.status(422).send(e.message)
        } else if(e.name === 'invalidPrice'){
            res.status(422).send(e.message)
        }
    }   

})

app.listen('3003', ()=>{
    console.log('Exercício 4 - Servidor rodando na porta 3003.')
})