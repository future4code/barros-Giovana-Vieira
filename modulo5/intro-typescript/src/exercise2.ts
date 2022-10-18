const firstColorUser = require("readline-sync");
const secondColorUser = require("readline-sync");
const thirdColorUser = require("readline-sync");

const printThreeFavoritesColors = () : void => {

    const firstColor: string = firstColorUser.question("Qual sua primeira cor favorita?")
    const secondColor: string = secondColorUser.question("Qual sua segunda cor favorita?")
    const thirdColor: string = thirdColorUser.question("Qual sua terceira cor favorita?")

    console.log([firstColor, secondColor, thirdColor])
 }

 printThreeFavoritesColors()


