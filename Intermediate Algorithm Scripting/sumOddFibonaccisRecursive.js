function sumFibs(num) {
    //build an array of fib numbers up to max num
    var arr = [1, 1];
    for (var i = 2; arr[i - 2] + arr[i - 1] <= num; i++) {   
        // console.log(arr[i]);
        arr.push(arr[i - 2] + arr[i - 1]);      
    }
    console.log(arr);
    //filter out the even numbers
    arrFiltered = arr.filter(elem => {
        return (elem % 2 !== 0);
    });
    console.log(arrFiltered);
    //sum reduce the array
    arrSummed = arrFiltered.reduce((accum, curval) => {
        return accum += curval;
    });
    console.log(arrSummed);
    return arrSummed;
}
sumFibs(75025);

// function generateFibs(max, a=1, b=1) {
//         console.log(max, a, b)    
//     //base case
//     if(a >= max) {
        
//     }
//     //recurse case
//     else {
//         console.log('recurse')        
//         return a + generateFibs(max, b,
//     }
// }

// function generateFibs(max, a=1, b=1, arr=[]) {
//         // console.log(max, a, b)    
//     //base case
//     if(a > max) {
//         // console.log('base')
//         console.log(arr);
//         return arr;
//     }
//     //recurse case
//     else {
//         // console.log('recurse');
//         arr.push(a);        
//         // console.log(arr, 'dsdsdsds');
//         return a + generateFibs(max, b, a+b, arr);
//     }
//     // console.log(arr);
// }
// generateFibs(5);
