import express, {Request, Response} from 'express'
import cors from 'cors'
import { products } from './data'
import { Product } from './type'

const app = express()

app.use(express.json())
app.use(cors())

app.post('/add/product', (req: Request, res: Response): void =>{

    const {nameProduct, price} = req.body
    const newProduct: Product = {
        id: Date.now().toString(),
        nameProduct,
        price 
    }

    try{

        if(!nameProduct && !price){
            const err = new Error('É obrigatório informar o nome e o preço.')
            err.name = 'nameAndPriceMissing'
            throw err
        }else if(!nameProduct){
            const err = new Error('É obrigatório informar o nome.')
            err.name = 'nameMissing'
            throw err
        }else if(!price){
            const err = new Error('É obrigatório informar o preço.')
            err.name = 'priceMissing'
            throw err
        }else if(typeof nameProduct !== 'string'){
            const err = new Error('O nome precisa ter o valor de string.')
            err.name = 'nameIsNotAString'
            throw err
        }else if(typeof price !== 'number'){
            const err = new Error('O preço precisa ter o valor de number.')
            err.name = 'priceIsNaN'
            throw err
        }else if(price <= 0){
            const err = new Error('O preço precisa ser maior que 0.')
            err.name = 'invalidPrice'
            throw err
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
        } else {
            res.status(500).send(e.message)
        }
    }   

})

app.listen('3003', ()=>{
    console.log('Exercício 4 - Servidor rodando na porta 3003.')
})