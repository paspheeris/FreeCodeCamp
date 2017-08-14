exports.headerParserInfo = (req, res) => {
  res.render('headerParserInfo');
}

exports.headerParserWhoami = (req, res) => {
  // res.json(req.baseUrl);
  console.log(req.headers);
  res.json({
    "ipaddres": req.ip,
    "language": req.headers['accept-language'].split(',')[0],
    "os": req.useragent.os,
    "browser": req.useragent.browser,
    "version": req.useragent.version
  });
}