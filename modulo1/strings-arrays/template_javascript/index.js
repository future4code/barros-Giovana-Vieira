// Exercícios de interpretação de código:

/* 1- a. undefined
b. null
c. 11
d. 3
e. 3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13
f. 9 */

// 2- SUBI NUM ÔNIBUS EM MIRROCOS, 27

// Exercícios de escrita de código:

// Exercício 1:

let emailDoUsuario
let nomeDoUsuario

emailDoUsuario = prompt("Digite seu e-mail:")
nomeDoUsuario = prompt("Digite seu nome:")

console.log(`O e-mail ${emailDoUsuario.trim()} foi cadastrado com sucesso. Seja bem-vinda(o), ${nomeDoUsuario}`)

// Exercício 2:

const comidasPreferidas = ["Hambúrguer" , "Bife à Rolê" , "Macarrão" , "Pizza" , "Sonho"]
let comidaUsuario
let indiceUm = 0

console.log (comidasPreferidas)

console.log (`Essas são minhas comidas preferidas:
${comidasPreferidas[0]}
${comidasPreferidas[1]}
${comidasPreferidas[2]}
${comidasPreferidas[3]}
${comidasPreferidas[4]}`)

comidaUsuario = prompt("Qual sua comida preferida:")

comidasPreferidas[indiceUm+1] = comidaUsuario

console.log(comidasPreferidas)

// Exercício 3:

const listaDeTarefas = []
let tarefaUm
let tarefaDois
let tarefaTres
let tarefaRemover


tarefaUm = prompt("Digite a tarefa número 1:")
tarefaDois = prompt("Digite a tarefa número 2:")
tarefaTres = prompt("Digite a tarefa número 3:")

listaDeTarefas.push(tarefaUm)
listaDeTarefas.push(tarefaDois)
listaDeTarefas.push(tarefaTres)

console.log(listaDeTarefas)

tarefaRemover = Number(prompt("Digite o número da sua tarefa (1, 2 ou 3):"))

listaDeTarefas.splice(tarefaRemover-1, 1)

console.log(listaDeTarefas)




































