enum GENDERS {
	ACTION="action",
	DRAMA="drama",
	COMEDY="comedy",
	ROMANCE="romance",
	HORROR="horror"
}
type Film = {
    filmName: string,
    yearOfPremiere: number,
    gender: GENDERS,
    scoreInSites?: number
}


const films = (name: string, year: number, gender: GENDERS, score?: number): Film => {
    
    let film: Film = {
        filmName: name,
        yearOfPremiere: year,
        gender: gender,
        scoreInSites: score
    }

    return film
    
}

console.log(films("Fight Club", 1999, GENDERS.DRAMA, 79))


