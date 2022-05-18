// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
    return array.length   
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
    let arrayInvertido = []
    for(let indice = 0 ; indice < array.length ; indice++){
        arrayInvertido.unshift(array[indice])
    }
    return arrayInvertido
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
  return array.sort((a , b) => a - b)
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
  novoArrayPares = []
  for(let numeros of array){
    if((numeros % 2) == 0){
      novoArrayPares.push(numeros)
    }
  }
  return novoArrayPares
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
  let arrayParesExercicioCinco = array.filter((item)=>{
    if(item % 2 == 0){
      return array
    }
  })
  let arrayNumeroElevado = arrayParesExercicioCinco.map((item)=>{
    return item ** 2
  })
  return arrayNumeroElevado
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
  let maiorNumero = Math.max(...array)
  return maiorNumero    
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
  let numeroMaior = Math.max(num1 , num2)
  let numeroMenor = Math.min(num1 , num2)
  let maiorDivisivelMenor = numeroMaior % numeroMenor === 0
  let diferencaNumeros = numeroMaior - numeroMenor
  let objeto = {maiorNumero: numeroMaior , maiorDivisivelPorMenor: maiorDivisivelMenor , diferenca: diferencaNumeros}
  return objeto
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
  let primeirosPares = []
  for(num = 0 ; primeirosPares.length < n ; num++)
  if(num % 2 == 0){
    primeirosPares.push(num)
  }
  return primeirosPares
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
  if((ladoA == ladoB) && (ladoA == ladoC) && (ladoC == ladoB)){
    return "Equilátero"
  } else if((ladoA == ladoB) && (ladoA !== ladoC)){
    return "Isósceles"
  } else if((ladoB == ladoC) && (ladoB !== ladoA)){
    return "Isósceles"
  } else if((ladoA == ladoC) && (ladoA !== ladoB)){
    return "Isósceles"
  } else if((ladoA !== ladoB) && (ladoA !== ladoC)){
    return "Escaleno"
  }
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  let arraySegundoMaiorESegundoMenor = []
  let arrayOrdenado = array.sort((a , b) => a -b)
  let segundoNumeroMaior = arrayOrdenado[arrayOrdenado.length-2]
  let segundoNumeroMenor = arrayOrdenado[1]
  arraySegundoMaiorESegundoMenor.push(segundoNumeroMaior)
  arraySegundoMaiorESegundoMenor.push(segundoNumeroMenor)
  return arraySegundoMaiorESegundoMenor
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
  return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores[0]}, ${filme.atores[1]}, ${filme.atores[2]}, ${filme.atores[3]}.`   
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   let anonimo = {
     ...pessoa
   }
   anonimo.nome= "ANÔNIMO"
   return anonimo
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   let pessoasAutorizadas = pessoas.filter((pessoas)=>{
     if ((pessoas.idade > 14) && (pessoas.idade < 60) && (pessoas.altura >= 1.5))
     return pessoas
   })
   return pessoasAutorizadas    
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  let pessoasNaoAutorizadas = pessoas.filter((pessoas)=>{
    if ((pessoas.idade <= 14) || (pessoas.idade > 60) || (pessoas.altura < 1.5))
    return pessoas
  })
  return pessoasNaoAutorizadas
}


// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

  for(let objetos of contas){
 
  let calculo = contas.filter((objeto , indice , array)=>{

    let somaCompras = array[indice].compras.reduce((acumulador , numero)=> acumulador + numero, 0)

    let saldoAtualizado = array[indice].saldoTotal - somaCompras

    let novoArray = objeto.saldoTotal = saldoAtualizado
    
    array[indice].compras = []

    return novoArray

  })
  
  }  

  return contas

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  let ordenadoAlfabeticamente = consultas.sort((a , b) => {
    return a.nome.localeCompare(b.nome)
  })
  return ordenadoAlfabeticamente
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {

}