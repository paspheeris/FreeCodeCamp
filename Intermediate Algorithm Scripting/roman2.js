function convertToRoman(num) {
  let finalArr = [];
  const bases = {
    ones: 'I',
    fives: 'V',
    tens: 'X',
    fifties: 'L',
    hundreds: 'C',
    thousands: 'M'
  };

  for(let i = 0; num > 0; i++) {
    //get the last digit
    let last = num % 10;
    console.log(last);
    //subtract last from the number
    num = num - last;
    //cut off the zero
    num /= 10;
    //console.log(num);

    let arr = [];
    if(i === 0) {
      ee
    }
  }
}

convertToRoman(1936);
console.log((1935).toString().length);
