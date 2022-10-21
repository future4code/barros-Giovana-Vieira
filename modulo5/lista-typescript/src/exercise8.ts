const wordFactorial = (word: string): number => {

    let length: number = word.length
    
    if(length === 1 || length === 0){
        return 1
    }

    for(let i = length -1; i >= 1; i--){
        length *= i 
    }

    return length
}

console.log(wordFactorial("mesa"))