function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line
  arr = collection;
  for(var prop in source) {
    console.log(prop);
    var some = collection.forEach(colObj => {
      if(colObj[prop] !== source[prop]) {
        delete colObj;
      }
    })
  }
  console.log(some);
}

  whatIsInAName([
                { "a": 1, "b": 2 },
                { "a": 1 },
                { "a": 1, "b": 2, "c": 2 }
                  ],
                { "a": 1, "b": 2 })
