function pairElement(str) {
  const dnaObj = {
    'A' : 'T',
    'T' : 'A',
    'G' : 'C',
    'C' : 'G'
  }
  const finalArr = [];
  const strSplit = str.split('');
  strSplit.forEach(letter => {
    let tempArr = [];
    tempArr.push(letter, dnaObj[letter]);
    //console.log(tempArr);
    finalArr.push(tempArr);
  });
  console.log(finalArr);
}

pairElement("GCG");
