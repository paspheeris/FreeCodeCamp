function translatePigLatin(str) {
  let strArr = str.split('');
  console.log(strArr);
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  const newStr = [];
  //if the first letter of the string is not in the vowels array
  if(vowels.indexOf(str[0]) === -1) {
    console.log('starts with consonant');
    //find the first vowel
    var firstVowel = str.indexOf(strArr);
    console.log(firstVowel);
  }
  return str;
}

translatePigLatin("consonant");

//take the first consonant(cluster) move it to the end of the word, and suffixes an 'ay'
//if the word begins with a vowel, just a a 'way' to it
