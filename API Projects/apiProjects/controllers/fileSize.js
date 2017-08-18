exports.main = (req, res) => {
  res.render('fileSizeMain');
}

exports.upload = (req, res) => {
  console.log(req.file);
  const {originalname, size, mimetype} = req.file;
  res.json({
    originalname,
    size,
    mimetype,
  });
}