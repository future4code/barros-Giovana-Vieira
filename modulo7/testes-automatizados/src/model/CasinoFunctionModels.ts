export enum CasinoLocation {
    BRAZIL = "BRAZIL",
    EUA = "EUA" 
}

export enum UserNationality {
    BRAZILIAN = "BRAZILIAN",
    AMERICAN = "AMERICAN" 
}

export type Casino = {
    name: string,
    location: CasinoLocation
}

export type User = {
    name: string,
    nationality: UserNationality,
    age: number
}