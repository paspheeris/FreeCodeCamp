function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line
  collection.forEach(collectionObject => {
    for(var prop in source) {
      if(source[prop] === collectionObject[prop]) {
        arr.push(collectionObject);
      }
    }
  })
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
