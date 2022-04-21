// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
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
  // implemente sua lógica aqui
}

// EXERCÍCIO 02
function imprimeIdade(anoAtual , anoDeNascimento) {
  anoAtual = Number(prompt("Qual o ano atual?"))
  anoDeNascimento = Number(prompt("Qual seu ano de nascimento?"))
  let idade = (anoAtual - anoDeNascimento)
  console.log(idade)
  // implemente sua lógica aqui
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  peso = Number(prompt("Qual seu peso?"))
  altura = Number(prompt("Qual sua altura?"))
  let imc = peso / (altura * altura)
  return imc
  // implemente sua lógica aqui
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario(nome , idade , email) {
  nome = prompt("Qual seu nome?")
  idade = prompt("Qual sua idade?")
  email = prompt("Qual seu e-mail?")
  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas(cor1 , cor2 , cor3) {
  cor1 = prompt("Qual sua primeira cor favorita?")
  cor2 = prompt("Qual sua segunda cor favorita?")
  cor3 = prompt("Qual sua terceira cor favorita?")
  array = [cor1 , cor2 , cor3]
  console.log(array)
  // implemente sua lógica aqui
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  string = prompt("Escreva uma palavra:")
  let stringMaiuscula = string.toUpperCase()
  return stringMaiuscula
  // implemente sua lógica aqui
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  custo = Number(prompt("Qual o custo do espetáculo?"))
  valorIngresso = Number(prompt("Valor do ingresso?"))
  let ingressosQuePrecisam = (custo / valorIngresso)
  return ingressosQuePrecisam 
  // implemente sua lógica aqui
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  const tamanho1 = string1.length
  const tamanho2 = string2.length
  let comparacaoStrings = tamanho1 === tamanho2
  return comparacaoStrings
  // implemente sua lógica aqui
}


// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  let primeiroNumero = array[0]
  return primeiroNumero
  // implemente sua lógica aqui
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  let ultimoNumero = array[array.length-1]
  return ultimoNumero
  // implemente sua lógica aqui
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array , from , to) {
  array.splice(to , 0 , array.splice(from , 1)[0])
  return array
 // implemente sua lógica aqui
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  return string1.toUpperCase() === string2.toUpperCase()
  // implemente sua lógica aqui
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
    // implemente sua lógica aqui
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}