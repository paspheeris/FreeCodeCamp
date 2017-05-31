function smallestCommons(arr) {
    //sort the given numbers
    arr = arr.sort((a, b) => {return a-b});
    const arrBegin = arr[0];
    const arrEnd = arr[1];
    //array of numbers in the given range
    const givenArray = [];
    for(let i = arrBegin; i <= arrEnd; i++) {
        givenArray.push(i);
    }
    //lcm(a, b, c) === lcm(a, lcm(b, c))
    const reduceArray = givenArray.reduce((accum, curval) => {
        return lcm(accum, curval);
    }, arrBegin);
    // console.log(reduceArray);
    return reduceArray;
}
function gcd(a, b) {
    //base case
    if (a === 0) {
        return b;
    } else if (b === 0) {
        return a;
    }
    //recurse case
    else {
        let remainder = a % b;
        return gcd(b, remainder);
    }
}
function lcm(a, b) {
    return((a * b) / gcd(a, b));
}
smallestCommons([5,1]);
