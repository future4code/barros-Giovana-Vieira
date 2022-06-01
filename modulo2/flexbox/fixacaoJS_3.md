```function contaOcorrencias(arrayDeNumeros, numeroEscolhido){
  
  for(let i = 0 ; i < arrayDeNumeros.length ; i++){
    if(i == numeroEscolhido){
      i++
      return `O número ${numeroEscolhido} aparece ${contador}x`
    } else {
      return `Número não encontrado`
    }
  }
}```