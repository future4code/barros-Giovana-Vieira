import express, {Request, Response} from 'express'
import cors from 'cors'
import { products } from './data'

const app = express()

app.use(express.json())
app.use(cors())

app.get('/search/products',(req: Request, res: Response)=>{

    const nameProduct = req.query.productName as string

    try {
        const productNameValid = products.find(product => product.nameProduct === nameProduct)

        if(!nameProduct){
            res.status(200).send(products)
        } if(productNameValid !== undefined){
            const searchProduct = products.filter(product => product.nameProduct.toLowerCase().includes(nameProduct.toLowerCase()))
            res.status(200).send(searchProduct)
        } if(productNameValid === undefined){
            const err = new Error('Este produto não foi encontrado.')
            err.name = 'productNotFound'
            throw err
        }
    }catch (e: any){
        if(e.name === 'productNotFound'){
            res.status(422).send(e.message)
        } else {
            res.status(500).send(e.message)
        }
    }
})

app.listen('3003',()=>{
    console.log('Exercício 5 - Servidor rodando na porta 3003.')
})