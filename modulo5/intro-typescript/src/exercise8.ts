/* Escreva uma função que receba uma string e retorne a string reversa. Em outras palavras, se o input da sua função for "abcd", a saída deve ser "dcba". */

let word = require("readline-sync");
let wordInput = word.question("Digite uma palavra:")

const stringReverse = (word: string): string => {
    return word.split("").reverse().join("")     
}

console.log(stringReverse(wordInput))