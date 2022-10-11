console.log("exercício 2");

//Exercício 1 - Parte 2

const clients = [
	{ id: 1, name: "Fulano" },
	{ id: 2, name: "Ciclano" },
	{ id: 3, name: "Beltrano" },
	{ id: 4, name: "Fulana" }
]

const registrationClient = (newClient) => {

    const checkId = () => {
        for(let client of clients){
            if(client.id === newClient.id){
                return true
            } 
        }
    }

    if(checkId() === true) {
        console.log(`Erro. Parâmetro inválido ('Id ${newClient.id} já existe').`)
    } else if(typeof newClient.name === "string"){
        clients.push(newClient)
    }

    console.log(clients)

}

registrationClient({ id: 5, name: "Giovana"})


//Exercício 2 - Parte 2

const generateMultiplicationTable = (number) => {

    let multiplicationTable = [];
    let multiplication = 0;
    
    if(typeof number !== "number"){
        console.log("Erro. Parâmetro inválido ('deve ser um número')")
    } else if(number > 10){
        console.log("Erro. Parâmetro inválido ('número precisa valer entre 1 e 10')")
    } else {            
        for(let i = 0; i <= 10; i++){
            multiplication = `${number} * ${i} = ${number * i}`
            multiplicationTable.push(multiplication)
        }
        console.log(multiplicationTable)
    }    

}

generateMultiplicationTable(8)