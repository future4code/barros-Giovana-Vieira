    // Exercícios de interpretação de código:

    /* 1- "Entendi" no plantão: 
    O i está sendo incrementado e sendo somado depois e aí o resultado fica 10 no console.

    2- a) Todos os números maiores que 18, no caso: 19 21 23 25 27 30
    b) Sim, poderia tirar o if e fazer um console.log(numero) e cada número do array seria impresso no console.

    3- Tive que rodar o código, mas a resposta é:
    *
    **
    ***
    ****

    */

    // Exercícios de escrita de código:

    // 1-

    let bichinhos = Number(prompt("Quantos bichinhos você tem?"))
    let nomesBichinhos = []
    
    if(bichinhos == 0){
        console.log("Que pena! Você pode adotar um pet!")
    } else { for(let bicho = 0 ; bicho < bichinhos ; bicho++) {
        let nome = prompt("Qual o nome do seu bichinho?")
        nomesBichinhos.push(nome)
    }
    }
    
    console.log(nomesBichinhos)
             
    
    // 2-   
    
    
    arrayOriginal = [10 , 31 , 40 , 51 , 60]
    let novoArray = []
        
    // a)
    
    let cadaValor = () => {
        for (let indice of arrayOriginal){
            console.log(indice)
        }
    }
    
    cadaValor(arrayOriginal)
    
    // b) 
    let cadaValorDividido = (divisao) => {
        for (let indice of arrayOriginal){
            divisao = indice / 10
            console.log(divisao)
        }
    }
    
    cadaValorDividido(arrayOriginal)
    
    // c)
    
    let valoresPares = () => {
        for(let indice of arrayOriginal){
            if(indice % 2 === 0){
                novoArray.push(indice)
            }
        }
        return novoArray
    }

    console.log(valoresPares(novoArray))

    // d) 
    
    arrayString = []
    let i = 0
    let elementos = () => {
        for(let valor of arrayOriginal){
            arrayString.push(`O elemento do index ${i} é: ${valor}`)
            i++           
        }

        return arrayString
  }

    console.log(elementos())

    // e)

    let maiorEMenorNumero = (array) => {
        let maiorNumero = 0
        let menorNumero = 0
        for(let indice ; indice < array.length ; indice++){
            let numeroArray = array[indice] 
            if(numeroArray > maiorNumero){
                maiorNumero = numeroArray
            } if(numeroArray < menorNumero){
                menorNumero = numeroArray
            }             
        }

        return `O maior é ${maiorNumero} e o menor é ${menorNumero}`
    }

    console.log(maiorEMenorNumero(arrayOriginal))

    

