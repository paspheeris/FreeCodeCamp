function steamrollArray(arr) {
  // I'm a steamroller, baby
  arr.reduce((accum, curval) => {
      console.log(accum, curval);
      accum.concat(
          (Array.isArray(curval)) ? curval : steamrollArray(curval)
      )
  }, []);
//   console.log(reducedArr);
  //return reducedArr;
}


steamrollArray([1, [2], [3, [[4]]]]);
