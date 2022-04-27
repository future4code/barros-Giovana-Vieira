/* // Exercícios de interpretação de código:

/* Exercício 1:

a) Console 1- Matheus Nachtergaele
Console 2- Virginia Cavendish
Console 3- Globo 14h 

Exercício 2:

a) Console 1- 
    nome: "Juca", 
	idade: 3, 
	raca: "SRD"
Console 2- nome: "Juba", 
	idade: 3, 
	raca: "SRD"
Console 3- nome: "Jubo", 
	idade: 3, 
	raca: "SRD"

b) Copia os dados do objeto e retorna pro novo objeto. 

Exercício 3:

a) Console 1- 
  false 

  Console 2- 
  undefined

  b) O segundo deu erro pois não existia essa propriedade dentro do objeto criado.*/

// Exercícios de escrita de código:

// Exercício 1:


let nomeApelido = {
    nome: "Giovava",
    apelidos: ["Gi" , "Gio" , "Gigi"]
}

let apelidos = (objeto) => {
    return `Eu sou ${nomeApelido.nome}, mas pode me chamar de: ${nomeApelido.apelidos[0]} , ${nomeApelido.apelidos[1]} ou ${nomeApelido.apelidos[2]}.`
}

console.log(apelidos(nomeApelido))

let nomeApelidoUm = {

    ...nomeApelido,
}

nomeApelido.apelidos= ["Morango" , "Grampeador" , "Garrafa"]

console.log(apelidos(nomeApelidoUm))

//Exercício 2:

let nomeIdadeProfissao = {
    nome: "Giovana",
    idade: 23,
    profissao: "Auxiliar Administrativo",
}

let nomeIdadeProfissaoUm = {
    nome: "Camila",
    idade: 27,
    profissao: "Auxiliar Administrativo",
} 

let valores = (objeto) => {
    return `O valor de "nome": ${objeto.nome}
    O número de caracteres do valor "nome": ${objeto.nome.length}
    O valor de "idade": ${objeto.idade}
    O valor de "profissão": ${objeto.profissao}
    O número de caracteres do valor "profissões": ${objeto.profissao.length}.`
}

console.log(valores(nomeIdadeProfissao))

console.log(valores(nomeIdadeProfissaoUm))

// Exercício 3:

let carrinho = []

let frutaUm = {
    nome: "Melancia",
    disponivel: true
}

let frutaDois = {
    nome: "Goiaba",
    disponivel: true
}

let frutaTres = {
    nome: "Maça",
    disponivel: true
}

let carrinhoUm = (fruta) => {
    return carrinho.push(fruta)
}

console.log(carrinhoUm(frutaUm))

console.log(carrinhoUm(frutaDois))

console.log(carrinhoUm(frutaTres))

console.log(carrinho)

// Desafios:

// Desafio 1: 

let dadosUsuario = (nomeUser , idadeUser , profissaoUser , objeto) => {
    nomeUser = prompt("Qual seu nome?")
    idadeUser = prompt("Qual sua idade?")
    profissaoUser = prompt("Qual sua profissão?")

    let dadosUsuarioUm = {
        nome: nomeUser,
        idade: idadeUser,
        profissao: profissaoUser,
    }

    console.log(dadosUsuarioUm)
    console.log(typeof(dadosUsuarioUm))

}

dadosUsuario() 


// Desafio 2:


let filmes = (filmeUm , filmeDois) => {

    filmeUm = {
        nome: "Pedra",
        anoDeLancamento: 1990 
    }

    filmeDois = {
        nome: "Joia",
        anoDeLancamento: 1990
    }

    let comparacaoUm = filmeUm.anoDeLancamento < filmeDois.anoDeLancamento
    let comparacaoDois = filmeUm.anoDeLancamento === filmeDois.anoDeLancamento

    return `O primeiro filme foi lançado antes do segundo? ${comparacaoUm}
    O primeiro filme foi lançado no mesmo ano do segundo? ${comparacaoDois}`

}

console.log(filmes()) 



// Desafio 3:


let estoque = (fruta) => {
    return !fruta.disponivel
}


console.log(estoque(frutaUm))






































