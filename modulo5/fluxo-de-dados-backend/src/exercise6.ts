import express, {Request, Response} from 'express'
import cors from 'cors'
import { products } from './data'

const app = express()

app.use(express.json())
app.use(cors())

app.put('/edit/product/:idProduct', (req: Request, res: Response)=>{

    const productId = req.params.idProduct
    const {newName, newPrice} = req.body
    const productNotExisting = products.filter(product => product.id === productId)

    try{
        if(productNotExisting.length === 0){
            const err = new Error('Produto não encontrado.')
            err.name = 'productNotExisting'
            throw err
        } if(!newPrice && !newName){
            const err = new Error('É necessário informar o preço, o nome ou os dois para edição.')
            err.name = 'priceAndNameMissing'
            throw err
        } if(typeof newName !== 'string'){
            const err = new Error('O valor de nome tem que ser do tipo string.')
            err.name = 'nameIsNotString'
            throw err
        } if(!newPrice && newName){

            for(let i= 0; i < products.length; i++){
                if(products[i].id === productId){
                    products[i].nameProduct = newName
                }
            }

            res.status(200).send(products)
            
        }if(typeof newPrice !== 'number'){
            const err = new Error('O valor do preço tem que ser do tipo número.')
            err.name = 'priceisNaN'
            throw err
        } if(newPrice <= 0){
            const err = new Error('O preço tem que ser maior que 0.')
            err.name = 'invalidPrice'
            throw err
        } if(newPrice && newName){

            for(let i= 0; i < products.length; i++){
                if(products[i].id === productId){
                    products[i].nameProduct = newName
                    products[i].price = newPrice
                }
            }

            res.status(200).send(products)

        } if(newPrice && !newName){

            for(let i= 0; i < products.length; i++){
                if(products[i].id === productId){
                    products[i].price = newPrice
                }
            }

            res.status(200).send(products)

        } 
    }catch(e: any){
        if(e.name = 'productNotExisting'){
            res.status(422).send(e.message)
        } if(e.name === 'priceAndNameMissing'){
            res.status(422).send(e.message)
        } if(e.name === 'nameIsNotString'){
            res.status(422).send(e.message)
        } if(e.name === 'priceisNaN'){
            res.status(422).send(e.message)
        } if(e.name === 'invalidPrice'){
            res.status(422).send(e.message)
        } else {
            res.status(500).send(e.message)
        }
    }
})

app.listen('3003', ()=>{
    console.log('Exercício 6 - Servidor rodando na porta 3003.')
})

