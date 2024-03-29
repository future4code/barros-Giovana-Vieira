import { Casino, User } from "../model/CasinoFunctionModels"

const allowToEntry = (casino: Casino, listOfUsers: User[]) => {
    let allowedInBrazil: any[] = []
    let unallowedInBrazil: any[] = []
    let allowedInEua: any[] = []
    let unallowedInEua: any[] = []
    let result: any[] = []

    for(let user of listOfUsers){
        if(user.age >= 18){
            allowedInBrazil.push(user)
        } if(user.age < 18) {
            unallowedInBrazil.push(user)
        } if(user.age >= 21){
            allowedInEua.push(user)
        } if(user.age < 21) {
            unallowedInEua.push(user)
        }       
    }

        if(casino.location === "BRAZIL"){
            result.push({allowedInBrazil})
            result.push({unallowedInBrazil})
        } else {
            result.push({allowedInEua})
            result.push({unallowedInEua})
        }

        return result
}

export default allowToEntry