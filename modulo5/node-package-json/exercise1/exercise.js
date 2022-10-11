// Exercício 1

// a)

// Utilizamos o process.argv para utilizar os parâmetros que enviamos através do terminal.

// b)

const nameUser = process.argv[2]
const ageUser = process.argv[3]

const printNameAndAge = (name, age) => {
    return `Olá, ${name}! Você tem ${age} anos.`
}

console.log(printNameAndAge(nameUser, ageUser)) 

// c)

const printNameAgeAndOlderAge = (name, age) => {
    const olderAge = Number(age) + 7
    return `Olá, ${name}! Você tem ${age} anos. Em sete anos você terá ${olderAge}.`
}

console.log(printNameAgeAndOlderAge(nameUser, ageUser))