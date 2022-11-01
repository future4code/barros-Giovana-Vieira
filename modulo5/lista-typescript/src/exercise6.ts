type Client = {
   client: string,
   totalBalance: number,
   debts: number[]
}

const clients: Client[] = [
    { client: "João", totalBalance: 1000, debts: [100, 200, 300] },
    { client: "Paula", totalBalance: 7500, debts: [200, 1040] },
    { client: "Pedro", totalBalance: 10000, debts: [5140, 6100, 100, 2000] },
    { client: "Luciano", totalBalance: 100, debts: [100, 200, 1700] },
    { client: "Artur", totalBalance: 1800, debts: [200, 300] },
    { client: "Soter", totalBalance: 1200, debts: [] }
]

const updatedBalance = (arr: Client[]): Client[] => {
    
    const totalDebts = arr.filter((client): Client => {

        let total: number;

        if(client.debts.length === 0){
            client.debts = [0]
        }        
        if(client.debts.length > 0){
            total = client.debts.reduce((soma, i)=>{
                return soma + i
            })
        }
        
        client.debts = []
        client.debts.push(total)

        return client
    })

    const finalBalance = totalDebts.filter((client): Client => {
        client.totalBalance = client.totalBalance - client.debts[0]
        client.debts = []
        return client
    })

    const indebtedClients = finalBalance.filter((client)=>{
        if(client.totalBalance < 0){
            return client
        }
    })

    return indebtedClients
}

console.log(updatedBalance(clients))