import { Casino, User } from "../model/CasinoFunctionModels"

const allowToEntry = (casino: Casino, listOfUsers: User[]) => {
    let result: any[] = []
    let allowedBrazilian: any[] = []
    let notAllowedBrazilian: any[] = []
    let allowedAmericans: any[] = []
    let notAllowedAmericans: any[] = []
    let brazilians: any[] = []
    let americans: any[] = []

    for(let user of listOfUsers){
        if(user.nationality === "BRAZILIAN"){
            brazilians.push(user)
        } if(user.nationality === "AMERICAN"){
            americans.push(user)
        }

        if(user.age >= 18 && user.nationality === "BRAZILIAN"){
            allowedBrazilian.push(user.name)
        } if(user.age < 18 && user.nationality === "BRAZILIAN") {
            notAllowedBrazilian.push(user.name)
        } if(user.age >= 21 && user.nationality === "AMERICAN"){
            allowedAmericans.push(user.name)
        } if(user.age < 21 && user.nationality === "AMERICAN") {
            notAllowedAmericans.push(user.name)
        }       
    }

        americans.push({allowedAmericans})
        americans.push({notAllowedAmericans})
        brazilians.push({allowedBrazilian})
        brazilians.push({notAllowedBrazilian})

        if(casino.location === "BRAZIL"){
            result.push(brazilians)
            return result
        }

        if(casino.location === "EUA"){
            result.push(americans)
            return result
        }
}

export default allowToEntry