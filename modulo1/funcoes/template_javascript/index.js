// Exercícios de interpretação de código:
/* Exercício 1:
a) 10 e 50.
b) A função seria executada, mas o resultado não apareceria no console.

Exercício 2:
a) A função vai transformar uma frase em letras minúsculas apenas e vai verficar se na frase
tem a palavra "cenoura".
b) 
i. eu gosto de cenoura / true
ii. cenoura é bom pra vista / true
iii. cenouras crescem na terra / true
*/

// Exercícios de escrita de código:

// Exercício 1:
// a)

function dados() {
    console.log("Eu sou Giovana, tenho 23 anos, moro em São Sebastião do Paraíso e sou estudante.")
}

dados()

// b)

function informacoes(nome , idade , cidade , profissao) {
    nome = prompt("Qual seu nome?")
    idade = prompt("Qual sua idade?")
    cidade = prompt("Qual sua cidade?")
    profissao = prompt("Qual sua profissão?")
    return `Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissao}.`
}

console.log(informacoes())

// Exercício 2:
// a)

function soma(num1 , num2) {
    num1 = 2
    num2 = 3
    let somar = (num1 + num2)
    return somar
}

console.log(soma())

// b)

function maiorOuMenor(num1 , num2) {
    num1 = (prompt("Digite um número:"))
    num2 = (prompt("Digite outro número:"))
    return num1 >= num2
}

console.log(maiorOuMenor())

// c)

function par(num) {
    num = Number(prompt("Escreva um número:"))
    let numero = 0
    let parOuNao = (num % 2) == numero
    return parOuNao  
}

console.log(par())

// d)

function string(string1) {
    string1 = prompt("Escreva uma mensagem:")
    console.log(string1.length)
    console.log(string1.toUpperCase())
}

string()

// Exercício 3:

let um = Number(prompt("Digite um número:"))
let dois = Number(prompt("Digite outro número:"))

function soma1() {
    return um + dois
}

function subtracao() {
    return um - dois
}

function multiplicacao() {
    return um * dois
}

function divisao() {
    return um / dois    
}

console.log(um , dois)
console.log(soma1())
console.log(subtracao())
console.log(multiplicacao())
console.log(divisao())

// Desafio 1:

let arrowUm = (parametroUm) => {
    console.log(parametroUm)
}

let arrowDois = (parametroDois , parametroTres) => {
    arrowUm(parametroDois + parametroTres)
}


arrowDois(2 , 5)

// Desafio 2:

let teorema = (catetoUm , catetoDois) => {
    catetoUm = Number(prompt("Cateto 1:"))
    catetoDois = Number(prompt("Cateto 2:"))
    let hipotenusa = Math.sqrt(catetoUm ** 2 + catetoDois ** 2)
    return hipotenusa
}

console.log(teorema(2 , 3))
 



