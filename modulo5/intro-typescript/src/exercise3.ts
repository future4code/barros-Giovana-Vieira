const checkLeapYear = (year: number) : boolean => {

    if(year % 4 === 0 && year % 100 === 0 && year % 400 !== 0){
        return false
    } else if(year % 400 === 0){
        return true
    } else if(year % 4 === 0){
        return true
    }
}

console.log(checkLeapYear(1900))



