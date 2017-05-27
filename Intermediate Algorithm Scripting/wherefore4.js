function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line

  arr = collection;
  for(var prop in source) {
   arr = arr.filter(collectionObject => {

      console.log(prop);
      //console.log(collectionObject[prop]);
      //console.log(source[prop]);
      if(source[prop] !== collectionObject[prop]) {
        //console.log(collectionObject[prop]);
        console.log(source[prop]);
        return false;
        }
      return true;
    });
  }
  console.log(arr);
  // Only change code above this line
  return arr;
}

whatIsInAName([
              { "a": 1, "b": 2 },
              { "a": 1 },
              { "a": 1, "b": 2, "c": 2 }
                ],
              { "a": 1, "b": 2 })
