/* Exercícios de interpretação de código:

 1- Será impresso no console:
10
10 5 */

/* 2- Será impresso no console:
10 10 10 */

/* 3- Melhores nomes pras variáveis:
horasTrabalhadas
salarioDiario */

// Exercícios de escrita de código
// Exercício 1:

let nome 
let idade 

console.log(typeof nome , typeof idade)

/* Deu undefined, pois não foi atribuído valor,
então não tem como ler o tipo */

console.log(nome = prompt("Qual seu nome?"))

console.log(idade = prompt("Qual sua idade?"))

console.log(typeof nome , typeof idade)

// Notei que os dois saem como string na tela, pois não houve conversão

console.log("Olá" , nome , ", você tem" , idade , "anos.")

//Exercício 2

let respostaUm
let respostaDois
let respostaTres

respostaUm = prompt("Você saiu de casa hoje?")

respostaDois = prompt("Você jantou hoje?")

respostaTres = prompt("Você trabalhou hoje?")

console.log("Você saiu de casa hoje?" , respostaUm)

console.log("Você jantou hoje?" , respostaDois)

console.log("Você trabalhou hoje?" , respostaTres)

//Exercício 3

let aInicial = 10
let bInicial = 25

a = bInicial
b = aInicial

console.log("O novo valor de a é:" , a)
console.log("O novo valor de b é:" , b)

//Exercício desafio

let numeroUm
let numeroDois
let soma
let multiplicacao

console.log(numeroUm = prompt("Escreva um número:"))
console.log(numeroDois = prompt("Escreva outro número:"))

let numeroUmNovo = Number(numeroUm)
let numeroDoisNovo = Number(numeroDois)

soma = numeroUmNovo + numeroDoisNovo
multiplicacao = numeroUmNovo * numeroDoisNovo

console.log("O primeiro número somado ao segundo número resulta em:" , soma)
console.log("O primeiro número multiplicado pelo segundo número resulta em:" , multiplicacao)

