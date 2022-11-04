/* Os pratos deste restaurante possuem  um nome, um custo, um valor de venda,
e um array de ingredientes. Cada uma das vendas deve conter o nome do prato e o nome do cliente que realizou a compra.

a) Escreva uma função que permita cadastrar um produto. Salve os produtos em um array no escopo global.

b) Escreva uma função que recebe um nome e devolve o valor do produto com este nome.

c) Escreva uma função para que ele venda um prato. Salve as vendas em um array no escopo global.

d) Escreva uma função que determine o lucro do restaurante. */

import { format } from "path"

type Dishs = {
    dishName: string,
    cost: number,
    price: number,
    ingredientes: string[]
}

type Sales = {
    dishName: string,
    clientName: string
}

let products: Dishs[] = [
    {
        dishName: "Pudim",
        cost: 20,
        price: 35,
        ingredientes: ['Leite Condensado', 'Leite', 'Ovos', 'Açucar']
    },
    {
        dishName: "Macarrão alho e óleo",
        cost: 30,
        price: 50,
        ingredientes: ['Macarrão', 'Alho', 'Azeite', 'Pimenta']
    }
]

// a)

const addProducts = () => {

    let newProduct: Dishs = {
        dishName: "Risoto",
        cost: 40,
        price: 60,
        ingredientes: ['Vinho Branco', 'Legumes', 'Arroz', 'Manteiga']
    }

    products.push(newProduct)
    
}

/* addProducts()
console.log(products) */

// b)

const returnNameOfTheProduct = (dishName: string): number => {

    const productPrice = products.filter((product)=>{
       if(dishName === product.dishName){
         return product.price
       }
    })

    for(let product of productPrice){
        return product.price
    }
}

/* console.log(returnNameOfTheProduct("Macarrão alho e óleo")) */

// c)

let sales: Sales[] = [
    {
        dishName: "Pudim",
        clientName: "Giovana"
    },
    {
        dishName: "Macarrão alho e óleo",
        clientName: "Júlia"
    },
    {
        dishName: "Pudim",
        clientName: "Renata"
    },
]

const addSales = () => {

    let newSale: Sales = {
        dishName: "Risoto",
        clientName: "Davi"
    }

    sales.push(newSale)
}

/* addSales()
console.log(sales) */

// d)

const profit = (): number => {

    let restaurantProfit: number;
    let profits: number[] = []

    for(let saleName of sales){
        for(let product of products){
            if(saleName.dishName === product.dishName){
                restaurantProfit = product.price - product.cost
                profits.push(restaurantProfit)
            }
        }
    }

    let totalProfit = profits.reduce((soma, i)=>{
        return soma + i
    })
    
    return totalProfit
}

console.log(profit())