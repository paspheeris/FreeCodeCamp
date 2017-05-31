function sumFibs(num) {
    //build an array of fib numbers up to max num
    var arr = [1, 1];
    for (var i = 2; arr[i - 2] + arr[i - 1] <= num; i++) {   
        arr.push(arr[i - 2] + arr[i - 1]);      
    }
    //filter out the even numbers
    arrFiltered = arr.filter(elem => {
        return (elem % 2 !== 0);
    });
    //sum reduce the array
    arrSummed = arrFiltered.reduce((accum, curval) => {
        return accum += curval;
    });
    console.log(arrSummed);
    return arrSummed;
}
sumFibs(75025);
