// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
    return array.length   
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
    return array.reverse()
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
  return array.sort((a , b) => a - b)
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
  let arrayPares = array.filter((item)=>{
    if(item % 2 == 0){
      return array
    }
  })
  return arrayPares
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
  
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
  return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores[0]}, ${filme.atores[1]}, ${filme.atores[2]}, ${filme.atores[3]}.`   
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}