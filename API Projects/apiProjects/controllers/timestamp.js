exports.timestampInfo = (req, res) => {
  res.render('timestampInfo');
}

exports.converter = (req, res) => {
  let error = false, unix, month, day, year;
  const months = ['january', 'febuary', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'];
  
  let date = req.params.date;
  if (parseInt(date)) {
    let dateObj = new Date(parseInt(date))
    unix = date;
    console.log(dateObj.getMonth());
    month = months[dateObj.getMonth() - 1];
    day = dateObj.getDate();
    year = dateObj.getFullYear(); 
  } else {
    let splitDate = date.split('-');
    let monthNumeric = months.indexOf(splitDate[0].toLowerCase());
    if (monthNumeric === -1) {
      error = `${splitDate[0]} is not a valid month name`
    }
    unix = new Date(splitDate[2], monthNumeric, splitDate[1]).getTime();
    month = splitDate[0];
    day = splitDate[1];
    year = splitDate[2];
  } 
  if (error) {
    res.json({error})
  } else {
    res.json({unix, month, day, year})
  };
  // res.render('timestampDisplay', {
  //     error,
  //     unix,
  //     month,
  //     day,
  //     year
  //   });
  
  // console.log(parseInt(date));
}