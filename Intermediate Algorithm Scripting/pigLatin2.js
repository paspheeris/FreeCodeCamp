function translatePigLatin(str) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let strArr = str.split('');
  let firstVowelIndex = null;

  //find the index of the first vowel
  strArr.some((elem, index) => {
    if (vowels.includes(elem)) {
    firstVowelIndex = index;
    return true;
    }
  });

  //if the firstVowelIndex is 0, add 'way' to the end and return
  if(firstVowelIndex === 0) {
    str = str + 'way';
    return str;
  //else starts with a consonant
  } else {
    //add the initial consonant cluster to the end of the word
    strArr.push(str.substr(0, firstVowelIndex));
    //add 'ay' to end
    strArr.push('ay');
    //cut the consonants from the begining
    strArr.splice(0, firstVowelIndex);

    return strArr.join('');
  }
}

translatePigLatin("clonsonant");
//translatePigLatin("all");
