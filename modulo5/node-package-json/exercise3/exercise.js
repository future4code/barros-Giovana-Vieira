import listOfTasks from "./listTasks.js";

// Exercício 3

const task = process.argv[2]

const addAndPrintTasks = (taskUser) => {
    
    listOfTasks.push(taskUser)

    return `Tarefa adiciona com sucesso!`

}

console.log(addAndPrintTasks(task))

console.log(listOfTasks)