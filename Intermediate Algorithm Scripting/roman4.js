function convertToRoman(num) {
  var arr = [];

  var thousands = Math.floor(num / 1000);
  num = num - thousands * 1000;
  hurp(thousands, 'M', 'M', ' ');

  var hundreds = Math.floor(num / 100);
  num = num - hundreds * 100;
  hurp(hundreds, 'C', 'M', 'D');

  var tens = Math.floor(num / 10);
  num = num - tens * 10;
  hurp(tens, 'X', 'C', 'L');

  singles = num;
  hurp(singles, 'I', 'X', 'V');

  arr = arr.join('');
  return arr;


  function hurp(digit, base, above, mid) {
  if(digit < 4) {
    for (var i = 0; i < digit; i++) {
      arr.push(base);
    }
  } else if (digit === 4) {
    arr.push(base + mid);
  } else if (digit === 5) {
    arr.push(mid);
  } else if (digit > 5 && digit < 9) {
    arr.push(mid);
    for (var i = 0; i < digit - 5; i++) {
      arr.push(base);
    }
  } else if (digit === 9) {
    arr.push(base + above);
  }
  }
}
