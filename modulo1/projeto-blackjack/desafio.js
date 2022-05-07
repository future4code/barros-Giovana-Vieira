// Desafio projeto blackjack

let jogo = confirm(`Boas vindas ao jogo de Blackjack!
Quer iniciar uma nova rodada?`)

if(jogo == true){

let jogadorSorteioUm = comprarCarta()
let jogadorSorteioDois = comprarCarta()
let jogadorSorteioTres = comprarCarta()
let jogadorSorteioQuatro = comprarCarta()
let computadorSorteioUm = comprarCarta()
let computadorSorteioDois = comprarCarta()
let computadorSorteioTres = comprarCarta()
let computadorSorteioQuatro = comprarCarta()

let somaJogadorUm = jogadorSorteioUm + jogadorSorteioDois
let somaJogadorDois = jogadorSorteioUm + jogadorSorteioDois + jogadorSorteioTres
let somaJogadorTres = jogadorSorteioUm + jogadorSorteioDois + jogadorSorteioTres + jogadorSorteioQuatro
let somaComputadorUm = computadorSorteioUm + computadorSorteioDois
let somaComputadorDois = computadorSorteioUm + computadorSorteioDois + computadorSorteioTres
let somaComputadorTres = computadorSorteioUm + computadorSorteioDois + computadorSorteioTres + computadorSorteioQuatro

let novaCarta = confirm(`Suas cartas são ${jogadorSorteioUm.texto} ${jogadorSorteioDois.texto}. A carta revelada do computador é ${computadorSorteioUm.texto}.
Deseja comprar mais uma carta?`)



}
