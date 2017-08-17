var express = require('express');
var router = express.Router();
const timestampController = require('../controllers/timestamp.js');
const headerParserController = require('../controllers/headerParser.js');
const urlShortenerController = require('../controllers/urlShortener.js');
const imageSearchController = require('../controllers/imageSearch.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/timestamp', timestampController.timestampInfo);
router.get('/timestamp/:date', timestampController.converter);

router.get('/headerparser', headerParserController.headerParserInfo);
router.get('/headerparser/whoami', headerParserController.headerParserWhoami);

router.get('/url', urlShortenerController.urlShortenerInfo);
router.get('/url/*', urlShortenerController.url);

router.get('/imageInfo', imageSearchController.imageSearchInfo);
router.get('/image/history', imageSearchController.history);
router.get('/image*', imageSearchController.apiEndpoint);

module.exports = router;