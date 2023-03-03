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

    expect(allowToEntry(casinoEua, users)).toEqual([
        { 
            allowedInEua:
            [
                {
                    name: "Giovana",
                    nationality: 'BRAZILIAN',
                    age: 23
                },
                {
                    name: 'Guilherme', 
                    nationality: 'AMERICAN', 
                    age: 32 
                }
            ] 
        },
        { 
            unallowedInEua: 
            [
                {
                    name: "Rafael",
                    nationality: 'BRAZILIAN',
                    age: 17
                },
                { 
                    name: 'Caio', 
                    nationality: 'AMERICAN', 
                    age: 15 
                },
                { 
                    name: 'Fábio', 
                    nationality: 'AMERICAN', 
                    age: 12 
                }             
            ] 
        }
    ])  
    })

    test("Test 2", () => {
        const user = {
            name: "Giovana",
            nationality: UserNationality.BRAZILIAN,
            age: 23
        }

    expect(allowToEntry(casinoBrazil, [user])).toEqual([
        {
            allowedInBrazil:
            [
                {
                    name: "Giovana",
                    nationality: UserNationality.BRAZILIAN,
                    age: 23
                }
            ]
        },
        { 
            unallowedInBrazil: [] 
        }
    ])
    })

    test("Test 3", () => {
        const user = {
            name: "Josh",
            nationality: UserNationality.AMERICAN,
            age: 23
        }

    expect(allowToEntry(casinoBrazil, [user])).toEqual([
        {
            allowedInBrazil:
            [
                {
                    name: "Josh",
                    nationality: UserNationality.AMERICAN,
                    age: 23
                }
            ]
        },
        { 
            unallowedInBrazil: [] 
        }
    ])
    })

    test("Test 4", () => {
        const usersTest: User[] = [
            {
                name: "Maria",
                nationality: UserNationality.BRAZILIAN,
                age: 19
            },
            {
                name: "João",
                nationality: UserNationality.BRAZILIAN,
                age: 19
            },
            {
                name: "Ryan",
                nationality: UserNationality.AMERICAN,
                age: 19
            },
            {
                name: "Jenny",
                nationality: UserNationality.AMERICAN,
                age: 19
            }
        ]

    expect(allowToEntry(casinoEua, usersTest)).toEqual([
        {
            allowedInEua: []
        },
        {
            unallowedInEua: [
                {
                    name: "Maria",
                    nationality: "BRAZILIAN",
                    age: 19
                },
                {
                    name: "João",
                    nationality: "BRAZILIAN",
                    age: 19
                },
                {
                    name: "Ryan",
                    nationality: "AMERICAN",
                    age: 19
                },
                {
                    name: "Jenny",
                    nationality: "AMERICAN",
                    age: 19
                }
            ]
        }
    ])
    })

    test("Test 5", () => {
        const usersTest: User[] = [
            {
                name: "Maria",
                nationality: UserNationality.BRAZILIAN,
                age: 19
            },
            {
                name: "João",
                nationality: UserNationality.BRAZILIAN,
                age: 19
            },
            {
                name: "Ryan",
                nationality: UserNationality.AMERICAN,
                age: 21
            },
            {
                name: "Jenny",
                nationality: UserNationality.AMERICAN,
                age: 21
            }
        ]

    expect(allowToEntry(casinoEua, usersTest)).toEqual([
        {
            allowedInEua: [
                {
                    name: "Ryan",
                    nationality: UserNationality.AMERICAN,
                    age: 21
                },
                {
                    name: "Jenny",
                    nationality: UserNationality.AMERICAN,
                    age: 21
                } 
            ]
        },
        {
            unallowedInEua: [
                {
                    name: "Maria",
                    nationality: UserNationality.BRAZILIAN,
                    age: 19
                },
                {
                    name: "João",
                    nationality: UserNationality.BRAZILIAN,
                    age: 19
                }
            ]
        }
    ])
    })
})