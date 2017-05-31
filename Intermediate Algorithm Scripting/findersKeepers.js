// 'esversion: 6';
function findElement(arr, func) {
  arr = arr.filter(func);
//   console.log(arr);
  var num = arr[0];
//   console.log(num);
  return num;
}

findElement([1, 2, 3, 4], function(num){ return num % 2 === 0; });
