/* Os pratos deste restaurante possuem  um nome, um custo, um valor de venda,
e um array de ingredientes. Cada uma das vendas deve conter o nome do prato e o nome do cliente que realizou a compra.

a) Escreva uma função que permita cadastrar um produto. Salve os produtos em um array no escopo global.

b) Escreva uma função que recebe um nome e devolve o valor do produto com este nome.

c) Escreva uma função para que ele venda um prato. Salve as vendas em um array no escopo global.

d) Escreva uma função que determine o lucro do restaurante. */

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

let newProducts: Dishs[] = []

const addProducts = () => {

    let newProduct: Dishs = {
        dishName: "Risoto",
        cost: 40,
        price: 60,
        ingredientes: ['Vinho Branco', 'Legumes', 'Arroz', 'Manteiga']
    }

    newProducts.push(...newProducts, newProduct)
    
}

addProducts()

console.log(newProducts)

