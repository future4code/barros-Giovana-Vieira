// Exercício 2

const operation = process.argv[2]
const firstNumber = process.argv[3]
const secondNumber = process.argv[4]
let add;
let sub;
let mult;
let div;

const operations = (operationName, firstUserNumber, secondUserNumber)  => {
    switch(operationName){
        case "add":
            add = Number(firstUserNumber) + Number(secondUserNumber);
            return `Resposta: ${add}`
            break;
        case "sub":
            sub = Number(firstUserNumber) - Number(secondUserNumber)
            return `Resposta: ${sub}`
            break;
        case "mult":
            mult = Number(firstUserNumber) * Number(secondUserNumber)
            return `Resposta: ${mult}`
            break;
        case "div":
            div = Number(firstUserNumber) / Number(secondUserNumber)
            return `Resposta: ${div}`
            break;
        default:
            return `Escreva o nome da operação que você deseja realizar.`        
    } 
}

console.log(operations(operation, firstNumber, secondNumber))