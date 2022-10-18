const checkRenovationOfId = (currentYear: number, yearOfBirth: number, yearOfId: number) : string => {

    let currentAge = currentYear - yearOfBirth;
    let timeOfId = currentYear - yearOfId;
    
    if(currentAge <= 20 && timeOfId >= 5){
        return `Você deve renovar sua carteira!`
    } if(currentAge > 20 && currentAge <= 50 && timeOfId >= 10){
        return `Você deve renovar sua carteira!`
    } if(currentAge > 50 && timeOfId >= 15){
        return `Você deve renovar sua carteira!`
    } else {
        return `Você não precisa renovar sua carteira!`
    }
}

console.log(checkRenovationOfId(2022, 1999, 2010))



