const nameAndBirthday = (name: string, birthday: string) => {
    
    let birthdaySeparate: string[] = birthday.split("/")

    return `Olá me chamo ${name}, nasci no dia ${birthdaySeparate[0]} do mês de ${birthdaySeparate[1]} do ano de ${birthdaySeparate[2]}.`

}

console.log(nameAndBirthday("Giovana", "01/04/1999"))