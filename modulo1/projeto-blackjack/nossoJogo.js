// Projeto blackjack

console.log("Boas vindas ao jogo de Blackjack!")

let game = confirm("Quer iniciar uma nova rodada?")

if(game){

let jogadorPrimeiraCarta = comprarCarta()
let jogadorSegundaCarta = comprarCarta()
let computadorPrimeiraCarta = comprarCarta()
let computadorSegundaCarta = comprarCarta()

let somaPontuacaoJogador = jogadorPrimeiraCarta.valor + jogadorSegundaCarta.valor
let somaPontuacaoComputador = computadorPrimeiraCarta.valor + computadorSegundaCarta.valor

console.log(`Usuário - cartas: ${jogadorPrimeiraCarta.texto} ${jogadorSegundaCarta.texto}  - pontuação ${somaPontuacaoJogador}`)
console.log(`Computador - cartas: ${computadorPrimeiraCarta.texto} ${computadorSegundaCarta.texto}  - pontuação ${somaPontuacaoComputador}`)

if(somaPontuacaoJogador > somaPontuacaoComputador){
   console.log("O usuário ganhou!")
} else if(somaPontuacaoComputador > somaPontuacaoJogador){
   console.log("O computador ganhou!")
} else if(somaPontuacaoJogador == somaPontuacaoComputador){
   console.log("Empate!")
} 

} else {
   console.log("O jogo acabou!")
} 

