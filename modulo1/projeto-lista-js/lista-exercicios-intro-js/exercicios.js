// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo(altura , largura) {
  altura = Number(prompt("Qual a altura do retângulo?"))
  largura = Number(prompt("Qual a largura do retângulo?"))
  let area = (altura * largura)
  console.log(area)
}

// EXERCÍCIO 02
function imprimeIdade(anoAtual , anoDeNascimento) {
  anoAtual = Number(prompt("Qual o ano atual?"))
  anoDeNascimento = Number(prompt("Qual seu ano de nascimento?"))
  let idade = (anoAtual - anoDeNascimento)
  console.log(idade)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  peso = Number(prompt("Qual seu peso?"))
  altura = Number(prompt("Qual sua altura?"))
  let imc = peso / (altura * altura)
  return imc
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario(nome , idade , email) {
  nome = prompt("Qual seu nome?")
  idade = prompt("Qual sua idade?")
  email = prompt("Qual seu e-mail?")
  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas(cor1 , cor2 , cor3) {
  cor1 = prompt("Qual sua primeira cor favorita?")
  cor2 = prompt("Qual sua segunda cor favorita?")
  cor3 = prompt("Qual sua terceira cor favorita?")
  array = [cor1 , cor2 , cor3]
  console.log(array)
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  string = prompt("Escreva uma palavra:")
  let stringMaiuscula = string.toUpperCase()
  return stringMaiuscula
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  custo = Number(prompt("Qual o custo do espetáculo?"))
  valorIngresso = Number(prompt("Valor do ingresso?"))
  let ingressosQuePrecisam = (custo / valorIngresso)
  return ingressosQuePrecisam 
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  const tamanho1 = string1.length
  const tamanho2 = string2.length
  let comparacaoStrings = tamanho1 === tamanho2
  return comparacaoStrings
}


// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  let primeiroNumero = array[0]
  return primeiroNumero
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  let ultimoNumero = array[array.length-1]
  return ultimoNumero
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array , from , to) {
  array.splice(to , 0 , array.splice(from , 1)[0])
  return array
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  return string1.toUpperCase() === string2.toUpperCase()
  
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  let anoAtual = Number(prompt("Qual o ano atual?"))
  let anoDeNascimento = Number(prompt("Qual o ano de nascimento"))
  let carteira = Number(prompt("Qual o ano em que sua carteira foi emitida?"))
  let idade = anoAtual - anoDeNascimento
  let renovacao = anoAtual - carteira
  let menosVinte = (idade <= 20) && (renovacao >= 5)
  let entreVinteCinquenta = (idade > 20) && (idade <= 50) && (renovacao >= 10)
  let acimaCinquenta = (idade > 50) && (renovacao >= 15)
  console.log(menosVinte || entreVinteCinquenta || acimaCinquenta)
}



// EXERCÍCIO 14

function checaAnoBissexto(ano) {
  let quatroNaoCem = ((ano % 4) === 0) && ((ano % 100) !== 0)
  let quatroCemQuatrocentos = ((ano % 4) === 0) && ((ano % 100) === 0) && ((ano % 400) === 0)
  let quatrocentos = (ano % 400) === 0
  return quatroNaoCem || quatroCemQuatrocentos || quatrocentos
}

// EXERCÍCIO 15

function checaValidadeInscricaoLabenu() {

  let maisDeDezoito = prompt("Você tem mais de 18 anos?")
  let esinoMedio = prompt("Você possui ensino médio completo?")
  let disponibilidade = prompt("Você possui disponibilidade exclusiva durante os horários do curso?")
  let resposta = "sim"
  console.log((maisDeDezoito === resposta) && (esinoMedio === resposta) && (disponibilidade === resposta))
}