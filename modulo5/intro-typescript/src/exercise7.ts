let dna= "ATTGCTGCGCATTAACGACGCGTA";

const exchangeDNAtoRNA = (dna: string): string => {
    
    const dnaArray = dna.split("")

    for(let i = 0; i < dnaArray.length; i++){
        if(dnaArray[i] === "A"){
            dnaArray[i] = "U"
        } if(dnaArray[i] === "T"){
            dnaArray[i] = "A"
        } if(dnaArray[i] === "G"){
            dnaArray[i] = "C"
        } else if(dnaArray[i] === "C"){
            dnaArray[i] = "G"
        }
    }

    return dnaArray.join("")

}

console.log(exchangeDNAtoRNA(dna))