function fearNotLetter(str) {
  const splitStr = str.split('');
  //convert array of letters into array of numerical values
  const numArr = splitStr.map(elem => {
    return elem.charCodeAt();
  });
  let missingNumVal = undefined;
  //iterate over numArr, and if a value is not equal to the previous value + 1 (or undefined), assing it to missingNumVal
  numArr.forEach((elem, index, arr) => {
    let hur = arr[index] - arr[index - 1];
    console.log(hur);
    if(hur > 1) {
      console.log('in if');
      missingNumVal = elem - 1;
    }
  });
  console.log(missingNumVal);
  if(missingNumVal === undefined) {
    return undefined;
  } else {
    return String.fromCharCode(missingNumVal);
  }
  //return String.fromCharCode(missingNumVal);
  //console.log(String.fromCharCode(missingNumVal));
}

fearNotLetter("bcd");
