// Exercícios de interpretação de código:

/* Exercício 1:

a) Ele testa se o número é divísivel por 2.

b) Números pares que são todos divísiveis por 2.

c) Número ímpares que nunca são divísiveis por 2.

Exercício 2:

a) Ele retorna os preços das frutas.

b) O preço da fruta Maçã é R$ 2.25

c) O preço da fruta Pêra é R$ 5

Exercício 3:

a) Está pedindo ao usuário pra digitar um número.

b) 10: "Esse número passou no teste" -10: Não vai aparecer nada no console.

c) Haverá no último console.log pois a partir da versão ES6 do javascript foi criado o "Escopo de bloco" aonde uma variável
criada dentro de if e outros comandos fica no escopo local do comando e não pode ser usada fora dele.

*/

// Exercícios de escrita de código:

/* Exercício 1. Faça um programa que pergunta ao usuário qual a idade dele e imprima no console se ele/ela pode dirigir (apenas maiores de idade).
        
a) Faça um `prompt` para receber a idade do usuário e guarde em uma variável.
        
b) Garanta que essa variável é do tipo `Number`, você deve usar o cast para number para isso.
        
c) Agora veja se essa idade do usuário corresponde à idade mínima que permite dirigir. Se sim, imprima no console 
`"Você pode dirigir"`, caso contrário, imprima `"Você não pode dirigir."` */ 


let idade = Number(prompt("Qual sua idade?"))

if (idade >= 18) {
    console.log("Você pode dirigir")
} else {
    console.log("Você não pode dirigir.")
}


/* Exercício 2. Agora faça um programa que verifica que turno do dia um aluno estuda. Peça para digitar M (matutino) ou 
V (Vespertino) ou N (Noturno). Imprima no console a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!". Utilize o bloco if/else */

let turnoExDois = prompt(`Digite uma das três opções:
M - Se você estuda no horário matutino.
V - Se você estuda no horáro vespertino.
N - Se você estuda no horário noturno.`)

if (turnoExDois === "M") {
    console.log("Bom Dia!")
} if (turnoExDois === "V") {
    console.log("Boa Tarde!")
} if (turnoExDois === "N") {
    console.log("Boa Noite!")
}

/* Exercício 3. Repita o exercício anterior, mas utilizando a estrutura de switch case agora. */

let turnoExTres = prompt(`Digite uma das três opções:
M - Se você estuda no horário matutino.
V - Se você estuda no horáro vespertino.
N - Se você estuda no horário noturno.`)

switch (turnoExTres) {
    case "M":
        console.log("Bom Dia!")
        break
    case "V":
        console.log("Boa Tarde!")
        break
    case "N":
        console.log("Boa Noite!")
        break
}

/* Exercício 4. Considere a situação: você vai ao cinema com um amigo ou amiga, porém ele/ela só assistirá a um filme com você se ele for do gênero fantasia **e** 
se o ingresso está abaixo de 15 reais. Faça um código que pergunta ao usuário qual o gênero de filme que vão assistir e outra pergunta sobre o preço do ingresso,
 então verifique se seu amigo ou amiga vai topar assistir o filme. Caso positivo, imprima no console a mensagem: `"Bom filme!"`, caso contrário, imprima 
 `"Escolha outro filme :("`*/

 let genero = prompt("Qual o gênero do filme que vão assistir?")
 let preco = Number(prompt("Qual o preço do ingresso?"))

 if ((genero === "Fantasia") && (preco < 15)) {
     console.log("Bom filme!")
 } else {
     console.log("Escolha outro filme :(")
 }

 // Desafios:

 /* Desafio 1. Modifique o código do exercício 4 de escrita de código para, antes de imprimir a mensagem "Bom filme!", pergunte ao usuário, 
 pelo prompt qual lanchinho ele vai comprar (pipoca, chocolate, doces, etc) e imprima no console as mensagens "Bom filme!" e "Aproveite o seu
 [LANCHINHO]", trocando [LANCHINHO] pelo que o usuário colocou no input. */

 let generoDesafio = prompt("Qual o gênero do filme que vão assistir?")
 let precoDesafio = Number(prompt("Qual o preço do ingresso?"))

 if ((generoDesafio === "Fantasia") && (precoDesafio < 15)) {
    let lanchinho = prompt("Você vai comprar qual lanchinho?") 
    console.log(`Bom filme! Aproveite o seu ${lanchinho}.`)
 } else {
     console.log("Escolha outro filme :(")
 }

 /* Desafio 2. Você foi contratado para criar um sistema de vendas de ingressos de jogos de um estádio de futebol. Para esta compra, o usuário deve fornecer algumas informações:
    - Nome completo;
    - Tipo de jogo: IN indica internacional; e DO indica doméstico;
    - Etapa do jogo: SF indica semi-final; DT indica decisão de terceiro lugar; e FI indica final
    - Categoria: pode ser as opções 1, 2, 3 ou 4;
    - Quantidade de ingressos
    
    O seu sistema deve solicitar estas informações ao usuário, através do `prompt` . Além disso, ele deve imprimir tudo isso, junto com o valor de cada ingresso e o valor total 
    que o usuário tem que pagar (ou seja, o valor unitário do ingresso multiplicado pela quantidade). Abaixo, há a tabela com os valores de cada ingresso e exemplos de execução 
    do programa. Lembrando que o valor de jogos internacionais é o mesmo de jogos domésticos, mas seus preços devem ser multiplicados pelo valor do dólar (considerar o dólar = R$4,10) 
    
    Exemplo de saída: 
    ---Dados da compra--- 
    Nome do cliente:  Soter Padua 
    Tipo do jogo:  Nacional 
    Etapa do jogo:  Final 
    Categoria:  1 
    Quantidade de Ingressos:  10 ingressos 
    ---Valores--- 
    Valor do ingresso:  R$ 1980
    Valor total:  R$ 19800

    */


