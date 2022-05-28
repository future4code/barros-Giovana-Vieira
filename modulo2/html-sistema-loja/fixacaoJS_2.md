```function calculaPrecoTotal(quantidade) {
  
  if(quantidade < 12){
    let valorTotal = quantidade * 1.30
    return valorTotal
  } else {
    let valorTotal = quantidade * 1.00
    return valorTotal
  }
}```