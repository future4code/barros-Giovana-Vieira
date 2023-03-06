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

describe.skip("tests", () => {
    test("Test 1", () => {
    const userTest = {
        name: "Giovana",
        nationality: UserNationality.BRAZILIAN,
        age: 23
    }

    const result = allowToEntry(casinoBrazil, [userTest])

    expect(result[0].allowedInBrazil.length).toBeLessThan(2)
    expect(result[0].allowedInBrazil.length).toBeGreaterThan(0)
    expect(result)
    .toEqual([
        { 
            allowedInBrazil:
            [
                {
                    name: "Giovana",
                    nationality: 'BRAZILIAN',
                    age: 23
                }
            ] 
        },
        { 
            unallowedInBrazil: [] 
        }
    ])  
    })

    test("Test 2", () => {
        const userTest = {
            name: "John",
            nationality: UserNationality.AMERICAN,
            age: 20
        }
    
        const result = allowToEntry(casinoEua, [userTest])

        expect(result[1].unallowedInEua.length).toBe(1)
    })
})