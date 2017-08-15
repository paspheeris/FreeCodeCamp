const mongoose = require('mongoose');
// const URL = mongoose.model('URL');

exports.urlShortenerInfo = (req, res) => {
  res.render('urlShortenerInfo');
}