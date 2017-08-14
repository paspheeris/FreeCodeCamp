var express = require('express');
var router = express.Router();
const timestampController = require('../controllers/timestamp.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/timestamp', timestampController.timestampInfo);
router.get('/timestamp/:date', timestampController.converter);

module.exports = router;
