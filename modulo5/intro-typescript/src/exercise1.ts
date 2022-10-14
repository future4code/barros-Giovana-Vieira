const sideA = Number(process.argv[2])
const sideB = Number(process.argv[3])
const sideC = Number(process.argv[4])

const checkTriangle = (a: number, b: number, c: number) : string => {
    if (a !== b && b !== c) {
      return "Escaleno";
    } else if (a === b && b === c) {
      return "Equilátero";
    } else {
      return "Isósceles";
    }
  }

  console.log(checkTriangle(sideA, sideB, sideC))

