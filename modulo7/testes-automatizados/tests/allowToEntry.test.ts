import allowToEntry from "../src/testsFuncs/allowToEntry"
import { Casino, User, CasinoLocation, UserNationality } from "../src/model/CasinoFunctionModels"

const casinoEua: Casino = {
    name: "Casino EUA",
    location: CasinoLocation.EUA
}

const casinoBrazil: Casino = {
    name: "Casino EUA",
    location: CasinoLocation.BRAZIL
}

const users: User[] = [
    {
        name: "Giovana",
        nationality: UserNationality.BRAZILIAN,
        age: 23
    },
    {
        name: "Rafael",
        nationality: UserNationality.BRAZILIAN,
        age: 17
    },
    {
        name: "Guilherme",
        nationality: UserNationality.AMERICAN,
        age: 32
    },
    {
        name: "Caio",
        nationality: UserNationality.AMERICAN,
        age: 15
    },
    {
        name: "Fábio",
        nationality: UserNationality.AMERICAN,
        age: 12
    }
]

describe("tests", () => {
    test("Test 1", () => {

    expect(allowToEntry(casinoEua, users)).toEqual([
        [
            {
                name: 'Guilherme', 
                nationality: 'AMERICAN', 
                age: 32 
            },
            { 
                name: 'Caio', 
                nationality: 'AMERICAN', 
                age: 15 
            },
            { 
                name: 'Fábio', 
                nationality: 'AMERICAN', 
                age: 12 },
            { 
                allowedAmericans: 
                [
                    "Guilherme"
                ] 
            },
            { 
                notAllowedAmericans: 
                [
                    "Caio", 
                    "Fábio"
                ] 
            }
        ]
    ])  
    })
})