let nomeCompleto = prompt("Qual seu nome completo?")
let tipoDeJogo = prompt(`Qual o tipo de jogo?
Digite "IN" para jogo internacional e "DO" para jogo doméstico:`)
let etapaDoJogo = prompt(`Qual a etapa do jogo?
Digite "SF" para semi-final, "DT" para decisão de terceiro lugar ou "FI" para final:`)
let categoria = prompt(`Qual a categoria?
Digite uma das 4 opções abaixo:
1- SF: R$1.320,00 / DT: R$660,00 / FI: R$1.980,00 
2- SF: R$880,00 / DT: R$440,00 / FI: R$1.320,00
3- SF: R$550,00 / DT: R$330,00 / FI: R$880,00
4- SF: R$220,00 / DT: R$170,00 / FI: R$330,00`)
let quantidade = Number(prompt("Qual a quantidade de ingressos?"))


if (tipoDeJogo === "DO") {
    console.log(`---Dados da compra--- 
Nome do cliente:  ${nomeCompleto} 
Tipo do jogo: Nacional`)
} if (tipoDeJogo === "IN") {
    console.log(`---Dados da compra--- 
Nome do cliente:  ${nomeCompleto} 
Tipo do jogo: Internacional`)
} if (etapaDoJogo === "SF") {
    console.log(`Etapa do jogo:  Semi-Final`)
} if (etapaDoJogo === "DT") {
    console.log(`Etapa do jogo:  Decisão de terceiro lugar`)
} if (etapaDoJogo === "FI") {
    console.log(`Etapa do jogo:  Final`) 
} if (categoria === "1") {
    console.log(`Categoria: 1
Quantidade de Ingressos: ${quantidade} ingressos`)
} if (categoria === "2") {
    console.log(`Categoria: 2
Quantidade de Ingressos: ${quantidade} ingressos`)
} if (categoria === "3") {
    console.log(`Categoria: 3
Quantidade de Ingressos: ${quantidade} ingressos`)
} if (categoria === "4") {
    console.log(`Categoria: 4
Quantidade de Ingressos: ${quantidade} ingressos`)
} if (etapaDoJogo === "SF" && categoria === "1") {
    console.log(`---Valores--- 
Valor do ingresso: R$1.320,00`)
} if (etapaDoJogo === "DT" && categoria === "1") {
    console.log(`---Valores--- 
Valor do ingresso: R$660,00`)
} if (etapaDoJogo === "FI" && categoria === "1") {
    console.log(`---Valores--- 
Valor do ingresso: R$1.980,00`)
} if (etapaDoJogo === "SF" && categoria === "2") {
    console.log(`---Valores--- 
Valor do ingresso: R$880,00`)
} if (etapaDoJogo === "DT" && categoria === "2") {
    console.log(`---Valores--- 
Valor do ingresso: R$440,00`)
} if (etapaDoJogo === "FI" && categoria === "2") {
    console.log(`---Valores--- 
Valor do ingresso: R$1.320,00`)
} if (etapaDoJogo === "SF" && categoria === "3") {
    console.log(`---Valores--- 
Valor do ingresso: R$550,00`)
} if (etapaDoJogo === "DT" && categoria === "3") {
    console.log(`---Valores--- 
Valor do ingresso: R$330,00`)
} if (etapaDoJogo === "FI" && categoria === "3") {
    console.log(`---Valores--- 
Valor do ingresso: R$880,00`)
} if (etapaDoJogo === "SF" && categoria === "4") {
    console.log(`---Valores--- 
Valor do ingresso: R$220,00`)
} if (etapaDoJogo === "DT" && categoria === "4") {
    console.log(`---Valores--- 
Valor do ingresso: R$170,00`)
} if (etapaDoJogo === "FI" && categoria === "4") {
    console.log(`---Valores--- 
Valor do ingresso: R$330,00`)
} if (tipoDeJogo === "IN" && etapaDoJogo === "SF" && categoria === "1") {
    let valorTotal = quantidade * (1320 * 4.10)
    console.log(`Valor total: US$${valorTotal.toFixed()}`)
} if (tipoDeJogo === "IN" && etapaDoJogo === "DT" && categoria === "1") {
    let valorTotal = quantidade * (660 * 4.10)
    console.log(`Valor total: US$${valorTotal.toFixed()}`)
} if (tipoDeJogo === "IN" && etapaDoJogo === "FI" && categoria === "1") {
    let valorTotal = quantidade * (1980 * 4.10)
    console.log(`Valor total: US$${valorTotal.toFixed()}`)
} if (tipoDeJogo === "IN" && etapaDoJogo === "SF" && categoria === "2") {
    let valorTotal = quantidade * (880 * 4.10)
    console.log(`Valor total: US$${valorTotal.toFixed()}`)
} if (tipoDeJogo === "IN" && etapaDoJogo === "DT" && categoria === "2") {
    let valorTotal = quantidade * (440 * 4.10)
    console.log(`Valor total: US$${valorTotal.toFixed()}`)
} if (tipoDeJogo === "IN" && etapaDoJogo === "FI" && categoria === "2") {
    let valorTotal = quantidade * (1320 * 4.10)
    console.log(`Valor total: US$${valorTotal.toFixed()}`)
} if (tipoDeJogo === "IN" && etapaDoJogo === "SF" && categoria === "3") {
    let valorTotal = quantidade * (550 * 4.10)
    console.log(`Valor total: US$${valorTotal.toFixed()}`)
} if (tipoDeJogo === "IN" && etapaDoJogo === "DT" && categoria === "3") {
    let valorTotal = quantidade * (330 * 4.10)
    console.log(`Valor total: US$${valorTotal.toFixed()}`)
} if (tipoDeJogo === "IN" && etapaDoJogo === "FI" && categoria === "3") {
    let valorTotal = quantidade * (880 * 4.10)
    console.log(`Valor total: US$${valorTotal.toFixed()}`)
} if (tipoDeJogo === "IN" && etapaDoJogo === "SF" && categoria === "4") {
    let valorTotal = quantidade * (220 * 4.10)
    console.log(`Valor total: US$${valorTotal.toFixed()}`)
} if (tipoDeJogo === "IN" && etapaDoJogo === "DT" && categoria === "4") {
    let valorTotal = quantidade * (170 * 4.10)
    console.log(`Valor total: US$${valorTotal.toFixed()}`)
} if (tipoDeJogo === "IN" && etapaDoJogo === "FI" && categoria === "4") {
    let valorTotal = quantidade * (330 * 4.10)
    console.log(`Valor total: US$${valorTotal.toFixed()}`)
} if (tipoDeJogo === "DO" && etapaDoJogo === "SF" && categoria === "1") {
    let valorTotal = quantidade * 1320
    console.log(`Valor total: R$${valorTotal}`)
} if (tipoDeJogo === "DO" && etapaDoJogo === "DT" && categoria === "1") {
    let valorTotal = quantidade * 660
    console.log(`Valor total: R$${valorTotal}`)
} if (tipoDeJogo === "DO" && etapaDoJogo === "FI" && categoria === "1") {
    let valorTotal = quantidade * 1980
    console.log(`Valor total: R$${valorTotal}`)
} if (tipoDeJogo === "DO" && etapaDoJogo === "SF" && categoria === "2") {
    let valorTotal = quantidade * 880
    console.log(`Valor total: R$${valorTotal}`)
} if (tipoDeJogo === "DO" && etapaDoJogo === "DT" && categoria === "2") {
    let valorTotal = quantidade * 440
    console.log(`Valor total: R$${valorTotal}`)
} if (tipoDeJogo === "DO" && etapaDoJogo === "FI" && categoria === "2") {
    let valorTotal = quantidade * 1320
    console.log(`Valor total: R$${valorTotal}`)
} if (tipoDeJogo === "DO" && etapaDoJogo === "SF" && categoria === "3") {
    let valorTotal = quantidade * 550
    console.log(`Valor total: R$${valorTotal}`)
} if (tipoDeJogo === "DO" && etapaDoJogo === "DT" && categoria === "3") {
    let valorTotal = quantidade * 330
    console.log(`Valor total: R$${valorTotal}`)
} if (tipoDeJogo === "DO" && etapaDoJogo === "FI" && categoria === "3") {
    let valorTotal = quantidade * 880
    console.log(`Valor total: R$${valorTotal}`)
} if (tipoDeJogo === "DO" && etapaDoJogo === "SF" && categoria === "4") {
    let valorTotal = quantidade * 220
    console.log(`Valor total: R$${valorTotal}`)
} if (tipoDeJogo === "DO" && etapaDoJogo === "DT" && categoria === "4") {
    let valorTotal = quantidade * 170
    console.log(`Valor total: R$${valorTotal}`)
} if (tipoDeJogo === "DO" && etapaDoJogo === "FI" && categoria === "4") {
    let valorTotal = quantidade * 330
    console.log(`Valor total: R$${valorTotal}`)
}

