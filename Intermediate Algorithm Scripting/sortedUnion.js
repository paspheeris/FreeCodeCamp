function uniteUnique(arr) {
  const builtArray = [];
  //push all the arguments into a single (multidimensional) array
  for(let prop in arguments) {
    builtArray.push(arguments[prop]);
  }
  //flatten the array
  const flatArray = builtArray.reduce((accum, curval) => {
    return accum.concat(curval);
  });
  //reduce array
  const filteredArray = flatArray.reduce((accum, curval) => {
    //if the current val isnt in the accum, push it in
    if(! accum.includes(curval)) {
      accum.push(curval);
    }
    return accum;
  }, []);
  console.log(filteredArray);
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
