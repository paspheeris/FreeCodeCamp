var express = require('express');
var router = express.Router();

// const mongoose = require('mongoose');
// mongoose.connect(process.env.DATABASE);
// mongoose.Promise = global.Promise;
// const Poll = mongoose.model('Poll');
const Poll = require('../models/Poll');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.patch('/poll/vote/:uuid', (req, res) => {
//   console.log(req.body);
//   Poll.find({}, function(err, docs) {
//     if (!err){ 
//         console.log(docs);
//         process.exit();
//     } else {throw err;}
// });
  const poll = Poll.find({});
  // const poll = Poll.findOne({ 'key': '4d4cdb42-3475-432f-bccc-c3cb5d7765d9' });
  //  const poll = Poll.findOneAndUpdate({ key: req.params.uuid}, req.body, {
  //   new: true, //return the new Poll instead of the old one
  //   runValidators: true
  // }).exec();
    // .then(something => {
    //   res.json(something);
    // })
    // .catch(e => res.json({e}));
    poll.then(some => console.log(some));
    res.send('ol');
    // res.json(JSON.stringify(poll));
})

module.exports = router;
