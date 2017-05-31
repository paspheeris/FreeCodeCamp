function sumPrimes(num) {
//fill array up to num
  const arr = [];
  for (let i = 2; i <= num; i++) {
      arr.push(i);   
  }
  
  arrFiltered = arr.filter(num => {
    numSqrt = Math.sqrt(num);
    console.log(num);
      console.log(numSqrt);
    for (let j = 2; j <= numSqrt; j++) {
        if(num % j === 0) {
            return false;
        }
    }
    return true; 
    });

    arrFlatted = arrFiltered.reduce((accum, curval) => {
        return accum + curval;
    });
  
  console.log(arrFlatted);
  return arrFlatted;
}

 sumPrimes(977);
