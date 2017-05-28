function myReplace(str, before, after) {
  //split original string into words
  const splitString = str.split(' ');
  //find the index of the word to be replaced
  const beforeIndex = splitString.indexOf(before);

  //check if the first letter of the word to be replaces is upper case
  const firstLetter = splitString[beforeIndex][0];
  if(firstLetter === firstLetter.toUpperCase()) {
    after = after[0].toUpperCase() + after.slice(1);
  }
  //starting at beforeIndex, remove 1 word, and replace with after
  splitString.splice(beforeIndex, 1, after);

  return splitString.join(' ');
}

myReplace("A quick brown fox Jumped over the lazy dog", "Jumped", "leaped");
