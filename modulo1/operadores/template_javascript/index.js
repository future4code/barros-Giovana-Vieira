/* Exercícios de interpretação de código:

1- a. false
b. false
c. true
d. boolean

2- Do jeito que está as variáveis primeiroNumero 
e segundoNumero serão impressas uma do lado da outra.

3- Você precisa fazer a conversão das variáveis para
o type number ou não será possível realizar a soma.*/

// Exercícios de escrita de código: 

// Exercício 1:

let idadeUsuario
let idadeBestFriend
let conta
let diferenca

idadeUsuario = prompt("Qual sua idade?")
idadeBestFriend = prompt("Qual a idade do seu melhor amigo ou amiga?")

conta = Number(idadeUsuario) > Number(idadeBestFriend)
diferenca = Number(idadeUsuario) - Number(idadeBestFriend)

console.log(`Sua idade é maior que a do seu melhor amigo ou amiga? ${conta}`)

console.log(`A diferença de idade de vocês é: ${diferenca}`)

// Exercício 2:

let numeroPar
let resto
const numeroDois = 2

numeroPar = prompt("Digite um número par:")

console.log(resto = Number(numeroPar) % numeroDois)

/*Quando for digitado um número par o resultado do resto sempre será "0"
afinal o número 2 divide qualquer número par. E quando for digitado um 
número ímpar o resultado sempre será "1", pois fazendo a divisão de um 
número ímpar por 2, sempre restará "1".*/

// Exercício 3:

let contaMeses
let contaDias
let contaHoras
let idade

idade = prompt("Quantos anos você tem?")

contaMeses = Number(idade) * 12

contaDias = Number(idade) * 365

contaHoras = (24 * 365) * Number(idade)

console.log(`Sua idade em meses: ${contaMeses}`)

console.log(`Sua idade em dias: ${contaDias}`)

console.log(`Sua idade em horas: ${contaHoras}`)

// Exercício 4:

let primeiroNumero
let segundoNumero
let comparacaoUm
let comparacaoDois
let comparacaoTres
let comparacaoQuatro
const rest = 0

primeiroNumero = prompt("Digite um número:")

segundoNumero = prompt("Digite outro número:")

console.log(comparacaoUm = Number(primeiroNumero) > Number(segundoNumero))
console.log(comparacaoDois = Number(primeiroNumero) === Number(segundoNumero))
console.log(comparacaoTres = Number(primeiroNumero) % Number(segundoNumero) === rest)
console.log(comparacaoQuatro = Number(segundoNumero) % Number(primeiroNumero) === rest)

// Desafios:

// Desafio 1:

const valorUm = 77
const valorDois = 80
const valorTres = 30
let calculoUm
let calculoDois
let calculoTres
let calculoQuatro
let calculoCinco
let calculoSeis
let valorQuatro

calculoUm = (valorUm - 32)*(5/9) + 273.15

calculoDois = (valorDois)*(9/5) + 32

calculoTres = (valorTres)*(9/5) + 32

calculoQuatro = (calculoTres - 32)*(5/9) + 273.15

console.log(`O valor de 77°F em K é: ${calculoUm}`)

console.log(`O valor de 80°C em °F é: ${calculoDois}`)

console.log(`Os valores de 30°C em °F e K são respectivamente: ${calculoTres} ${calculoQuatro}`)

valorQuatro = Number(prompt("Insira o valor em graus Celsius que você deseja converter para °F e K:"))

calculoCinco = (valorQuatro)*(9/5) + 32

calculoSeis = (calculoCinco - 32)*(5/9) + 273.15

console.log(`Os valores de *°C inserido em °F e K são respectivamente: ${calculoCinco} ${calculoSeis}`)

// Desafio 2:

const desconto = 15/100
const preco = 0.05
let quilowatt = 280
let calculoDesafioUm
let calculoDesafioDois

calculoDesafioUm = quilowatt * preco

console.log(`O valor a ser pago por uma residência que consome 280 quilowatt-hora é: ${calculoDesafioUm}`)

calculoDesafioDois = calculoDesafioUm - (desconto * calculoDesafioUm)

console.log(`O valor a ser pago pela mesma residência acima com + 15% de desconto é: ${calculoDesafioDois}`)

// Desafio 3: 

let lb = 20
let kg1 = 0.45359237
let lbEmKg

lbEmKg = lb * kg1

console.log(`20lb equivalem a ${lbEmKg} kg`)

let oz = 10.5
let kg2 = 0.02835
let ozEmKg

ozEmKg = oz * kg2

console.log(`10.5oz equivalem a ${ozEmKg} kg`)

let mi1 = 100
let m1 = 1609.34
let miEmM

miEmM = mi1 * m1

console.log(`100mi equivalem a ${miEmM} m`)

let ft = 50
let m2 = 0.3048
let ftEmM

ftEmM = ft * m2

console.log(`50ft equivalem a ${ftEmM} m`)

let gal = 103.56
let l1 = 3.785412
let galEmL 

galEmL = gal * l1

console.log(`103.56gal equivalem a ${galEmL} l`)

let xic = 450
let l2 = 0.24
let xicEmL

xicEmL = xic * l2

console.log(`450 xic equivalem a ${xicEmL} l`)

let mi2 
let m3 = 1609.34
let unidadeUsuario
let calculoMiEmM

unidadeUsuario = Number(prompt("Escreva a unidade de mi que você deseja converter para m:"))

calculoMiEmM = unidadeUsuario * m3

console.log(`*mi equivalem a ${calculoMiEmM} m`)




