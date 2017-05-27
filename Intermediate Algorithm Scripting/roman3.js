function convertToRoman(num) {
  var arr = [];

  var thousands = Math.floor(num / 1000);
  num = num - thousands * 1000;
  hurp(thousands, 'M', 'M', ' ');
  //console.log(thousands);

  /*
  var fivehundreds = Math.floor(num / 500);
  num = num - fivehundreds * 500;
  //console.log(fivehundreds);
  hurp(fivehundreds, 'D', 'M'); */

  var hundreds = Math.floor(num / 100);
  num = num - hundreds * 100;
  //console.log(hundreds);
  hurp(hundreds, 'C', 'M', 'D');

/*
  var fifties = Math.floor(num / 50);
  num = num - fifties * 50;
  hurp(fifties, 'L', 'C');*/

  var tens = Math.floor(num / 10);
  num = num - tens * 10;
  //console.log(tens);
  hurp(tens, 'X', 'C', 'L');

/*
  var fives = Math.floor(num / 5);
  num = num - fives * 5;
  hurp(fives, 'V', 'X');*/

  singles = num;
  //console.log(singles);
  hurp(singles, 'I', 'X', 'V');

  arr = arr.join('');
  console.log(arr);

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

//convertToRoman(1936);
//convertToRoman(241);
//convertToRoman(43);
//convertToRoman(9);
//console.log(1936 % 1000);
//console.log(1936 / 1000);
