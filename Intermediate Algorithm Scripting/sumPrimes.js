function sumPrimes(num) {
    //fill array up to num
  const arr = [];
  for (let i = 2; i <= num; i++) {
      arr.push(i);   
  }
  var counter= 3;
  arrFiltered = arr.filter(num => {
      counter = 3;
    numSqrt = Math.sqrt(num);
    console.log(numSqrt, num, num % counter);
    while (counter <= numSqrt) {
        console.log('counter:', counter);
        if(num % counter === 0) {
            console.log(num, counter, num % counter);
            return false;
        }
        counter++;
        }
    return true; 
    });
  
  console.log(arrFiltered);
}

sumPrimes(25);
