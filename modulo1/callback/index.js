// Exercícios de interpretação de código:

/* 1- a) Vai ser impresso o mesmo array todo item por item, número de cada índice e o array todo. 

2- a) Vai ser impresso no console um array com os 3 nomes: 'Amanda Rangel' 'Laís Petra' 'Letícia Chijo'

3- a) Vai ser impresso no console um array com os 2 nomes e apelidos sem conter a palavra Chijo: "nome: 'Amanda Rangel' apelido: 'Mandi'" "nome: 'Laís Petra' apelido: 'Laura'"

*/

// Exercícios de escrita de código: 

//Exercício 1:

const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ] 
  

// a) Crie um novo array que contenha apenas o nome dos doguinhos

const nomesDoguinhos = pets.map((pets) => {
    return pets.nome
})

console.log(nomesDoguinhos)


// b) Crie um novo array apenas com os [cachorros salsicha]

const racaSalsicha = pets.filter((pets) => {
    if(pets.raca === "Salsicha"){
        return pets
    }
})

console.log(racaSalsicha)

// c) Crie um novo array que possuirá mensagens para enviar para todos os clientes que são poodles. A mensagem deve ser: "Você ganhou um cupom de desconto de 10% para tosar o/a `[NOME]`!" 

const racaPoodle = pets.filter((pets)=>{
    if(pets.raca === "Poodle"){
        return pets
    }
})


const racaPoodleDois = racaPoodle.map((pets)=>{
    if(pets.raca === "Poodle"){
        return `Você ganhou um cupom de desconto de 10% para tosar o/a ${pets.nome}!`
    }
})

console.log(racaPoodleDois)


// Exercício 2:

const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ] 

// a) Crie um novo array que contenha apenas o nome de cada item

const nomeProdutos = produtos.map((produtos)=> {
    return produtos.nome
})

console.log(nomeProdutos)

// b) Crie um novo array que contenha um objeto com o nome e o preço de cada item, aplicando 5% de desconto em todos eles

const produtosComDesconto = produtos.map((produtos) => {
    let desconto = (produtos.preco * (5 / 100))
    let descontoFinal = produtos.preco - desconto
    let objetoComDesconto = {nome: produtos.nome , preço: descontoFinal.toFixed(2)}
    return objetoComDesconto
})

console.log(produtosComDesconto) 

// c) Crie um novo array que contenha apenas os objetos da categoria Bebidas

const categoriaBebida = produtos.filter((produtos) => {
    if(produtos.categoria === "Bebidas"){
        return produtos
    }
})

console.log(categoriaBebida)

// d) Crie um novo array que contenha apenas os objetos cujo nome contenha a palavra "Ypê"

const produtosYpe = produtos.filter((produtos) => {
    if(produtos.nome.includes("Ypê") === true){
        return produtos
    }
})

console.log(produtosYpe)

/* e) Crie um novo array onde cada item é uma frase "Compre [NOME] por [PREÇO]". Esse array deve conter
 frases apenas dos itens cujo nome contenha a palavra "Ypê" */

const fraseYpe = produtosYpe.map((produtos) => {
    if(produtos.nome.includes("Ypê") === true){
        return `Compre ${produtos.nome} por R$${produtos.preco}`
    }     
})

console.log(fraseYpe)

// Desafio:

// 1. Dado o seguinte array de pokémons, realize as operações pedidas nos itens abaixo:
    

const pokemons = [
    { nome: "Bulbasaur", tipo: "grama" },
    { nome: "Bellsprout", tipo: "grama" },
    { nome: "Charmander", tipo: "fogo" },
    { nome: "Vulpix", tipo: "fogo" },
    { nome: "Squirtle", tipo: "água" },
    { nome: "Psyduck", tipo: "água" },
]
       
    
// a) Crie um novo array que contenha apenas o nome dos pokémons em ordem alfabética
    

const ordenacaoPokemons = pokemons.sort((a , b) =>{
    return a.nome.localeCompare(b.nome)
 })

console.log(ordenacaoPokemons)

     





