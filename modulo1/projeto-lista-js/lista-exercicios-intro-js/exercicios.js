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
/*- Exercício 13
    
    Escreva uma função que pergunta ao usuário o ano atual, o ano de nascimento de uma pessoa, 
    e o ano em que sua carteira de identidade foi emitida (nessa ordem). A função deve imprimir
     no console um booleano (true ou false) que indica se a carteira precisa ser renovada ou não.
      A carteira precisa ser renovada segundo os seguintes critérios:
    
    - Para pessoas com menos de 20 anos, ou exatamente 20 anos, deve ser renovada 
    de 5 em 5 anos (se for exatamente 5 anos, deve ser renovada).
    - Para pessoas entre 20 e 50 anos, ou exatamente 50, deve ser renovada 
    de 10 em 10 anos (se for exatamente 10 anos, deve ser renovada).
    - Para pessoas acima dos 50 anos, deve ser renovada de 15 em 15 anos*/

function checaRenovacaoRG() {
  let anoAtual = Number(prompt("Qual o ano atual?"))
  let anoDeNascimento = Number(prompt("Qual o ano do nascimento?"))
  let carteira = Number(prompt("Qual o ano em que sua carteira foi emitida?"))
  let idade = anoAtual - anoDeNascimento
  let renovacao = anoAtual - carteira
  let menosVinte = (idade <= 20) === (renovacao >= 5)
  let entreVinteCinquenta = ((idade > 20) || (idade <= 50) === (renovacao >= 10))
  let acimaCinquenta = (idade > 50) === (renovacao >= 15)
  console.log(menosVinte || entreVinteCinquenta || acimaCinquenta)
    // implemente sua lógica aqui
}



// EXERCÍCIO 14
/*- Exercício 14
    
    Escreva uma função que recebe um ano e retorna um booleano (true ou false) 
    que indica se o ano é bissexto. Um ano é bissexto de acordo com as seguintes condições:
    
    - **São bissextos** todos os anos múltiplos de 400**.**
    - **São bissextos** todos os múltiplos de 4, exceto se for múltiplo de 100 mas não de 400**.**
    - **Não são bissextos** todos os demais anos.*/

function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15

function checaValidadeInscricaoLabenu() {

  let maisDeDezoito = prompt("Você tem mais de 18 anos?")
  let esinoMedio = prompt("Você possui ensino médio completo?")
  let disponibilidade = prompt("Você possui disponibilidade exclusiva durante os horários do curso?")
  let resposta = "sim"
  console.log((maisDeDezoito === resposta) && (esinoMedio === resposta) && (disponibilidade === resposta))
  // implemente sua lógica aqui
}