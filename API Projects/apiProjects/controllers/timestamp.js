exports.timestampInfo = (req, res) => {
  res.render('timestampInfo');
}

exports.converter = (req, res) => {
  let error = false, unix, month, day, year, natural;
  const months = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'];
  
  let date = req.params.date;
  if (parseInt(date)) {
    let dateObj = new Date(parseInt(date))
    unix = parseInt(date);
    // console.log(dateObj.getMonth());
    month = months[dateObj.getMonth()];
    //Capitalize first letter of month name
    month = month.split('');
    month[0] = month[0].toUpperCase();
    month = month.join('');
    day = dateObj.getDate();
    year = dateObj.getFullYear(); 
  } else {
    let splitDate = date.split('-');
    if (splitDate.length !== 3) {
      error = `${date} is not a valid timestamp or natural date.`;
    }
    let monthNumeric = months.indexOf(splitDate[0].toLowerCase());
    if (!error && monthNumeric === -1) {
      error = `${splitDate[0]} is not a valid month name`;
    }
    unix = new Date(splitDate[2], monthNumeric, splitDate[1]).getTime();
    month = splitDate[0];
    day = splitDate[1];
    if (!error && day < 1 ||
        !error && day > 31 ||
        !error && !parseInt(day)) {
          error = `${day} is not a valid day; please enter a number between 0 and 31`;
        }
    year = splitDate[2];
    if (!error && year < 1000 ||
        !error && year > 3000 ||
        !error && !parseInt(year)) {
          error = `${year} is not a valid year; please enter a number between 1000 and 3000`;
        }
  } 
  natural = `${month} ${day}, ${year}`;
  if (error) {
    res.json({error})
  } else {
    res.json({unix, natural})
  };
}