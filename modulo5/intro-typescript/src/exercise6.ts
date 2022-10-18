const inputN1 = Number(process.argv[2])
const inputN2 = Number(process.argv[3])

const printInformations = (n1: number, n2: number) : string => {
    let sum = n1 + n2;
    let subtraction;
    let multiplication = n1 * n2;
    let biggerNumber;

    if(n1 >= n2){
        subtraction = n1 - n2
        biggerNumber = n1
    } else {
        subtraction = n2 - n1
        biggerNumber = n2
    }

    return `The sum of the two numbers is: ${sum}.
    The subtraction of the two numbers is: ${subtraction}.
    The multiplication of the two numbers is: ${multiplication}.
    The bigger number is: ${biggerNumber}.`
}

console.log(printInformations(inputN1, inputN2))