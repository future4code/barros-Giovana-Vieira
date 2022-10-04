console.log("exercicio 1");

const convertCelsius = (celsius, fahrenheitOrKelvin) => {

    const celsiusToFahrenheit = celsius * 1.8 + 32
    const celsiusToKelvin = celsius + 273.15

    if ((typeof celsius !==  "number") && (fahrenheitOrKelvin !== "F" && fahrenheitOrKelvin !== "K")){
        return `Erro. Parâmetro inválido ("celsius" e "fahrenheitOrKelvin").`
    } if(typeof celsius !==  "number"){
        return `Erro. Parâmetro inválido ("celsius").`
    } if (fahrenheitOrKelvin !== "F" && fahrenheitOrKelvin !== "K"){
        return `Erro. Parâmetro inválido ("fahrenheitOrKelvin").`
    } else if (typeof celsius ===  "number" && fahrenheitOrKelvin === "F"){
        return `${celsius}° Celsius é equivalente a ${celsiusToFahrenheit}° Farenheit.`         
    } if (typeof celsius ===  "number" && fahrenheitOrKelvin === "K"){
        return `${celsius}° Celsius é equivalente a ${celsiusToKelvin.toFixed(2)} Kelvin.` 
    }
}

console.log(convertCelsius(70, "F"))
