
function dropElements(arr, func) {
  // Make a copy of the given arr
  var arr2 = [];
  arr.forEach(elem => {arr2.push(elem)});
  // Loop over original arr, and if flag is true, shift an elem from arr2
  // Runs the given function once per loop, and sets flag to false if it returns true
  flag = true;
  for(let i = 0; flag; i++) {
      if(func(arr[i])) {
          flag = false;
      } else {
          arr2.shift();
      }
  }
  console.log(arr2);
  return arr2;
}
// dropElements([1, 2, 3, 4], function(n) {return n >= 3;})
// dropElements([1, 2, 3, 7, 4], function(n) {return n > 3;});
//  dropElements([1, 2, 3], function(n) {return n > 0;});
 dropElements([0, 1, 0, 1], function(n) {return n === 1;})
// dropElements([1, 2, 3], function(n) {return n > 0;});