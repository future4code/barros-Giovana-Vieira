let age = require("readline-sync");
let completedHighSchool = require("readline-sync");
let hoursAvailable = require("readline-sync");
let preferenceShift = require("readline-sync");
let ageInput = age.question("Qual a sua idade?")
let completedHighSchoolInput = completedHighSchool.question("Voce possui ensino medio completo?")
let hoursAvailableInput = hoursAvailable.question("Quantas horas voce tem disponivel na semana para o curso?")
let preferenceShiftInput = preferenceShift.question("O seu curso sera o integral ou noturno?")

const studentApprovedOrReproved = (age: number, completedHighSchool: string, hoursAvailable: number, preferenceShift: string) : boolean =>{

    if((age >= 18) && (completedHighSchool === "Sim" || completedHighSchool === "sim") && (hoursAvailable >= 40) && (preferenceShift === "integral" || preferenceShift === "Integral")){
        return true
    } else if((age >= 18) && (completedHighSchool === "Sim" || completedHighSchool === "sim") && (hoursAvailable >= 20) && (preferenceShift === "noturno" || preferenceShift === "Noturno")){
        return true
    } else {
        return false
    }
}

console.log(studentApprovedOrReproved(ageInput, completedHighSchoolInput, hoursAvailableInput, preferenceShiftInput))