const compareTwoNumbers = (num1: number, num2: number) : number => {

    let biggerNumber;
    let smallNumber;
  
    if (num1 > num2) {
        biggerNumber = num1;
        smallNumber = num2;
    } else {
        biggerNumber = num2;
        smallNumber = num1;
    }
  
    const difference = biggerNumber - smallNumber;
  
    return difference
  }

  console.log(compareTwoNumbers(10, 5))